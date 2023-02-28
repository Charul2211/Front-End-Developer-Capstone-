import HeroImage from "../../../assets/food/food4.webp";
export default function Heading() {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="reserve-header-text">
        <h3>About us</h3>
      </div>
    </header>
  );
}