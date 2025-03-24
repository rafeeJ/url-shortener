import { UploadCard } from "@/features/upload/upload-card";
import HistoryTable from "@/features/history/history-table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <section className="w-full gap-4 px-4 py-10 grid grid-cols-1 md:grid-cols-[300px,1fr] items-start">
      <UploadCard />
      <Card>
        <CardHeader>
          <CardTitle>URL History</CardTitle>
        </CardHeader>
        <CardContent>
          <HistoryTable />
        </CardContent>
      </Card>
    </section>
  );
}
