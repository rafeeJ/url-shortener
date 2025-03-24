import { UploadCard } from "@/features/upload/upload-card";
import HistoryTable from "@/features/history/history-table";

export default function Home() {
  return (
    <section>
      <UploadCard />
      <HistoryTable />
    </section>
  );
}
