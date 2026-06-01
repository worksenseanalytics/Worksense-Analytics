# Dokumentasi Rekap Pengembangan: Worksense Analytics Dashboard

## 1. Overview Proyek
Aplikasi ini adalah **Web App Dashboard Interaktif** yang berfokus pada layanan data analyst, pembersihan data (data wrangling), serta visualisasi business intelligence (Power BI / Tableau / React Recharts).
Platform menggunakan arsitektur frontend dengan Tailwind CSS, Recharts, Vite (bundler), dan react-router.

## 2. Struktur Data dan File Utama
- `src/App.tsx`: Halaman utama aplikasi (Single Page / Landing page panjang) berisi Hero, Core Services, dan Workflow.
- `src/components/CoreServiceDetail.tsx`: Penjabaran detail layanan pembersihan data interaktif.
- `src/components/Hero.tsx`: Section pembuka dengan Call-to-Action.
- `src/components/Navbar.tsx`: Navigasi dan tombol switch bahasa/tema.
- `src/components/TrustedPartners.tsx`: Logotip mitra industri (dummy/placeholder dengan UI elegan).
- `src/i18n.tsx`: Context dan kamus untuk sistem multi-bahasa Internasionalisasi (id/en). Translation key dikelola di sini.

## 3. Fitur yang Diimplementasikan
- **Dark/Light Mode**:
  - Dikontrol dari Navbar, menyimpan preferensi di `localStorage`.
  - Warna pada mode terang kini menyesuaikan semua custom tailwind classes, menangani state pseudo seperti hover background, button overrides, hingga elemen custom border yang sebelumnya tersisa gelap.
  - Perbaikan pada border dan bar chart (ilustrasi hero & core service) agar lebih terlihat dan tidak menyatu dengan background putih. Teks tambahan `text-slate-*` diperhalus.
- **Sistem Dual Bahasa (i18n)**:
  - Tersedia opsi Indonesia (id) dan English (en).
  - Mengubah seluruh UI text 100% menggunakan custom dictionary hook `useLanguage` yang diwrap dalam `LanguageProvider`.
- **Responsive Web & Mobile Layout**:
  - Container menggunakan auto margin, padding dinamis Tailwind (misal: `lg:px-8`, `md:py-20`).
  - Whitespace pada mobile layout (vertical bar / overflow X) diatasi menggunakan styling komprehensif `<div className="w-full overflow-x-clip ...">` di parent `#root`, `App.tsx`, dan `index.css` agar tidak membatalkan behavior target `position: sticky` pada navigasi yang seringkali rusak akibat properti `overflow: hidden`.
- **CTA dan Link Eksternal**:
  - Telah menghapus seluruh tombol dan link Call-to-Action menuju Fastwork dan Simulator Demo untuk tampilan yang lebih bersih. Termasuk juga block CTA hubungi kami pada service detail.
  - Namun menambahkan kembali Call-to-Action "Chat Sekarang" di Navbar yang mengarah langsung ke WhatsApp (`wa.me`) dan dilengkapi dengan auto-text template pesan, lalu memiliki styling container (background `emerald-500`) yang menarik baik untuk desktop dan responsif mobile viewport.
- **Halaman Hubungi Kami (Contact Section)**:
  - Telah mengubah bagian section penutup (sebelumnya CTA Fastwork) menjadi section **Hubungi Kami** (Contact Section).
  - Menyertakan dua metode komunikasi direct: link WhatsApp dan link Email (`worksenseanalytics@gmail.com`), keduanya kini dilengkapi dengan parameter terisi otomatis (template pesan/subject/body) dan `target="_blank"` agar lebih mudah dibuka.
  - Memasukkan *platform links* (Instagram: `https://www.instagram.com/worksense.analytics/`, Fastwork: `https://fastwork.id/user/worksense.analytics?source=app_marketplace_user-profile`, Upwork, Fiverr).
  - Mengganti icon platform Fastwork, Upwork, dan Fiverr menggunakan resolusi logo asli visualisasi `<img />` yang di-fetch dan disimpan ke dalam folder statik sistem aplikasi (`/public/logos/`).
  - Opsi navigasi untuk 'Hubungi Kami' (`#contact`) juga disematkan di komponen Navbar untuk desktop dan mobile.
- **Perbaikan Bug (Navigasi):**
  - Memperbaiki tautan href pada tombol `Segmen Jasa` di komponen `Navbar.tsx` (baik desktop maupun mobile view) yang sebelumnya menunjuk ke `#services`, sekarang menunjuk secara akurat ke `#katalog-layanan` (ServicesOverview).

- **Section Testimoni (Testimonials Section)**:
  - Telah menambahkan komponen `Testimonials.tsx` sebelum halaman "Hubungi Kami" yang menampilkan ulasan positif fiktif dari beragam level klien (Operational Manager, Finance Director, CEO).
  - Integrasi terjemahan i18n penuh dengan opsi navigasi `#testimonials` di Navbar desktop maupun menu toggle mobile.
