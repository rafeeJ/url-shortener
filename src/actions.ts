"use server";
import { db } from "@/db";
import { urlsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export async function getAndTrackUrl(shortCode: string) {
  const [urlEntry] = await db
    .select()
    .from(urlsTable)
    .where(eq(urlsTable.shortCode, shortCode));

  if (!urlEntry) return null;

  await db
    .update(urlsTable)
    .set({ visitCount: urlEntry.visitCount + 1 })
    .where(eq(urlsTable.id, urlEntry.id));

  redirect(urlEntry.originalUrl);
}
