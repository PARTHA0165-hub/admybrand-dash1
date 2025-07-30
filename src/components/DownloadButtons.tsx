// src/components/DownloadButtons.tsx
import { downloadCSV, downloadPDF, CampaignData } from "@/lib/downloadUtils";
import { Button } from "@/components/ui/button";

interface Props {
  data: CampaignData[];
}

export const DownloadButtons = ({ data }: Props) => {
  const handleDownload = (data: CampaignData[], type: string) => {
    if (type === "pdf") {
      downloadPDF(data);
    } else if (type === "csv") {
      downloadCSV(data);
    }
  };

  return (
    <div className="flex gap-2 mt-4">
      <Button onClick={() => handleDownload(data, "csv")}>Download CSV</Button>
      <Button onClick={() => handleDownload(data, "pdf")}>Download PDF</Button>
    </div>
  );
};