- **Section Katalog Layanan (Services Overview)**:
  - Telah menambahkan komponen `ServicesOverview.tsx` (Bento Grid) yang berfungsi sebagai tabel konten (Table of Contents) visual di awal halaman.
  - Berisi 7 card grid (telah dimutakhirkan menambahkan segmen Personal, Akademik & UMKM) yang dapat diklik dengan smooth scrolling.
  - **Perbaikan UI/UX (Side Navigation):** Mengubah *Top Floating Navigation* menjadi *Side Floating Navigation* interaktif di sisi kanan layar. Sidebar kecil ini sekarang menggunakan sistem *Manual Toggle (Click to Expand)* yang dapat diperbesar dan ditutup secara manual, ukuran tuas indikator juga diperbesar demi aksesibilitas layaknya floating action button. Sidebar akan otomatis kembali tersembunyi begitu user mengklik menu, sehingga layout terjamin proporsional & nyaman di perangkat apa saja.
- **Section Produk / Layanan Utama**:
  - Telah mengubah struktur *Services Overview* menjadi *Vertical Stacking* vertikal dengan enam section layanan utama (Core Services) mengikuti eskalasi teknologinya dan presentasi bisnis hingga all-in-one package.
  - Produk 1: `CoreServiceDetail.tsx` (Jasa Analisis Data & Dashboard BI) menggunakan palet warna biru (`sky-500` & `indigo-500`).
  - Produk 2: `MachineLearningDetail.tsx` (Machine Learning & Prediktif Modeling) menggunakan paduan hijau (`emerald-500` & `teal-500`), dilengkapi dengan widget animasi khusus ML Inference.
  - Produk 3: `ExcelAutomationDetail.tsx` (Otomatisasi Laporan Excel & Macro VBA/Google Apps Script) menggunakan paduan warna jingga (`amber-500` & `orange-500`).
  - Produk 4: `DeepLearningDetail.tsx` (Advanced Deep Learning, NLP & Computer Vision) menggunakan tema ungu futuristik (`purple-500` & `fuchsia-500`), menawarkan analisis model jaringan saraf tingkat expert.
  - Produk 5: `ComprehensiveReportingDetail.tsx` (Pelaporan End-to-End & C-Level Presentasi Data) menggunakan tema merah/pink elegan (`rose-500` & `red-500`) untuk penyerahan pitch deck laporan eksekutif.
  - Produk 6: `EnterpriseSolutionDetail.tsx` (Enterprise All-in-One Data Ecosystem) menyajikan satu paket retainer ekosistem dari hulu (raw data) ke hilir (reporting AI) menggunakan skema elegan emas (`yellow-400` & `amber-500`), dengan komponen visual arsitektur cloud terintegrasi.
  - Produk 7: `PersonalAcademicDetail.tsx` (Solusi Data Personal, Akademik & UMKM) fokus pada harga terjangkau untuk olah data skripsi & pembukuan mikro menggunakan skema warna nila (`indigo-400` & `violet-400`).
  - Ketujuh produk ini didukung dengan fitur *Translations (i18n)* penuh baik bahasa Indonesia dan Inggris.
  - Telah menambahkan komponen `FAQ.tsx` berupa interactive accordion yang membahas hal-hal seputar Security/NDA, Estimasi Harga, dan Estimasi Waktu Pengerjaan.
  - Integrasi terjemahan i18n juga disertakan untuk komponen ini serta penambahan menu navigasi `#faq` di Navbar desktop maupun mobile.
- **Perbaikan Image Service Tools**:
  - Telah mengganti URL image ikon tools Wikipedia yang mengalami isu CORS/404 (Google Sheets dan Excel VBA) dengan sumber asset image stabil dari `img.icons8.com`.
- **SEO Optimization & Branding**:
  - Menambahkan tag meta pada file `index.html` berupa description, keywords, author, serta OpenGraph dan Twitter tags agar halaman tampil baik mempresentasikan layanan (Dashboard, Data Viz, Excel) pada saat _sharing_ di sosial media.
  - Mengubah ikon globe/internet standar pada tab browser menjadi logo Worksense Analytics menggunakan `<link rel="icon" type="image/png" href="/logo.png" />` di `index.html`.
- **UI Bug Fixes**:
  - Menambahkan `pb-1` pada `span` hero title yang menggunakan `bg-clip-text` agar bagian bawah huruf (misal 'g' atau 'p') pada font-family sans tidak tertutup/terpotong oleh boundary gradient CSS.
- **Title Document**: Disetel menjadi `Worksense Analytics` untuk ditampilkan pada Tab Browser saat di-deploy, melalui `index.html`.

## 4. Konvensi Bahasa / Translation Key Naming
Semua teks yang muncul di aplikasi dimanage menggunakan prefix komponen di `i18n.tsx`:
- `nav.*`: Area navigasi.
- `hero.*`: Teks Hero utama.
- `wf.*` / `wf_full.*`: Alur Kerja (Workflow) pada App dan Core Service.
- `core.*`: Judul Layanan Utama.
- `cert.*`: Badge sertifikasi global.
- `tools.*` / `partners.*`: Kategori keahlian tool & partner perusahaan.
- `footer.*`: Deskripsi hak cipta dan CTA final.

## 5. Deployment Info
Build dapat dijalankan dengan command standar `npm run build` yang memicu Vite renderer untuk optimasi bundle. Deployment ready melalui platform statik atau lingkungan Google Apps Script secara terstruktur dengan output single file (jika di-webpack/inline) atau host HTML/JS standard.
