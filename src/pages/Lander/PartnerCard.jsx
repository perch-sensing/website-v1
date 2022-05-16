import "./PartnerCard.scss";

const PartnerCard = (props) => {
  return (
    <div className="PartnerCard">
      <a href={props.website} target="_blank" rel="noreferrer">
        <img src={props.image} alt={"Profile of " + props.name} />
      </a>
    </div>
  );
};

export default PartnerCard;
