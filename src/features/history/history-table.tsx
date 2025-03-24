"use client";
import { useGetUrls } from "@/features/history/useGetUrls";

export default function HistoryTable() {
  const { data, isLoading, error } = useGetUrls();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load URLs</p>;

  return (
    <ul className="space-y-2">
      {data?.urls.map((url) => (
        <li key={url.id} className="border p-3 rounded">
          <div>
            <strong>Original:</strong>{" "}
            <a href={url.originalUrl} target="_blank" rel="noopener noreferrer">
              {url.originalUrl}
            </a>
          </div>
          <div>
            <strong>Short:</strong>{" "}
            <a
              href={`/${url.shortCode}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {window.location.origin}/{url.shortCode}
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}
