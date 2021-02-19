import "./TeamStory.scss";

import teamGraphic from "../../../../assets/mountain-pass.svg";

export default function TeamStory() {
  return (
    <section className="TeamStory">
      <div className="story-info">
        <h1>About Us</h1>
        <p>
          Perch started as a research project at Cal Poly San Luis Obispo, and
          has since developed into a mission driven company.
        </p>
        <p>
          The team grew up in California and witnessed first hand the
          devastation of wildfires, the many families displaced, comm-unities
          torn apart, and lives lost. After the Camp Fire Tragedy in 2018, the
          founders of Perch decided that they wanted to use their engineering
          and technology backgrounds to make a difference.{" "}
        </p>

        <p>
          In 2019, the founders of Perch were selected for the College of
          Engineering Summer Undergraduate Research Program (SURP) and developed
          a new technique that quickly and efficiently detects wildfires using
          existing power infrastructures. This key technology became a
          differentiating factor in the detection methods behind the Perch
          Sensing Network. Grounded in research, we continue to build fire
          prediction products that help businesses protect their assets and the
          surrounding community.{" "}
        </p>
      </div>
      <img className="story-graphic" src={teamGraphic} alt="Mountains" />
    </section>
  );
}
