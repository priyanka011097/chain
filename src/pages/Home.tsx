import FloatingCard from "../components/FlotingImageCard";
import PageTitle from "../components/PageTitle";
import ThreeCard from "../components/ThreeCards";
import TwoCard from "../components/TwoCards";
import ImageText from "../components/ImageText";
import FourPointer from "../components/FourPointers";

import icon1 from "../assets/card-1.png";
import icon2 from "../assets/card-2.png";
import icon3 from "../assets/card-3.png";
import bag from "../assets/bag.png";

import imgText1 from "../assets/imgText1.png";
import imgText2 from "../assets/imgText2.png";
import imgText3 from "../assets/imgText3.png";

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

const cardList = [
  {
    icon: bag,
    title: "Assess the risks of interaction with an address",
    active: true,
    iconClass: "bag-icon-large-4pointer gradient-bg",
  },
  {
    icon: bag,
    title: "Set sources of crypto funds on the address",
    iconClass: "bag-icon-large-4pointer ",
  },
  {
    icon: bag,
    title: "Track the movement of stolen crypto assets",
    iconClass: "bag-icon-large-4pointer ",
  },
  {
    icon: bag,
    title: "Explore de-anonymized addresses in the graph of connections",
    iconClass: "bag-icon-large-4pointer ",
  },
];

const Home = () => {
  return (
    <>
      <PageTitle
        topbutton="Chain Security"
        title1="Check Your Crypto"
        subtitle1="Walet-Protect"
        highlight2="Your"
        subtitle2="Funds!"
        text="Chain Security is a technology company, speakers at leading industry exhibitions on blockchain technologies, big data and information security, investigations of crypto fraud cases around the world."
      />

      <FloatingCard
        highlight1="Chain Security"
        title1="Tools Make"
        subtitle1="Blockchain Safer"
      />

      <PageTitle
        highlight1="Chainsecurity"
        title2="Tools Make"
        subtitle1="Blockchain Safer"
        text="Enjoy a more private and secure internet, block malicious websites, stop web trackers, and monitor your data leaks all in one app."
      />

      <ThreeCard cards={cards} />

      <PageTitle primaryButton="See All Features" />

      <PageTitle
        highlight1="Why"
        title2="Choose"
        subtitle1="Chainsecurity?"
        text="We build long-term relationships with publishers and influencers"
      />

      <FourPointer cards={cardList} />

      <ImageText
        imageLink={imgText1}
        topbutton="Blockchain Address"
        title1="Check blockchain address using Btrace"
        text="In seconds, determine the risk level of the counterparty’s address, find out the source of his funds and make an informed decision about interacting with him"
        primaryButton="FIRST CHECK FREE"
        imageLeftorRight="left"
      />

      <ImageText
        imageLink={imgText2}
        topbutton="Blockchain Address"
        title1="Check blockchain address using Btrace"
        text="In seconds, determine the risk level of the counterparty’s address, find out the source of his funds and make an informed decision about interacting with him"
        primaryButton="FIRST CHECK FREE"
        imageLeftorRight="right"
      />

      <ImageText
        imageLink={imgText3}
        topbutton="Blockchain Address"
        title1="Check blockchain address using Btrace"
        text="In seconds, determine the risk level of the counterparty’s address, find out the source of his funds and make an informed decision about interacting with him"
        primaryButton="FIRST CHECK FREE"
        imageLeftorRight="left"
      />

      <PageTitle
        title1="Chain Security is"
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
    </>
  );
};

export default Home;
