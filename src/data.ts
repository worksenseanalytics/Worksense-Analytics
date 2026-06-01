/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DatasetConfig } from "./types";

export const SIMULATION_DATASETS: Record<string, DatasetConfig> = {
  sales: {
    name: "Data Transaksi Penjualan Toko Online",
    description: "Format kasir manual, banyak baris kosong, duplikat entri, & penulisan mata uang berantakan.",
    dirty: [
      { id: "TX-01", tanggal: "22/05/2026", kategori: "Fashion", item: "Jaket Bomber Leather", nilai: "Rp350.000", status: "Lunas" },
      { id: "TX-01", tanggal: "22/05/2026", kategori: "Fashion", item: "Jaket Bomber Leather", nilai: "Rp350.000", status: "Lunas" }, // Duplikat
      { id: "TX-02", tanggal: "22-05-2026", kategori: "Elektronik", item: "Keyboard Mechanical Pro", nilai: "Rp 1.200.000", status: "lunas" },
      { id: "TX-03", tanggal: "May 23, 2026", kategori: "n/a", item: "Kaos Polo White XL", nilai: "150000", status: "Pending" }, // Kategori kosong
      { id: "TX-04", tanggal: "23/05/2026", kategori: "Fashion", item: "Celana Chino Grey", nilai: "  Rp 250.000  ", status: "Lunas" }, // Spasi kotor
      { id: "TX-05", tanggal: "24/05/2026", kategori: "Kuliner", item: "Paket Premium Coffee Bean", nilai: "Rp 120.000", status: "LUNAS" },
      { id: "TX-06", tanggal: "24/05/2026", kategori: "Kecantikan", item: "Serum Anti-Aging Face", nilai: "NULL", status: "Refund" } // Nilai NULL
    ],
    clean: [
      { id: "TX-01", tanggal: "2026-05-22", kategori: "Fashion", item: "Jaket Bomber Leather", nilai: 350000, revenue: 350000, profit: 140000 },
      { id: "TX-02", tanggal: "2026-05-22", kategori: "Elektronik", item: "Keyboard Mechanical Pro", nilai: 1200000, revenue: 1200000, profit: 480000 },
      { id: "TX-03", tanggal: "2026-05-23", kategori: "Fashion", item: "Kaos Polo White XL", nilai: 150000, revenue: 150000, profit: 60000 },
      { id: "TX-04", tanggal: "2026-05-23", kategori: "Fashion", item: "Celana Chino Grey", nilai: 250000, revenue: 250000, profit: 100000 },
      { id: "TX-05", tanggal: "2026-05-24", kategori: "Kuliner", item: "Paket Premium Coffee Bean", nilai: 120000, revenue: 120000, profit: 54000 },
      { id: "TX-06", tanggal: "2026-05-24", kategori: "Kecantikan", item: "Serum Anti-Aging Face", nilai: 280000, revenue: 280000, profit: 112000 } // NULL diganti rata-rata/estimasi
    ],
    summary: {
      totalRows: 7,
      duplicatesRemoved: 1,
      emptyFieldsFilled: 2,
      unificationLog: [
        "Mendeteksi dan menghapus 1 baris transaksi duplikat dengan berkas ID 'TX-01'.",
        "Menyeragamkan struktur penulisan Tanggal ke format standar ISO 8601 (YYYY-MM-DD).",
        "Mengubah nilai string mata uang berantakan ('Rp350.000', '  Rp 250.000  ') menjadi nilai integer numerik murni.",
        "Mengisi nilai NULL pada barang kecantikan dengan nilai rata-rata historis (Rp 280.000).",
        "Mengganti kategori asing 'n/a' pada Kaos Polo menjadi kategori yang sesuai: 'Fashion'."
      ]
    },
    charts: {
      categoryData: [
        { name: "Fashion", value: 750000, revenue: 750000, profit: 300000 },
        { name: "Elektronik", value: 1200000, revenue: 1200000, profit: 480000 },
        { name: "Kecantikan", value: 280000, revenue: 280000, profit: 112000 },
        { name: "Kuliner", value: 120000, revenue: 120000, profit: 54000 }
      ],
      monthlyData: [
        { month: "22 Mei", nilai: 1550000, profit: 620000 },
        { month: "23 Mei", nilai: 400000, profit: 160000 },
        { month: "24 Mei", nilai: 400000, profit: 166000 }
      ]
    }
  },
  expense: {
    name: "Data Pengeluaran Logistik & Operasional",
    description: "Data pengadaan barang dari file gudang berserakan, nama departemen tidak seragam, penulisan desimal salah.",
    dirty: [
      { id: "OP-91", tanggal: "01/05/2026", kategori: "LOGISTIK", item: "Pembelian Atasi Box", nilai: "Rp 5.250.000", status: "Lunas" },
      { id: "OP-92", tanggal: "02/05/2026", kategori: "Gudang", item: "Sewa Mesin Forklift", nilai: "Rp 3.500.000,00", status: "Lunas" },
      { id: "OP-93", tanggal: "02/05/2026", kategori: "GUDANG-INTERNAL", item: "Sewa Mesin Forklift", nilai: "Rp 3.500.000,00", status: "Lunas" }, // Kemungkinan duplikat input logistik
      { id: "OP-94", tanggal: "10/05/2026", kategori: "Marketing", item: "Flyer Iklan & Brosur", nilai: "Rp. 850.000", status: "Lunas" },
      { id: "OP-95", tanggal: "12/05/2026", kategori: "Logistik", item: "Bensin Armada Delivery", nilai: "Rp1.450.000", status: "Paid" },
      { id: "OP-96", tanggal: "15/05/2026", kategori: "F&B Kantor", item: "Kopi & Air Galon Karyawan", nilai: "TIDAK_TERCATAT", status: "Pending" }
    ],
    clean: [
      { id: "OP-91", tanggal: "2026-05-01", kategori: "Logistik", item: "Pembelian Atasi Box", nilai: 5250000, revenue: 0, profit: -5250000 },
      { id: "OP-92", tanggal: "2026-05-02", kategori: "Sewa Alat", item: "Sewa Mesin Forklift", nilai: 3500000, revenue: 0, profit: -3500000 },
      { id: "OP-94", tanggal: "2026-05-10", kategori: "Marketing", item: "Flyer Iklan & Brosur", nilai: 850000, revenue: 0, profit: -850000 },
      { id: "OP-95", tanggal: "2026-05-12", kategori: "Logistik", item: "Bensin Armada Delivery", nilai: 1450000, revenue: 0, profit: -1450000 },
      { id: "OP-96", tanggal: "2026-05-15", kategori: "Pantry", item: "Kopi & Air Galon Karyawan", nilai: 320000, revenue: 0, profit: -320000 }
    ],
    summary: {
      totalRows: 6,
      duplicatesRemoved: 1,
      emptyFieldsFilled: 1,
      unificationLog: [
        "Mengurangi redundansi: Menghapus duplikat input 'OP-93' yang diinput ganda sebagai 'GUDANG-INTERNAL'.",
        "Penyamaan kluster kategori: Pemetaan kata tidak standar 'LOGISTIK', 'Gudang' menjadi klasifikasi baku ('Logistik', 'Sewa Alat', 'Marketing').",
        "Mengatasi entri teks kosong 'TIDAK_TERCATAT' pada pos Pantry kantor dengan melakukan kalkulasi median pengeluaran bulanan (Rp 320.000).",
        "Format desimal Rupiah dinormalisasi untuk menghindari kesalahan aritmatika angka di dashboard visual."
      ]
    },
    charts: {
      categoryData: [
        { name: "Logistik", value: 6700000, revenue: 0, profit: -6700000 },
        { name: "Sewa Alat", value: 3500000, revenue: 0, profit: -3500000 },
        { name: "Marketing", value: 850000, revenue: 0, profit: -850000 },
        { name: "Pantry", value: 320000, revenue: 0, profit: -320000 }
      ],
      monthlyData: [
        { month: "Minggu 1", nilai: 8750000, profit: -8750000 },
        { month: "Minggu 2", nilai: 2300000, profit: -2300000 },
        { month: "Minggu 3", nilai: 320000, profit: -320000 }
      ]
    }
  }
};

