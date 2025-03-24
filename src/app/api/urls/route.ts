import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { db } from "@/db";
import { urlsTable } from "@/db/schema";
import { eq } from "drizzle-orm";

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

// export async function POST(request: Request) {}
