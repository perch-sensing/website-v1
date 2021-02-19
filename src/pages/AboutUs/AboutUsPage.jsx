import "./AboutUsPage.scss";
import TeamStory from "./sections/TeamStory/TeamStory";
import Team from "./sections/Team/Team";
import Advisors from "./sections/Advisors/Advisors";
import Partner from "../../components/Partner/Partner";
export default function AboutUsPage() {
  return (
    <article className="AboutUs">
      <TeamStory />
      <Team />
      <Advisors />
      <Partner />
    </article>
  );
}
