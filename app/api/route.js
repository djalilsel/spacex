import { NextResponse } from "next/server"

export async function GET () {
    console.log("get request");
    const hello = "hello"

    return NextResponse.json({ type : "get request", data: hello})

}