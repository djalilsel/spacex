import { NextResponse } from "next/server";

const data = [
  {
    title: "UPCOMING LAUNCH",
    missionTitle: "STARLINK MISSION",
  },
  {
    title: "RECENT LAUNCH",
    missionTitle: "STARLINK MISSION",
  },
  {
    title: "RECENT LAUNCH",
    missionTitle: "STARLINK MISSION",
  },
  {
    title: "COMPLETED MISSION",
    missionTitle: "DRAGON AND CREW-6 RETURN TO EARTH",
  },
  {
    title: "",
    missionTitle: "STARSHIP FLIGHT TEST",
  },
];
export async function GET() {
  return NextResponse.json({ data });
}
