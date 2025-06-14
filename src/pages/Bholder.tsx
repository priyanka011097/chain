import PageTitle from "../components/PageTitle";
import ThreeCard from "../components/ThreeCards";
import ImageText from "../components/ImageText";

import bag from "../assets/bag.png";
import bholderimg1 from "../assets/bholder-img1.png";
import bholderimg2 from "../assets/bholder-img2.png";

const cards2 = [
  {
    icon: bag,
    title: "Graph-Based Address Visualization",
    description:
      "Visualize addresses as graphical elements and connections between them",
    iconClass: "bag-icon-large",
  },
  {
    icon: bag,
    title: "Follow the Flow of Blockchain Funds",
    description:
      "Trace the path of funds from the address under investigation to their current location",
    iconClass: "bag-icon-large gradient-bg",
  },
  {
    icon: bag,
    title: "Identify Probable Wallet Owners",
    description: "Obtain information on likely owners based on address markup",
    iconClass: "bag-icon-large",
  },
  {
    icon: bag,
    title: "Detect the Source of Crypto Assets",
    description:
      "Establish the sources of origin of funds on the cryptocurrency address",
    iconClass: "bag-icon-large",
  },
  {
    icon: bag,
    title: "Group Data for Better Insight",
    description:
      "Simplify the perception of a large number of transactions and addresses through grouping",
    iconClass: "bag-icon-large",
  },
];

const Bholder = () => {
  return (
    <>
      <PageTitle
        topbutton="Bholder"
        title1="Visualizing Interactions Between"
        highlight1="Blockchain"
        title2="Addresses"
        text="A tool that visualizes the interactions between blockchain addresses"
      />

      <PageTitle primaryButton="Get Consultation" />

      <ThreeCard cards={cards2} />

      <ImageText
        imageLink={bholderimg1}
        topbutton="Blockchain Address"
        title1="Provide data visually"
        text="To simplify the perception in the graph of links between addresses, you can see the amount of sent tokens. If necessary, you can get details of which transactions it consists of"
        primaryButton="Read More >>"
        imageLeftorRight="left"
      />

      <ImageText
        imageLink={bholderimg2}
        topbutton="Blockchain Address"
        title1="We successfully work with different types of tokens"
        text="The amount of interaction between addresses is displayed in a token or a selected unit of measure, for example USDT."
        primaryButton="Read More >>"
        imageLeftorRight="right"
      />

      <PageTitle
        title1="Demonstration"
        subtitle1=" of"
        highlight2="Bholder’s"
        subtitle2="Work"
        text="Enjoy a more private and secure internet, block malicious websites, stop web trackers, and monitor your data leaks all in one app."
      />
    </>
  );
};

export default Bholder;
