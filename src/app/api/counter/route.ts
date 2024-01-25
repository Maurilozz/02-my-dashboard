import { NextResponse } from "next/server"

// Si el metodo no coincide se regresara un error 405
export async function GET(request: Request) {
    console.log({method: request.method})
    return NextResponse.json({ count: 100., method: "GET" })
}

export async function POST(request: Request) {
    console.log({method: request.method})
    return NextResponse.json({ count: 100., method: "POST" })
}