export const INDUSTRY_TOOLS = [
  {
    name: "Python (Pandas & NumPy)",
    category: "Data Wrangling & Analisis",
    description: "Sangat ampuh untuk mengekstrak, membersihkan, dan merekayasa jutaan baris data kotor berkecepatan tinggi.",
    variant: "python",
    icon: "SquareTerminal"
  },
  {
    name: "SQL & Query Optimization",
    category: "Database & Storage",
    description: "Bahasa standar industri untuk berkomunikasi dengan database relational (MySQL, PostgreSQL, BigQuery, Serverless SQL).",
    variant: "sql",
    icon: "Database"
  },
  {
    name: "Microsoft Power BI",
    category: "Business Intelligence (BI) Platform",
    description: "Pilihan terbaik korporat untuk dashboard interaktif real-time dengan fungsionalitas visual yang kaya dan integrasi ekosistem Windows.",
    variant: "powerbi",
    icon: "BarChart3"
  },
  {
    name: "Tableau Desktop / Cloud",
    category: "Visualisasi Data Premium",
    description: "Visualisasi visual kelas dunia dengan presisi desain infografis yang indah untuk level pimpinan executive.",
    variant: "tableau",
    icon: "Layers"
  },
  {
    name: "Microsoft Excel & Spreadsheet",
    category: "Solusi Automasi UMKM",
    description: "Pivot tables, VBA automation, dan Dashboard dashboard dinamis yang portabel tanpa biaya lisensi platform tambahan.",
    variant: "excel",
    icon: "FileSpreadsheet"
  }
];

export const PROJECT_TECH_STACK = [
  { name: "React 19", type: "Frontend Core Framework", version: "^19.0.1", icon: "Code" },
  { name: "Vite + tsx", type: "Modern Build Engine", version: "^6.2.3 / ^4.21.0", icon: "Flame" },
  { name: "TypeScript", type: "Type-Safe Coding Language", version: "^5.8.2", icon: "ShieldAlert" },
  { name: "Tailwind CSS v4", type: "Ultrafast CSS Styling Utility", version: "^4.1.14", icon: "Palette" },
  { name: "Gemini 3.5 Flash", type: "Real AI Server Side Consultant", version: "@google/genai ^1.29.0", icon: "Sparkles" },
  { name: "Express Node.js", type: "Robust Back-End API Server", version: "^4.21.2", icon: "Cpu" },
  { name: "Motion (Framer)", type: "Performance UI Motion Graphics", version: "^12.23.24", icon: "RotateCw" },
  { name: "Recharts", type: "Interactive Visualization Layer", version: "^2.15", icon: "LineChart" }
];
