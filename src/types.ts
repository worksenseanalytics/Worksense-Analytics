/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Interface for Dirty vs Clean Simulation
export interface DirtyRecord {
  id: string;
  tanggal: string;
  kategori: string;
  item: string;
  nilai: string | number;
  status: string;
}

export interface CleanRecord {
  id: string;
  tanggal: string;
  kategori: string;
  item: string;
  nilai: number;
  revenue: number;
  profit: number;
}

export interface DatasetConfig {
  name: string;
  description: string;
  dirty: DirtyRecord[];
  clean: CleanRecord[];
  summary: {
    totalRows: number;
    duplicatesRemoved: number;
    emptyFieldsFilled: number;
    unificationLog: string[];
  };
  charts: {
    categoryData: { name: string; value: number; revenue?: number; profit?: number }[];
    monthlyData: { month: string; nilai: number; profit?: number }[];
  };
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
  timestamp: Date;
}
