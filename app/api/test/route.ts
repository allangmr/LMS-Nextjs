import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    test: "Hello from the API!",
  });
}