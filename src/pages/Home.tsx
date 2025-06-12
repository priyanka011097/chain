import FloatingCard from "../components/FlotingImageCard";
import PageTitle from "../components/PageTitle";
import ThreeCard from "../components/ThreeCards";

const Home = () => {
  return (
    <>
      <PageTitle
        topbutton="Chain Security"
        title1="Check your crypto"
        subtitle1="walet-protect"
        highlight2="your"
        subtitle2="funds!"
        text="Chain Security is a technology company, speakers at leading industry exhibitions on blockchain technologies, big data and information security, investigations of crypto fraud cases around the world."
      />

      <FloatingCard
        highlight1="Chain Security"
        title1="Tools Make"
        subtitle1="Blockchain Safer"
      />

      <PageTitle
        highlight1="Chainsecurity"
        title2="tools make"
        subtitle1="blockchain safer"
        text="Enjoy a more private and secure internet, block malicious websites, stop web trackers, and monitor your data leaks all in one app."
      />

      <ThreeCard />

      <PageTitle primaryButton="See All Features" />
      <PageTitle
        highlight1="Why"
        title2="Choose"
        subtitle1="Chainsecurity?"
        text="We build long-term relationships with publishers and influencers"
      />
      <PageTitle
        title1="Chain Security is"
        highlight1="An"
        title2="international"
        subtitle1="technology company"
        text="Specializes in developing blockchain analytics tools and investigating crypto fraud incidents worldwide."
      />
      <PageTitle
        title1="Our Unique Approach to Global"
        subtitle1="Compliance"
        highlight2="And"
        subtitle2="Innovation"
        text="We build and deliver original, localized solutions tailored to the needs of diverse markets, collaborating with institutions, regulators, and end users around the world."
      />
    </>
  );
};

export default Home;
