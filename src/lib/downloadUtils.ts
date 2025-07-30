// src/lib/downloadUtils.ts
import jsPDF from "jspdf";

export type CampaignData = {
  id: number;
  name: string;
  platform: string;
  clicks: number;
  impressions: number;
};

export const downloadPDF = (data: CampaignData[], filename = "report.pdf") => {
  const doc = new jsPDF();
  const text = JSON.stringify(data, null, 2);
  doc.text(text, 10, 10);
  doc.save(filename);
};

export const downloadCSV = (data: CampaignData[], filename = "report.csv") => {
  const csvRows = [];
  const headers = Object.keys(data[0]);
  csvRows.push(headers.join(","));
  for (const row of data) {
    const values = headers.map((header) => `"${row[header as keyof CampaignData]}"`);
    csvRows.push(values.join(","));
  }

  const csvContent = csvRows.join("\n");
  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
};
