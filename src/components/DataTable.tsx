"use client";

import { useState } from "react";

// Define the type for a single row
type RowData = {
  campaign: string;
  platform: string;
  date: string;
  impressions: number;
  clicks: number;
  conversions: number;
};

// Props type
type DataTableProps = {
  data: RowData[];
};

export default function DataTable({ data }: DataTableProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((item) =>
    item.campaign.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.platform.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-6">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search campaign or platform..."
        className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border shadow-sm">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-muted text-muted-foreground">
            <tr>
              <th className="p-3">Campaign</th>
              <th className="p-3">Platform</th>
              <th className="p-3">Date</th>
              <th className="p-3">Impressions</th>
              <th className="p-3">Clicks</th>
              <th className="p-3">Conversions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={index} className="border-t hover:bg-accent transition">
                  <td className="p-3">{item.campaign}</td>
                  <td className="p-3">{item.platform}</td>
                  <td className="p-3">{item.date}</td>
                  <td className="p-3">{item.impressions}</td>
                  <td className="p-3">{item.clicks}</td>
                  <td className="p-3">{item.conversions}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="p-4 text-center text-muted-foreground">
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
