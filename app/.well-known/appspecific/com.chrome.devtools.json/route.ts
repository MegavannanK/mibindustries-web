import { NextResponse } from 'next/server';

export async function GET() {
  // Return an empty JSON response to satisfy Chrome DevTools
  return NextResponse.json({}, { status: 200 });
}
