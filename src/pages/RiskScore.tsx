import PageTitle from "../components/PageTitle";
import ThreeCard from "../components/ThreeCards";
import ImageText from "../components/ImageText";

import bag from "../assets/bag.png";
import bholderimg1 from "../assets/bholder-img1.png";
import bholderimg2 from "../assets/bholder-img2.png";

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
        title1="Checking a crypto wallet for"
        subtitle1="Connection with"
        highlight2="“Dirty”"
        subtitle2="Money will allow"
      />

      <PageTitle primaryButton="Get Consultation" />

      <PageTitle
        title1="You"
        highlight1="Don't Have"
        title2="To do Anything Bad To"
        subtitle1=" Get blocked"
        text="Let’s imagine Austin , a 28-year-old crypto user living in a large city and working as a systems analyst in a successful IT company. His stable salary is complemented by additional income from various freelance projects, which allows him to periodically invest in cryptocurrencies."
      />

      <PageTitle
        title1="Check Crypto"
        subtitle1="Wallet"
        highlight2="Free"
        text="Works with Ethereum, BSC, Bitcoin, Tron, Everscale, Venom (soon)"
      />

      <ImageText
        imageLink={bholderimg1}
        topbutton="Blockchain Address"
        title1="Check Quality Assurance"
        text="Check it out for free – we will give you a unique opportunity to look at cryptocurrency wallets through the eyes of an exchange compliance manager and see how our service works in practice."
        primaryButton="Receive checks >>"
        imageLeftorRight="left"
      />

      <ImageText
        imageLink={bholderimg2}
        topbutton="Blockchain Address"
        title1="Best Price Guarantee"
        text="The service is built on our own technological base, so we give a better price than any third-party solution reseller."
        primaryButton="Receive checks >>"
        imageLeftorRight="right"
      />

      <PageTitle
        title1="Why Is It"
        highlight1="Important"
        title2="To Check?"
        text="Enjoy a more private and secure internet, block malicious websites, stop web trackers, and monitor your data leaks all in one app."
      />

      <ThreeCard cards={cards2} />
    </>
  );
};

export default RiskScore;
