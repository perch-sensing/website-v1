function PartnerCard({ name, image, website }) {
  return (
    <div className="PartnerCard">
      <a href={website} target="_blank" rel="noreferrer">
        <img src={image} alt={"Profile of " + name} />
      </a>
    </div>
  );
}
