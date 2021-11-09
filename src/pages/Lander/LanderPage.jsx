import "./LanderPage.scss";

import Hero from "./sections/Hero/Hero";
import Overview from "./sections/Overview/Overview";
import HowItWorks from "./sections/HowItWorks/HowItWorks";
import Advantages from "./sections/Advantages/Advantages";
import Partner from "../../components/Partner/Partner";
import ScrollIndicator from "../../components/ScrollIndicator/ScrollIndicator";
import MetaTags from 'react-meta-tags';

export const pageTitle = "Home | Perch Sensing"

export default function LanderPage(props) {
  return (
    <article className="Lander">
      <MetaTags>
        <title>{pageTitle}</title>
        <meta name="description" content="Predict. Prevent. Protect. We create tools that anticipate and stop wildfires." />
      </MetaTags>
      <Hero audience={props.audience}/>
      <Overview audience={props.audience}/>
      <HowItWorks audience={props.audience}/>
      <Advantages  audience={props.audience}/>
      <Partner audience={props.audience}/>
      <ScrollIndicator determineVisibility={(position) => position < 50} />
    </article>
  );
}
