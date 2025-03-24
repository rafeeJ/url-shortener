"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";
import { useCreateUrl } from "@/features/upload/useCreateUrl";

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
  const { mutateAsync, error: APIError } = useCreateUrl();

  const onSubmit = async (data: FormData) => {
    const result = await mutateAsync(data);
    console.log(result);
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
        {APIError && <p className="text-sm text-red-500">{APIError.message}</p>}
      </div>
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  );
};
