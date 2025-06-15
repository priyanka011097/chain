import React from "react";
import cardBackground from "../assets/cardbackground.png"; // Fixed background
import cardBackground3 from "../assets/card-background3.png"; // Background for the third card

interface CardItem {
  icon: string;
  title: string;
  description: string;
  iconClass?: string;
  index?: number;
}

interface ThreeCardProps {
  cards: CardItem[];
}

const Card: React.FC<CardItem> = ({
  icon,
  title,
  description,
  iconClass,
  index,
}) => {
  const isSecond = index === 1;
  return (
    <div className={`three-card-wrapper ${isSecond ? "with-layer" : ""}`}>
      {isSecond && (
        <img
          src={cardBackground3}
          alt="Back layer"
          className="bg-layer back-layer"
        />
      )}
      <div className="three-card">
        <img
          src={cardBackground}
          alt="Main card background"
          className="bg-layer main-bg"
        />
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
    </div>
  );
};

const ThreeCard: React.FC<ThreeCardProps> = ({ cards }) => {
  return (
    <>
      <style>{`
       .bag-icon-large {
          width: 10% !important;
          margin: 0 0 105px 0 !important;
          background:#9b9b9b1a;
          padding: 20px;
          border-radius: 50px;
       }

       .gradient-bg{
          background: linear-gradient(135deg, #FFD729, #FF8629) !important;
      }

        .three-card-section {
          display: flex;
          gap: 21px;
          justify-content: center;
          padding: 30px 30px;
          flex-wrap: wrap;
          align-items: end;
        }

       .three-card-wrapper {
          position: relative;
          width: 300px;
          min-height: 100%;
          margin: 0px;
        }

        .bg-layer {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: inherit;
          top: 0;
          left: 0;
          border-radius: 20px;
          pointer-events: none;
        }

        /* This makes the 2nd card's back layer visible */
        .back-layer {
          z-index: 0;
          transform: scale(1.08) translateY(12px);
          filter: brightness(1.1);
          opacity: 0.95;
          width: 90%;
          margin: 0px 0px 0px 21px;
          height: 90%;
        }

        /* The main card container */
        .three-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          z-index: 1;
        }

        /* Foreground card background */
        .main-bg {
          z-index: 1;
        }

        /* The content sits on top */
        .card-content {
          position: relative;
          z-index: 2;
          padding: 30px 28px ;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
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


        .card-icon {
          width: 90%;
          display: block;
          margin: 2px 20px;
        }

        .card-title {
          font-size: 32px;
          font-weight: 600;
          margin-bottom: 12px;
          margin-top: 0;
          text-align: left;
          width: 90%;
        }

        .card-description {
          font-size: 14px;
          color: #cbd5e1;
          text-align: left;
          width: 100%;
          margin-bottom: 45px;
          margin-top: 0;
        }
      `}</style>

      <section className="three-card-section">
        {cards.map((card, index) => (
          <Card key={index} {...card} index={index} />
        ))}
      </section>
    </>
  );
};

export default ThreeCard;
