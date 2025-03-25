import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

type FormData = {
  url: string;
};

export function useCreateUrl() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: FormData) => {
      const response = await fetch("/api/urls", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create URL");
      }

      return response.json();
    },
    onSuccess: async () => {
      toast({
        title: "URL added succesfully",
        description: "Check it out!",
      });
      await queryClient.invalidateQueries();
    },
  });
}
