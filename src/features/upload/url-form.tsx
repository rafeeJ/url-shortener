"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";

type FormData = {
  url: string;
};

const schema = z.object({
  url: z.string().url({ message: "Please enter a valid URL." }),
});

export const UrlForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const queryClient = useQueryClient();

  const onSubmit = async (data: FormData) => {
    const response = await fetch("/api/urls", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result);

    await queryClient.invalidateQueries();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex flex-col space-y-2">
        <label htmlFor="url" className="text-sm font-medium text-gray-700">
          Enter URL
        </label>
        <Input
          type="text"
          id="url"
          placeholder="Enter URL"
          {...register("url")}
        />
        {errors.url && (
          <p className="text-sm text-red-500">{errors.url.message}</p>
        )}
      </div>
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  );
};
