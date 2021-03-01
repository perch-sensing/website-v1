import "./AboutUsPage.scss";
import TeamStory from "./sections/TeamStory/TeamStory";
import Team from "./sections/Team/Team";
import Partner from "../../components/Partner/Partner";
import ScrollIndicator from "../../components/ScrollIndicator/ScrollIndicator";
export default function AboutUsPage() {
  return (
    <article className="AboutUs">
      <TeamStory />
      <Team />
      <Partner />
      <ScrollIndicator determineVisibility={(position) => position < 50} />
    </article>
  );
}
