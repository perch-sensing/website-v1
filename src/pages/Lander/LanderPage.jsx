import "./LanderPage.scss";

import Hero from "./sections/Hero/Hero";
import Overview from "./sections/Overview/Overview";
import HowItWorks from "./sections/HowItWorks/HowItWorks";
import Advantages from "./sections/Advantages/Advantages";
import Partner from "../../components/Partner/Partner";

export default function LanderPage() {
  return (
    <article className="Lander">
      <Hero />
      <Overview />
      <HowItWorks />
      <Advantages />
      {/* <Team /> */}
      <Partner />
    </article>
  );
}
