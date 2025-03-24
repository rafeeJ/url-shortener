"use client";
import { UrlForm } from "./url-form";
import { FileForm } from "./file-form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export const UploadCard = () => {
  return (
    <Card className="w-full max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle>Upload Content</CardTitle>
        <CardDescription>Enter a URL or upload a file!</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <UrlForm />
          <FileForm />
        </div>
      </CardContent>
    </Card>
  );
};
