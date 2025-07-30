"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const metrics = [
  { title: "Total Impressions", value: "1.2M" },
  { title: "Total Clicks", value: "530K" },
  { title: "Conversion Rate", value: "44.2%" },
  { title: "Bounce Rate", value: "21.7%" },
];

export default function OverviewCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {metrics.map((metric, idx) => (
        <Card key={idx} className="rounded-2xl shadow-sm hover:shadow-lg transition duration-200 ease-in-out">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              {metric.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
