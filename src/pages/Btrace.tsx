import PageTitle from "../components/PageTitle";
import ThreeCard from "../components/ThreeCards";
import ImageText from "../components/ImageText";
import FourPointer from "../components/FourPointers";
import Faq from "../components/Faq";

import icon1 from "../assets/bgtrace-img1.png";
import icon2 from "../assets/bgtrace-img2.png";
import icon3 from "../assets/bgtrace-img3.png";
import bag from "../assets/bag.png";
import bholderimg1 from "../assets/bholder-img1.png";
import bholderimg2 from "../assets/bholder-img2.png";

const cards = [
  {
    icon: icon1,
    title: "Inability to find evidence of a particular transaction",
    description: "Inability to find evidence of a particular transaction",
  },
  {
    icon: icon2,
    title: "Inability to find evidence of a particular transaction",
    description: "Inability to find evidence of a particular transaction",
  },
  {
    icon: icon3,
    title: "Inability to find evidence of a particular transaction",
    description: "Inability to find evidence of a particular transaction",
  },
];

const cardList = [
  {
    icon: bag,
    title: `protect yourself from "dirty" assets`,
    iconClass: "bag-icon-large-4pointer gradient-bg",
  },
  {
    icon: bag,
    title: "prevent blocking of funds due to high risk score",
    active: true,
    iconClass: "bag-icon-large-4pointer ",
  },
  {
    icon: bag,
    title: "get out of trouble with the law",
    iconClass: "bag-icon-large-4pointer ",
  },
];

const faqData = [
  {
    question: "What Is Risk Score?",
    answer:
      "This is a percentage risk score expressed as a value from 0 to 100, which takes into account the history of the formation of funds on a cryptocurrency address, the likelihood of being associated with illegal activity, user behavior, as well as known information about the address, its cluster and owner.",
  },
  {
    question: "What Should I Do If I Received Dirty Funds?",
    answer:
      "This is a percentage risk score expressed as a value from 0 to 100, which takes into account the history of the formation of funds on a cryptocurrency address, the likelihood of being associated with illegal activity, user behavior, as well as known information about the address, its cluster and owner.",
  },
   {
    question: "Can The Risk Score Be Improved?",
    answer:
      "This is a percentage risk score expressed as a value from 0 to 100, which takes into account the history of the formation of funds on a cryptocurrency address, the likelihood of being associated with illegal activity, user behavior, as well as known information about the address, its cluster and owner.",
  },
  {
    question: "What Is Risk Score?",
    answer:
      "This is a percentage risk score expressed as a value from 0 to 100, which takes into account the history of the formation of funds on a cryptocurrency address, the likelihood of being associated with illegal activity, user behavior, as well as known information about the address, its cluster and owner.",
  },
  {
    question: "What Should I Do If I Received Dirty Funds?",
    answer:
      "This is a percentage risk score expressed as a value from 0 to 100, which takes into account the history of the formation of funds on a cryptocurrency address, the likelihood of being associated with illegal activity, user behavior, as well as known information about the address, its cluster and owner.",
  },
  {
    question: "Can The Risk Score Be Improved?",
    answer:
      "This is a percentage risk score expressed as a value from 0 to 100, which takes into account the history of the formation of funds on a cryptocurrency address, the likelihood of being associated with illegal activity, user behavior, as well as known information about the address, its cluster and owner.",
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

      <FourPointer cards={cardList} />

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

      <ThreeCard cards={cards} />

      <PageTitle
        topbutton="FAQ"
        title1="Frequently"
        highlight1="Asked"
        title2="Questions"
        text="Specializes in developing blockchain analytics tools and investigating crypto fraud incidents worldwide."
      />

      <Faq data={faqData} />
    </>
  );
};

export default Btrace;
