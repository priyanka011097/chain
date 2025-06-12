import React from "react";
import cardbackground from "../assets/cardbackground.png"; // Common background for each card
import card1 from "../assets/card-1.png";
import card2 from "../assets/card-2.png";
import card3 from "../assets/card-3.png";

interface ThreeCardProps {
  icon: string;
  title: string;
  description: string;
}

const Card: React.FC<ThreeCardProps> = ({ icon, title, description }) => {
  return (
    <div className="three-card">
      <img src={cardbackground} alt="Card background" className="card-bg" />
      <div className="card-content">
        <img src={icon} alt={title} className="card-icon" />
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

const ThreeCard: React.FC = () => {
  return (
    <>
      <style>{`
  .three-card-section {
    display: flex;
    gap: 24px;
    justify-content: center;
    padding: 40px 80px;
    flex-wrap: wrap;
  }

  .three-card {
    position: relative;
    width: 350px;
    min-height: 100%;
    border-radius: 20px;
    overflow: hidden;
    background: transparent;
  }

  .card-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: inherit;
    z-index: 1;
    border-radius: 20px;
  }

  .card-content {
    position: relative;
    z-index: 2;
    color: white;
    padding: 30px 28px 40px 28px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .card-icon {
    width: 90%;
    display: block;
    margin: 0 auto 20px auto;
  }

  .card-title {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 12px;
    margin-top: 0;
    text-align: left;
    width: 100%;
  }

  .card-description {
    font-size: 14px;
    color: #cbd5e1;
    text-align: left;
    width: 100%;
    margin-bottom: 20px;
    margin-top: 0;
  }
`}</style>

      <section className="three-card-section">
        <Card
          icon={card1}
          title="Btrace"
          description="AML verification of cryptocurrency addresses to assess the level of risk and understand the sources of funds"
        />
        <Card
          icon={card2}
          title="Blockchain Investigations"
          description="Search and return of stolen cryptocurrency"
        />
        <Card
          icon={card3}
          title="Bholder"
          description="A tool that visualizes the interactions between blockchain addresses"
        />
      </section>
    </>
  );
};

export default ThreeCard;
