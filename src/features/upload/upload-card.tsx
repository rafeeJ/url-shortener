"use client";
import { UrlForm } from "./url-form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export const UploadCard = () => {
  return (
    <Card className="self-start">
      <CardHeader>
        <CardTitle>Upload Content</CardTitle>
        <CardDescription>Enter a URL or upload a file!</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          <UrlForm />
        </div>
      </CardContent>
    </Card>
  );
};
