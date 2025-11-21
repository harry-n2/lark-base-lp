import { NextResponse } from "next/server";

let leads: any[] = [];

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const lead = {
            ...body,
            id: crypto.randomUUID(),
            createdAt: new Date().toISOString(),
        };

        leads.push(lead);

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { success: false, error: String(err) },
            { status: 500 }
        );
    }
}

export async function GET() {
    // newest first
    const sorted = [...leads].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    return NextResponse.json({ leads: sorted });
}

