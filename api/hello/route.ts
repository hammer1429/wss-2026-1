import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "안녕하세요, Route Handler가 응답한 JSON입니다.",
    week: 4,
  });
}
