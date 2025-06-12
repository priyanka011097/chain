import React from "react";
import cardBackground from "../assets/cardbackground.png"; // Fixed background

interface CardItem {
  icon: string;
  title: string;
  description: string;
  iconClass?: string;
}

interface ThreeCardProps {
  cards: CardItem[];
}

const Card: React.FC<CardItem> = ({ icon, title, description, iconClass }) => {
  return (
    <div className="three-card">
      <img src={cardBackground} alt="Card background" className="card-bg" />
      <div className="card-content">
        <img
          src={icon}
          alt={title}
          className={`card-icon ${iconClass || ""}`}
        />
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

const ThreeCard: React.FC<ThreeCardProps> = ({ cards }) => {
  return (
    <>
      <style>{`
       .bag-icon-large {
          width: 10% !important;
          margin: 0 0 60px 0 !important;
          background:#9b9b9b1a;
          padding: 20px;
          border-radius: 50px;
       }

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
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </section>
    </>
  );
};

export default ThreeCard;
