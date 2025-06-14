import PageTitle from "../components/PageTitle";
import ImageGreed from "../components/ImageGread";
import img1 from "../assets/academy-img1.png";
import img2 from "../assets/academy-img2.png";
import img3 from "../assets/academy-img3.png";
import img4 from "../assets/academy-img4.png";
// import overlay from "../assets/academy-overlay-img.png";

const cardData = [
  {
    image: img1,
    // overlayImage: overlay,
    title: "Glossary",
    subtitle: "February 12, 2023",
  },
  {
    image: img2,
    // overlayImage: overlay,
    title: "Lesson №1. Blockchain",
    subtitle: "February 12, 2023",
  },
  {
    image: img3,
    // overlayImage: overlay,
    title: "Lesson №2. Blockchain Basics, Ethereum и EVM.",
    subtitle: "February 12, 2023",
  },
  {
    image: img4,
    // overlayImage: overlay,
    title: "Lesson №3. How to earn on the blockchain. Part II",
    subtitle: "February 12, 2023",
  },
]

const Academy = () => {
  return (
    <>
      <PageTitle
        topbutton="Chain Security"
        title1="Chain"
        highlight1="Security"
        title2="Academy"
        text="Chain Security is a technology company, speakers at leading industry exhibitions on blockchain technologies, big data and information security, investigations of crypto fraud cases around the world."
      />
      <ImageGreed cards={cardData} />
    </>
  );
};

export default Academy;
