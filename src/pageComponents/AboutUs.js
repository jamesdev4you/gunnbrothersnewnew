import React from "react";
import aboutus from "../assets/aboutus.jpg";
import thegunnbrothers from "../assets/thegunnbrothers.jpg";
import HeaderImage from "../components/HeaderImage";
import ToDoComponent from "../components/ToDoComponent";
import { Favorite, Handshake, EmojiEmotions } from "@mui/icons-material";

const boxWords = {
  word1: "ABOUT US",
  word2: "THE GUNN BROTHERS",
  word3: "This is what we're all about!",
};

const desc = {
  desc1:
    "We are a company rooted in faith and service, proudly veteran-owned and committed to providing honest, dependable work to all those in need of our expertise!",
};

const aboutusTitle = "THE GUNN BROTHERS";

const icons = {
  icon1: {
    icon: Favorite,
    details:
      "We put passion and love into everything we do. Our commitment to providing high-quality products and services reflects our dedication and enthusiasm for our work.",
  },
  icon2: {
    icon: Handshake,
    details:
      "Putting our customers first is at the heart of our business. We prioritize your needs and strive to exceed your expectations through high-quality products, exceptional customer service, and continuous improvement.",
  },
  icon3: {
    icon: EmojiEmotions,
    details:
      "Our business is dedicated to your satisfaction. We provide exceptional products and services and value your feedback to continuously improve our offerings.",
  },
};

export default function AboutUs() {
  return (
    <div style={{ paddingBottom: "50px" }}>
      <HeaderImage boxWords={boxWords} src={aboutus} />
      <ToDoComponent
        word={aboutusTitle}
        src={thegunnbrothers}
        desc={desc.desc1}
        BoxOne={icons.icon1}
        BoxTwo={icons.icon2}
        BoxThree={icons.icon3}
      />
    </div>
  );
}
