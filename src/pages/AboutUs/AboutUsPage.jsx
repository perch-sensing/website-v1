import "./AboutUsPage.scss";
import TeamStory from "./sections/TeamStory/TeamStory";
import Team from "./sections/Team/Team";
import Partner from "../../components/Partner/Partner";
export default function AboutUsPage() {
  return (
    <article className="AboutUs">
      <TeamStory />
      <Team />
      <Partner />
    </article>
  );
}
