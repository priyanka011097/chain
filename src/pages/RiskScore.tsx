import PageTitle from "../components/PageTitle";
import ThreeCard from "../components/ThreeCards";
import ImageTextOnBg from "../components/ImageTextOnBG";

import bag from "../assets/bag.png";

const cards2 = [
  {
    icon: bag,
    title: "Checking thousands of wallets instantly",
    description:
      "The speed requirements for AML verification are high. That is why we offer our clients the opportunity to obtain the risk score for a wallet via the API.",
    iconClass: "bag-icon-large",
  },
  {
    icon: bag,
    title: "Integration, documentation, support",
    description:
      "Our programmers will assist in integration and, if necessary, adapt an algorithm for assessing the riskiness of certain funds/wallets to your compliance standards.",
    iconClass: "bag-icon-large gradient-bg",
  },
  {
    icon: bag,
    title: "Making the blockchain transparent",
    description:
      "The speed requirements for AML verification are high. That is why we offer our clients the opportunity to obtain the risk score for a wallet via the API.",
    iconClass: "bag-icon-large",
  },
];

const RiskScore = () => {
  return (
    <>
      <PageTitle
        topbutton="Risk Score API"
        title1="Visualizing Interactions Between"
        highlight1="Blockchain"
        title2="Addresses"
        text="A tool that visualizes the interactions between blockchain addresses"
      />

      <PageTitle primaryButton="Get Consultation" />

      <ImageTextOnBg
        topbutton="Risk Score API"
        highlight1="Various"
        title1="Investment Funds And Private Investors Are Increasingly"
        highlight2="Considering"
        title2="Blockchain Projects As Potential Investment Objects."
        text="They look at the history of the blockchain project, infrastructure, community, token holders and exchanges that trade this or that token. They are interested in transparency, understanding the distribution of tokens and the availability of tools that will reduce the impact of regulatory risks on the project."
      />

      <PageTitle
        title1="We Offer A Comprehensive Approach To"
        subtitle1="AML"
        highlight2="Implementation"
        subtitle2="Issues"
      />

      <ThreeCard cards={cards2} />
    </>
  );
};

export default RiskScore;
