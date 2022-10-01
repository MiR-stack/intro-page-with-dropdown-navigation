import { useEffect, useState } from "react";
import { ReactComponent as Databiz } from "../../../assets/images/client-databiz.svg";
import { ReactComponent as Audiophile } from "../../../assets/images/client-audiophile.svg";
import { ReactComponent as Meet } from "../../../assets/images/client-meet.svg";
import { ReactComponent as Maker } from "../../../assets/images/client-maker.svg";
import desktop from "../../../assets/images/image-hero-desktop.png";
import mobile from "../../../assets/images/image-hero-mobile.png";
import "./hero.scss";

function Hero() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWidth);
    return () => window.removeEventListener("resize", handleWidth);
  });

  return (
    <div className="hero-section">
      <div className="wraper">
        <div className="content">
          <h1>make remote work</h1>
          <p className="body">
            Get your team in sync. no matter your location. Streamline process.
            create team rituals, and watch productivity soar.
          </p>
          <button>Learn more</button>
        </div>
        <div className="brands">
          <Databiz />
          <Audiophile />
          <Meet />
          <Maker />
        </div>
      </div>
      <div className="image">
        <img src={width > 1200 ? desktop : mobile} alt="hero image" />
      </div>
    </div>
  );
}

export default Hero;
