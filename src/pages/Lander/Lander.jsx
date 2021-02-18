import "./Lander.scss";

import Hero from "./sections/Hero/Hero";
import Overview from "./sections/Overview/Overview";
import HowItWorks from "./sections/HowItWorks/HowItWorks";
import Advantages from "./sections/Advantages/Advantages";
import Partner from "./sections/Partner/Partner";

export default function Lander() {
  return (
    <article className="Lander">
      <Hero />
      <Overview />
      <HowItWorks />
      <Advantages />
      <Partner />
    </article>
  );
}
