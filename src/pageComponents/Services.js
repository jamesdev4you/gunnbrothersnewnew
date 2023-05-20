import React from "react";
import {
  FindReplace,
  AcUnit,
  Upgrade,
  Handyman,
  Hvac,
  Plumbing,
} from "@mui/icons-material";
import Service from "../assets/Service.jpg";
import ServiceHvac from "../assets/ServiceHvac.jpg";
import ServiceInuslation from "../assets/ServiceInsulation.jpg";
import HeaderImage from "../components/HeaderImage";
import ToDoComponent from "../components/ToDoComponent";

const boxWords = {
  word1: "HVAC AND INSULATION",
  word2: "DONE SIMPLE AND EASY!",
  word3: "See what our professsional techncians can do for you!",
};

const desc = {
  desc1:
    "HVAC systems regulate temperature, humidity, and air quality in a building. Proper design and maintenance can improve indoor comfort, energy efficiency, and lower utility bills.",
  desc2:
    "Insulation reduces heat transfer and improves energy efficiency in a building, typically installed in walls, floors, and ceilings. It can reduce heating and cooling costs.",
};

const insulationTitle = "Insulation Services";
const hvacTitle = "HVAC Services";

const icons = {
  icon1: {
    icon: FindReplace,
    details:
      "Insulation replacement involves removing old or damaged insulation from a building and installing new, more efficient insulation. This can increase overall comfort and air quality within the building.",
  },
  icon2: {
    icon: AcUnit,
    details:
      "Insulation refreshing is adding new insulation to existing insulation in a building that may have degraded or become less effective over time. This can help improve the insulation's thermal perf resulting in lower utility bills and increased comfort within the building.",
  },
  icon3: {
    icon: Upgrade,
    details:
      "We can increase a building's R-value, resulting in improved energy efficiency and lower heating and cooling costs.",
  },
  icon4: {
    icon: Handyman,
    details:
      "Maintaining HVAC systems involves regular inspection, cleaning, and repair to ensure proper and efficient functioning.",
  },
  icon5: {
    icon: Hvac,
    details:
      "Upgrading HVAC systems involves replacing outdated or inefficient components with newer, more advanced equipment to improve energy efficiency, indoor comfort, and air quality. It can also increase the value of a building!",
  },
  icon6: {
    icon: Plumbing,
    details:
      "HVAC ductwork transports air throughout a building for heating, ventilation, and air conditioning. Proper design and maintenance can improve energy efficiency while preventing leaks and blockages.",
  },
};

export default function Services() {
  return (
    <div style={{ paddingBottom: "50px" }}>
      <HeaderImage boxWords={boxWords} src={Service} />
      <ToDoComponent
        word={insulationTitle}
        src={ServiceInuslation}
        desc={desc.desc1}
        BoxOne={icons.icon1}
        BoxTwo={icons.icon2}
        BoxThree={icons.icon3}
      />
      <ToDoComponent
        word={hvacTitle}
        src={ServiceHvac}
        desc={desc.desc2}
        BoxOne={icons.icon4}
        BoxTwo={icons.icon5}
        BoxThree={icons.icon6}
      />
    </div>
  );
}
