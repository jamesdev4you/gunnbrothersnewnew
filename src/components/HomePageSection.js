import "./styles.css";
import HomePageGrid from "./HomePageGrid";
import ComponentTitle from "./ComponentTitle";

export default function HomePageSection(props) {
  return (
    <div className="home-page-section-div">
      <ComponentTitle words={props.word} />
      <div className="home-page-section-image-and-content">
        <div
          className="customer-service-image"
          style={{
            backgroundImage: `url(${props.src})`,
          }}
        />

        <div className="home-page-section-grid-and-text-container">
          <div className="home-page-section-text-container">
            <h2 className="home-page-section-text">{props.desc}</h2>
          </div>
          <HomePageGrid
            BoxOne={props.BoxOne}
            BoxTwo={props.BoxTwo}
            BoxThree={props.BoxThree}
          />
        </div>
      </div>
    </div>
  );
}
