import Main from "../components/Main";
import heroBg1 from "../assets/LAUNCHES_Starlink_SLC_40.jpg";
import heroBg2 from "../assets/Crew_6_Desktop_9857f5c2f0.jpg";
import heroBg3 from "../assets/Launch_Page_Starlink1_vertical_18_DESKTOP_c851b30656.jpg";
import heroBg4 from "../assets/Star6_17_091923_DSC_5931_desktop_5d8a7a18c0.jpg";
import heroBg5 from "../assets/STARSHIP_Testflight_DESKTOP_2b3bea613a.jpg";
import localFont from "next/font/local";

const ddib = localFont({ src: "../assets/D-DIN-Bold.woff2" });

export default function Home() {
  const data = [
    {
      bgImage: "LAUNCHES_Starlink_SLC_40.965e1358.jpg",
      title: "UPCOMING LAUNCH",
      missionTitle: "STARLINK MISSION",
    },
    {
      bgImage: "Crew_6_Desktop_9857f5c2f0.7e38ba3e.jpg",
      title: "RECENT LAUNCH",
      missionTitle: "STARLINK MISSION",
    },
    {
      bgImage:
        "Launch_Page_Starlink1_vertical_18_DESKTOP_c851b30656.79dae754.jpg",
      title: "RECENT LAUNCH",
      missionTitle: "STARLINK MISSION",
    },
    {
      bgImage: "Star6_17_091923_DSC_5931_desktop_5d8a7a18c0.0221daa5.jpg",
      title: "COMPLETED MISSION",
      missionTitle: "DRAGON AND CREW-6 RETURN TO EARTH",
    },
    {
      bgImage: "STARSHIP_Testflight_DESKTOP_2b3bea613a.7735750d.jpg",
      title: "",
      missionTitle: "STARSHIP FLIGHT TEST",
    },
  ];

  const MAIN = data.map((item) => {
    return (
      <Main
        key={item.title}
        bgImage={item.bgImage}
        title={item.title}
        missionTitle={item.missionTitle}
      />
    );
  });
  return <main>{MAIN}</main>;
}
