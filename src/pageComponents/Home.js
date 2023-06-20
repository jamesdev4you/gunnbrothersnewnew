import React from "react";
import "../components/styles.css";
import HeaderImage from "../components/HeaderImage";
import HomeBackground from "../assets/HomeBackgound.jpg";
import CustomerService from "../assets/CustomerService.jpg";
import HVAC from "../assets/HVAC.jpg";
import Insualtion from "../assets/Insulation.jpg";
import HomePageSection from "../components/HomePageSection";
import {
  AttachMoney,
  QuestionMark,
  Call,
  FindReplace,
  AcUnit,
  Upgrade,
  Handyman,
  Hvac,
  Plumbing,
} from "@mui/icons-material";

const boxWords = {
  word1: "IF YOUR HOME FEELS HOT",
  word2: "THIS IS THE RIGHT SPOT!",
  word3: "Book with Certified HVAC Professionals Today!",
};

const titleWords = {
  word1: "How can we help you?",
  word2: "Insulation",
  word3: "HVAC",
};

const homeSectionDescription = {
  description1:
    "Whether you need help HVAC, Insulation, or resolving an issue, we are here to help. Please do not hesitate to contact us for any assistance you may need. Thank you for choosing Gunn Brothers, and we look forward to serving you!",
  description2:
    "Our company provides high-quality insulation solutions that help reduce energy costs and create a comfortable living environment. Trust us to provide the insulation you need to keep your home or business comfortable year-round.",
  description3:
    "We provide top-quality HVAC services to ensure that your heating and cooling needs are met with efficiency. We take pride in delivering exceptional customer service and are committed to ensuring your complete satisfaction!",
};

export default function Home() {
  const homeIcons = {
    icon1: {
      name: "Free Estimate",
      icon: AttachMoney,
      details:
        "Find out how much it costs you for us to come out! The cost for us coming out will be deducted from the final cost of service.",
      to: "/serviceestimate",
    },
    icon2: {
      name: "Questions",
      icon: QuestionMark,
      details:
        "If you have any questions feel free to call us up or contact us though the website! We will be happy to give you any advice!",
      to: "/contact",
    },
    icon3: {
      name: "Contact us",
      icon: Call,
      details:
        "If you need anything related to HVAC or Insulation, contact us! We will be quick to reply and give excellent customer service!",
      to: "/contact",
    },
    icon4: {
      name: "Replacement",
      icon: FindReplace,
      details:
        "Replacing your insulation regularly is key for keeping your house's energy efficient! Find out more today!",
      to: "/services",
    },
    icon5: {
      name: "Refreshing",
      icon: AcUnit,
      details:
        "Certain rooms in your house hotter than others? We can help by adding more R-value at your discretion!",
      to: "/services",
    },
    icon6: {
      name: "Adding Value",
      icon: Upgrade,
      details:
        "Let's add value to your current insulation by upgrading it! With dozens of choices, you can choose how you'd like to upgrade!",
      to: "/services",
    },
    icon7: {
      name: "Maintain",
      icon: Handyman,
      details:
        "Save money by maintaining your HVAC devices! We'll come by to make sure your A/C is at top notch performance!",
      to: "/services",
    },
    icon8: {
      name: "Upgrade",
      icon: Hvac,
      details:
        "Want a cooler house? Upgrade your A/C today by professional HVAC technicians at a fair price!",
      to: "/services",
    },
    icon9: {
      name: "Duct Work",
      icon: Plumbing,
      details:
        "We do repairs, replacements, extensions, cellent, coolant, and more! Contact us for all your duck work needs!",
      to: "/services",
    },
  };

  return (
    <div style={{ paddingBottom: "50px" }}>
      <HeaderImage boxWords={boxWords} src={HomeBackground} />
      <HomePageSection
        desc={homeSectionDescription.description1}
        word={titleWords.word1}
        src={CustomerService}
        BoxOne={homeIcons.icon1}
        BoxTwo={homeIcons.icon2}
        BoxThree={homeIcons.icon3}
      />
      <HomePageSection
        desc={homeSectionDescription.description2}
        word={titleWords.word2}
        src={Insualtion}
        BoxOne={homeIcons.icon4}
        BoxTwo={homeIcons.icon5}
        BoxThree={homeIcons.icon6}
      />
      <HomePageSection
        desc={homeSectionDescription.description3}
        word={titleWords.word3}
        src={HVAC}
        BoxOne={homeIcons.icon7}
        BoxTwo={homeIcons.icon8}
        BoxThree={homeIcons.icon9}
      />
    </div>
  );
}
