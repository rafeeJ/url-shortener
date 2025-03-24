import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const fileSchema = z.object({
  file: z.custom<FileList>((val) => val instanceof FileList && val.length > 0, {
    message: "Please upload a file.",
  }),
});

export const FileForm = () => {
  const {
    register: registerFile,
    handleSubmit: handleFileSubmit,
    formState: { errors: fileErrors },
  } = useForm<{ file: FileList }>({
    resolver: zodResolver(fileSchema),
  });

  const onFileSubmit = (data: { file: FileList }) => {
    const uploadedFile = data.file[0];
    console.log("Uploaded file:", uploadedFile);
  };

  return (
    <form
      onSubmit={handleFileSubmit(onFileSubmit)}
      style={{ marginTop: "2rem" }}
    >
      <Input type="file" {...registerFile("file")} />
      {fileErrors.file && (
        <p style={{ color: "red" }}>{fileErrors.file.message}</p>
      )}
      <Button type="submit">Upload</Button>
    </form>
  );
};
