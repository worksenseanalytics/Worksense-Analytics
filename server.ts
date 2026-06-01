import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK with custom fallback and appropriate headers
let aiInstance: GoogleGenAI | null = null;
function getGemini(): GoogleGenAI | null {
  if (!aiInstance) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      console.warn("GEMINI_API_KEY is not configured in environment variables.");
      return null;
    }
    aiInstance = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiInstance;
}

// Server-side route for AI Data Analyst consultation
app.post("/api/consult", async (req, res) => {
  try {
    const { message, history, businessType, dataType } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const ai = getGemini();

    const systemPrompt = `Anda adalah "Worksense Virtual Data Analyst Assistant", asisten kecerdasan buatan dari Worksense Analytics, penyedia jasa analisis data, pembersihan, dan pembuatan dashboard profesional terpercaya.

Tugas Anda adalah berkonsultasi secara ringkas, ramah, dan sangat ahli dengan calon klien (UMKM, Startup, Enterprise) dalam Bahasa Indonesia. Bantu mereka memahami bagaimana Worksense Analytics dapat memecahkan masalah data mereka secara konkret.

Informasi Bisnis Klien Saat Ini:
- Tipe Bisnis: ${businessType || "Belum dipilih / Umum"}
- Format/Sumber Data: ${dataType || "Belum dipilih / Beragam"}

Panduan Menjawab:
1. Hubungkan langsung masalah data klien dengan layanan Worksense Analytics yang relevan:
   - Jika data kotor/tersebar: Soroti layanan "Advanced Data Cleaning & Structuring" (SQL/Python Pandas/NumPy).
   - Jika butuh dashboard eksekutif / korporat: Soroti "Executive Dashboard interaktif Power BI / Tableau".
   - Jika UMKM/Startup yang butuh solusi hemat: Soroti "Otomasi Visualisasi Data Excel" atau "Analisis Data Tren Penjualan".
2. Jelaskan sertifikasi kompetensi global yang dimiliki tim kami (Google Advanced Data Analytics, IBM Data Science, dan DataCamp) untuk membangun kepercayaan.
3. Sebutkan alur kerja kita yang profesional (Konsultasi -> Scope of Work -> Eksekusi -> Review Dashboard & Serah Sumber File dengan NDA Friendly).
4. Berikan jawaban yang terstruktur rapi menggunakan poin-poin tebal. Jawab dengan singkat dan padat (maksimal 3 paragraf pendek atau daftar poin).
5. Di akhir jawaban, berikan pesan ajakan suportif untuk berkonsultasi lebih lanjut melalui Live Chat Fastwork dengan menekan tombol konsultasi di bawah.`;

    if (!ai) {
      // Return a smart high-quality heuristic response of Worksense if API key is not active
      console.log("No Gemini API key found, returning heuristic consulting advice");
      const heuristicResponse = `Halo! Selamat datang di Worksense Analytics. ${
        businessType ? `Sebagai pelaku bisnis di bidang **${businessType}**` : "Terima kasih telah berkonsultasi dengan kami"
      }. Kami mohon maaf karena sistem asisten virtual kami sedang berada dalam status luring (konfigurasi API key belum selesai). 

Namun, tim Data Analyst profesional kami yang memiliki sertifikasi global (**Google Advanced Data Analytics, IBM Data Science, dan DataCamp**) siap membantu Anda secara manual secara instan!

Berdasarkan deskripsi Anda terkait data berbentuk **${dataType || "Spreadsheet/SQL/Lainnya"}**, berikut saran langkah taktis kami:
1. **Data Cleaning & Structuring**: Kami akan membersihkan data Anda menggunakan Python (Pandas/NumPy) untuk memperbaiki duplikat, baris kosong, dan salah ketik.
2. **Interactive Visualization**: Kami akan mengubahnya menjadi Executive Dashboard interaktif berbasis **Power BI, Tableau, atau Excel Otomatis** sehingga metrik bisnis (KPI) Anda terpantau real-time.
3. **Alur Kerja Profesional**: Layanan kami dilindungi NDA dan mencakup penyerahan file asli (*Source File*).

Silakan langsung klik tombol **"Hubungi di Fastwork"** di panel bawah untuk berkonsultasi gratis dan mendiskusikan penawaran harga terbaik! Kami siap merespons chat Anda dengan cepat.`;
      return res.json({ text: heuristicResponse });
    }

    // Build the contents structure
    const contents: any[] = [];
    
    // Add history if any
    if (history && Array.isArray(history)) {
      history.forEach((h: any) => {
        contents.push({
          role: h.role === "user" ? "user" : "model",
          parts: [{ text: h.text }]
        });
      });
    }

    // Add current user prompt
    contents.push({
      role: "user",
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      },
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Error in consultation route:", error);
    res.status(500).json({ error: "Internal server error: " + error.message });
  }
});

// Serve frontend build static files in production, or mount Vite middleware in development
const start = async () => {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting in DEVELOPMENT mode with Vite Middleware");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting in PRODUCTION mode with static build serving");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Worksense Analytics back-end running on http://localhost:${PORT}`);
  });
};

start().catch((err) => {
  console.error("Failed to start server:", err);
});
