"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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

  const onSubmit = (data: FormData) => {
    console.log("Submitted URL:", data.url);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input type="text" placeholder="Enter URL" {...register("url")} />
      {errors.url && <p style={{ color: "red" }}>{errors.url.message}</p>}
      <Button type="submit">Submit</Button>
    </form>
  );
};
