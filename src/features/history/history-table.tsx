"use client";
import { useGetUrls } from "@/features/history/useGetUrls";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

export default function HistoryTable() {
  const { data, isLoading, error } = useGetUrls();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load URLs</p>;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Original URL</TableHead>
          <TableHead>Short URL</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.urls.map((url) => (
          <TableRow key={url.id}>
            <TableCell>
              <a
                href={url.originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {url.originalUrl}
              </a>
            </TableCell>
            <TableCell>
              <a
                href={`/${url.shortCode}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {typeof window !== "undefined"
                  ? `${window.location.origin}/${url.shortCode}`
                  : `/${url.shortCode}`}
              </a>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
