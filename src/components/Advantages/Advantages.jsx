import React from "react";
import AdvantagesBox from "./AdvantagesBox";
import {
  faBoltLightning,
  faCloud,
  faGear,
  faGraduationCap,
  faToggleOn,
  faUserLarge,
} from "@fortawesome/free-solid-svg-icons";

function Advantages() {
  return (
    <div className="advantages">
      <p className="advantages-p">Our Advantages</p>
      <h2>Spend less time coding</h2>
      <h5>
        So don’t fall for the amplification level only. Carefully evaluate the
        lens size so you have the right fit for what you want to do.
      </h5>
      <div className="advantages-container">
        <AdvantagesBox
          icon={faGraduationCap}
          header="The Flash Tutorial"
          content=" I felt it was taking a liberty to sit down, with my cap in my hand, on the corner of the chair."
        />
        <AdvantagesBox
          icon={faGear}
          header="How To Build A Pc"
          content="Thus much I thought proper to tell you in relation to yourself, and to the trust I reposed in you."
        />
        <AdvantagesBox
          icon={faCloud}
          header="Look Up In The Sky"
          content="This I have produced as a scantling of Jack’s great eloquence and the force of his reasoning upon."
        />
        <AdvantagesBox
          icon={faToggleOn}
          header="Off To See The Wizard"
          content="At length one of them called out in a clear, polite, smooth dialect, not unlike in sound to the Italian."
        />
        <AdvantagesBox
          icon={faUserLarge}
          header="The Kansas City Chiefs"
          content="It was some time before he obtained any answer, and the reply, when made, was unpropitious."
        />
        <AdvantagesBox
          icon={faBoltLightning}
          header="The A Z Of Motivation"
          content="She gave my mother such a turn, that I have always been convinced I am indebted to Miss Betsey."
        />
      </div>
    </div>
  );
}

export default Advantages;
