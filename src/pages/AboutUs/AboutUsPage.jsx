import "./AboutUsPage.scss";
import TeamStory from "./sections/TeamStory/TeamStory";
import Team from "./sections/Team/Team";
import Partner from "../../components/Partner/Partner";
import ScrollIndicator from "../../components/ScrollIndicator/ScrollIndicator";
import MetaTags from 'react-meta-tags';

export const pageTitle = "Perch Sensing About Us Page"

export default function AboutUsPage() {
  return (
    <article className="AboutUs">
      <MetaTags>
        <title>{pageTitle}</title>
        <meta name="description" content="Perch Sensing started out as a research project at Cal Poly San Luis Obispo, and has 
        since developed into a mission driven company aiming to save lives through an innovative hardware platform." />
      </MetaTags>
      <TeamStory />
      <Team />
      <Partner />
      <ScrollIndicator determineVisibility={(position) => position < 50} />
    </article>
  );
}
