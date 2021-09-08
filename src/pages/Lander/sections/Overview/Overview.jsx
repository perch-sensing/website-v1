import "./Overview.scss";

import overviewDisplay from "../../../../assets/mountain-pass.svg";

const useCases = [
  "Wildfire detection",
  "Risk management",
  "Utility infrastructure monitoring",
  "High resolution weather analysis",
];

export default function Overview() {
  return (
    <section className="Overview">
      <img
        className="overview-display"
        src={overviewDisplay}
        alt="Perch Sensor alert"
        loading="lazy"
      />
      <div className="overview-info">
        <h2>A Bird's Eye View</h2>
        <p>
        Perch Sensing offers a network of fire-detecting environmental 
        sensors that mount to power lines. The sensor network provides 
        a widely distributed, high resolution view into large scale 
        infrastructure. With the aid of expressive geospatial data, 
        targeted risk factors can be identified and resolved.
        </p>
        <h4 className="use-case-title">Use Cases</h4>
        <ul>
          {useCases.map((useCase) => (
            <li key={useCase}>{useCase}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
