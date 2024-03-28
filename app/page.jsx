import Main from "../components/Main";
import heroBg1 from "../assets/LAUNCHES_Starlink_SLC_40.jpg";
import heroBg2 from "../assets/Crew_6_Desktop_9857f5c2f0.jpg";
import heroBg3 from "../assets/Launch_Page_Starlink1_vertical_18_DESKTOP_c851b30656.jpg";
import heroBg4 from "../assets/Star6_17_091923_DSC_5931_desktop_5d8a7a18c0.jpg";
import heroBg5 from "../assets/STARSHIP_Testflight_DESKTOP_2b3bea613a.jpg";

const req = async () => {
  const res = await fetch("http://localhost:3000/api");
  const data = res.json();
  return data;
};

export default async function Home() {
  let data = await req();
  data = data.data;
  const imgs = [heroBg1, heroBg2, heroBg3, heroBg4, heroBg5];
  const MAIN = data.map((item, index) => {
    return (
      <Main
        key={item.title}
        bgImage={imgs[index]}
        title={item.title}
        missionTitle={item.missionTitle}
      />
    );
  });
  return <main>{MAIN}</main>;
}
