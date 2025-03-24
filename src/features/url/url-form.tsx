"use client";
import { useForm } from "react-hook-form";

type FormData = {
  url: string;
};

export const UrlForm = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Submitted URL:", data.url);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Enter URL" {...register("url")} />
      <button type="submit">Submit</button>
    </form>
  );
};
