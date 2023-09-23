import { NextResponse, NextRequest } from "next/server"



export async function GET () {
    console.log("get request");
    const hello = "hello"

    return NextResponse.json({ type : "get request", data: hello})

}

export async function POST ( request ) {

    const requestData = await request.json()
    const { hey } = requestData
    const hello = "hello"

    return NextResponse.json({ type : "post request", data: hey})

}