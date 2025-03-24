import { useQuery } from "@tanstack/react-query";

type Url = {
  id: number;
  originalUrl: string;
  shortCode: string;
  userId: string;
  createdAt: string;
  visitCount: number;
};

type Response = {
  urls: Url[];
};

export function useGetUrls() {
  return useQuery<Response>({
    queryKey: ["urls"],
    queryFn: async () => {
      const res = await fetch("/api/urls", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch URLs");
      }

      return res.json();
    },
  });
}
