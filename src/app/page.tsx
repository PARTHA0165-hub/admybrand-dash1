"use client";

import AnalyticsCharts from "@/components/AnalyticsCharts";
import OverviewCards from "@/components/OverviewCards";
import DataTable from "@/components/DataTable";
import  FileUpload  from "@/components/FileUpload";
import ThemeToggle from "@/components/ThemeToggle";
import { DownloadButtons } from "@/components/DownloadButtons";
import mockData from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <main className="p-6 space-y-6 bg-background min-h-screen text-foreground">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">📊 AdMyBrand Analytics Dashboard</h1>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <FileUpload />
          <DownloadButtons data={mockData} />
        </div>
      </div>

      <OverviewCards />

      <section>
        <h2 className="text-2xl font-semibold mb-2">Campaign Insights</h2>
        <AnalyticsCharts />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">All Campaigns</h2>
        <DataTable data={mockData} />
      </section>
    </main>
  );
}
