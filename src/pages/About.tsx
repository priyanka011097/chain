import PageTitle from "../components/PageTitle";
import ThreeCard from "../components/ThreeCards";
import TwoCard from "../components/TwoCards";
import ImageText from "../components/ImageText";

import icon1 from "../assets/card-1.png";
import icon2 from "../assets/card-2.png";
import icon3 from "../assets/card-3.png";
import bag from "../assets/bag.png";
import aboutimgtext from "../assets/imgText4.png";

const cards = [
  {
    icon: icon1,
    title: "Btrace",
    description:
      "AML verification of cryptocurrency addresses to assess the level of risk and understand the sources of funds",
  },
  {
    icon: icon2,
    title: "Blockchain Investigations",
    description: "Search and return of stolen cryptocurrency",
  },
  {
    icon: icon3,
    title: "Bholder",
    description:
      "A tool that visualizes the interactions between blockchain addresses",
  },
];

const cards2 = [
  {
    icon: bag,
    title: "Proprietary Technology",
    description:
      "We rely solely on our in-house technologies and solutions, ensuring full control, independence, and innovation without third-party dependencies.",
    iconClass: "bag-icon-large",
  },
  {
    icon: bag,
    title: "Global Compliance & Localization",
    description:
      "We adapt our services to local legal frameworks and market specifics, enabling smooth operations with clients and partners across the globe.",
    iconClass: "bag-icon-large gradient-bg",
  },
  {
    icon: bag,
    title: "Trusted by Institutions",
    description:
      "We work with banks, regulators, law enforcement, crypto platforms, exchangers, and individuals to ensure secure, transparent financial interactions.",
    iconClass: "bag-icon-large",
  },
];

const About = () => {
  return (
    <>
      <PageTitle
        topbutton="Chain Security"
        title1="Chain Security Is"
        highlight1="An"
        title2="international"
        subtitle1="technology company"
        text="Specializes in developing blockchain analytics tools and investigating crypto fraud incidents worldwide."
      />

      <TwoCard />

      <PageTitle
        title1="Our Unique Approach to Global"
        subtitle1="Compliance"
        highlight2="And"
        subtitle2="Innovation"
        text="We build and deliver original, localized solutions tailored to the needs of diverse markets, collaborating with institutions, regulators, and end users around the world."
      />

      <ThreeCard cards={cards2} />

      <PageTitle primaryButton="Ask a Question" />

      <ImageText
        imageLink={aboutimgtext}
        topbutton="Blockchain Address"
        title1="Compliance with Global AML/CFT Standards"
        text="The company’s products comply with local AML/CFT requirements, FATF recommendations, including the Travel Rule, and EU Directive 6AMLD, which aims to combat money laundering, terrorist financing and the proliferation of weapons of mass destruction."
        imageLeftorRight="left"
      />

      <PageTitle
        highlight1="Chainsecurity"
        title2="tools make"
        subtitle1="blockchain safer"
        text="Enjoy a more private and secure internet, block malicious websites, stop web trackers, and monitor your data leaks all in one app."
      />

      <ThreeCard cards={cards} />

      <PageTitle primaryButton="See All Features" />
    </>
  );
};

export default About;
