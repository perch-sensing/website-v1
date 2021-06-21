import "./LanderPage.scss";

import Hero from "./sections/Hero/Hero";
import Overview from "./sections/Overview/Overview";
import HowItWorks from "./sections/HowItWorks/HowItWorks";
import Advantages from "./sections/Advantages/Advantages";
import Partner from "../../components/Partner/Partner";
import ScrollIndicator from "../../components/ScrollIndicator/ScrollIndicator";
import MetaTags from 'react-meta-tags';

export default function LanderPage() {
  return (
    <article className="Lander">
      <MetaTags>
        <title>Perch Sensing Landing Page</title>
        <meta name="description" content="This page is where users start on our site. Here there is navigation to other sections. 
        Here there is an opener and How it Works, Advantages, and Partner with Us (Contact Us) sections." />
      </MetaTags>
      <Hero />
      <Overview />
      <HowItWorks />
      <Advantages />
      <Partner />
      <ScrollIndicator determineVisibility={(position) => position < 50} />
    </article>
  );
}
