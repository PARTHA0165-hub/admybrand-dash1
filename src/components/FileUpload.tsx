"use client";

import { useRef } from "react";
import * as XLSX from "xlsx"; // make sure to install xlsx

export default function FileUpload() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target?.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: "array" });

      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: "" });

      console.log("Parsed Data:", jsonData);
      alert(`✅ File uploaded and parsed: ${file.name}`);

      // TODO: send jsonData to Supabase/Express backend using fetch
      // await fetch("/api/upload", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(jsonData),
      // });
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="mt-6">
      <input
        ref={fileInputRef}
        type="file"
        accept=".csv,.xls,.xlsx"
        className="hidden"
        onChange={handleFileChange}
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        className="px-4 py-2 bg-primary text-white rounded-xl hover:bg-primary/90 transition"
      >
        📤 Upload CSV/XLS File
      </button>
    </div>
  );
}
