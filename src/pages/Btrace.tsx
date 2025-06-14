import PageTitle from "../components/PageTitle";
import ThreeCard from "../components/ThreeCards";

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

const Btrace = () => {
  return (
    <>
      <PageTitle
        topbutton="Btrace"
        title1="Checking a crypto wallet for "
        highlight1="“dirty”"
        title2="Money will allow"
        primaryButton="Check Crypto Wallet"
      />
    </>
  );
};

export default Btrace;
