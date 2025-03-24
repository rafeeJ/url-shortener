import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { db } from "@/db";
import { urlsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";

export async function GET() {
  const cookieStore = cookies();
  const hasCookie = cookieStore.has("anon_id");

  if (!hasCookie) return NextResponse.error();

  const userId = cookieStore.get("anon_id")?.value;

  if (!userId) return NextResponse.error();

  const urls = await db
    .select()
    .from(urlsTable)
    .where(eq(urlsTable.userId, userId));

  return NextResponse.json({ urls });
}

export async function POST(request: Request) {
  const body = await request.json();
  const originalUrl = body.url;

  if (!originalUrl || typeof originalUrl !== "string") {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }

  const cookieStore = cookies();
  const userId = cookieStore.get("anon_id")?.value;

  if (!userId) {
    return NextResponse.json({ error: "Missing anon_id" }, { status: 401 });
  }

  const shortCode = nanoid(6);

  const [newUrl] = await db
    .insert(urlsTable)
    .values({
      originalUrl,
      shortCode,
      userId,
    })
    .returning();

  return NextResponse.json({ url: newUrl });
}
