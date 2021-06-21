import "./AboutUsPage.scss";
import TeamStory from "./sections/TeamStory/TeamStory";
import Team from "./sections/Team/Team";
import Partner from "../../components/Partner/Partner";
import ScrollIndicator from "../../components/ScrollIndicator/ScrollIndicator";
import MetaTags from 'react-meta-tags';

export default function AboutUsPage() {
  return (
    <article className="AboutUs">
      <MetaTags>
        <title>Perch Sensing About Us Page</title>
        <meta name="description" content="This page contains more personal information about the comapany, including our history and mission, images and names
        of our team members, and another Partner with us (contact us) section." />
      </MetaTags>
      <TeamStory />
      <Team />
      <Partner />
      <ScrollIndicator determineVisibility={(position) => position < 50} />
    </article>
  );
}
