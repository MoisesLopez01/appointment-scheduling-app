import { NextResponse } from "next/server";

let appointments: any[] = [];

export async function GET() {
  return NextResponse.json(appointments);
}

export async function POST(request: Request) {
  const data = await request.json();
  // Basic validation
  if (!data.user || !data.date || !data.time) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  const newAppointment = {
    id: Date.now().toString(),
    user: data.user,
    date: data.date,
    time: data.time,
    notes: data.notes || "",
  };
  appointments.push(newAppointment);
  return NextResponse.json(newAppointment, { status: 201 });
}
