import React from "react";
import twocardbg from "../assets/two-card-bg1.png";
import cardBackground3 from "../assets/card-background3.png";

interface TwoCardProps {
  title: string;
  description: string;
  twoCardButton?: string;
  isGradient?: boolean;
  index?: number;
}

const Card: React.FC<TwoCardProps> = ({
  title,
  description,
  twoCardButton,
  isGradient = false,
  index,
}) => {
  const isSecond = index === 1;
  return (
    <div className={`two-card-wrapper ${isSecond ? "with-layer" : ""}`}>
      {isSecond && (
        <img
          src={cardBackground3}
          alt="Back layer twocard"
          className="bg-layer-twocard back-layer-twocard"
        />
      )}
      <div className="two-card">
        <img
          src={twocardbg}
          alt="Card background"
          className="bg-layer main-bg"
        />
        <div className="two-card-content">
          <h3 className="two-card-title">{title}</h3>
          <p className="two-card-description">{description}</p>
          <button
            className={`two-card-button ${isGradient ? "gradient-button" : ""}`}
          >
            {twoCardButton}
          </button>
        </div>
      </div>
    </div>
  );
};

const TwoCard: React.FC = () => {
  return (
    <>
      <style>{`
  .two-card-section {
    display: flex;
    gap: 24px;
    justify-content: center;
    padding: 40px 80px;
    flex-wrap: wrap;
  }

  .two-card-wrapper {
    position: relative;
    min-height: 100%;
    margin: 0px;
       width: 425px;
       transition: transform 0.3s ease;
  }
  
  .two-card-wrapper:hover{
  transform: scale(1.02);
  }

  .bg-layer-twocard {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: inherit;
    top: 0;
    left: 0;
    border-radius: 20px;
    pointer-events: none;
  }

  .back-layer-twocard {
    z-index: 0;
    transform: scale(1.08) translateY(5px);
    filter: brightness(1.1);
    opacity: 0.95;
    width: 90%;
    margin: 0px 0px 0px 20px;
    height: 90%;
  }

  .two-card {
    position: relative;
    min-height: 100%;
    border-radius: 20px;
    overflow: hidden;
    background: transparent;
  }


  /* Foreground card background */
  .main-bg {
    z-index: 1;
  }


   .two-card-button {
        padding: 12px 24px;
        background-color: #FFF;
        color: #000;
        border-radius: 9999px;
        border:0;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        transition: background-color 0.2s ease;
        margin: auto;
    }

    .gradient-button {
        background: linear-gradient(160deg, #FFD729, #FF8629);
         color: #fff;
    }


  .two-card-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: inherit;
    z-index: 1;
    border-radius: 20px;
  }

  .two-card-content {
    position: relative;
    z-index: 2;
    color: white;
    padding: 40px 45px 60px 45px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }


  .two-card-title {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 12px;
    margin-top: 0;
    text-align: center;
    width: 100%;
  }

  .two-card-description {
    font-size: 14px;
    color: #cbd5e1;
    text-align: center;
    width: 100%;
    margin-bottom: 20px;
    margin-top: 0;
  }
`}</style>

      <section className="two-card-section">
        <Card
          title="Team Qualification"
          description="Experienced certified AML/CFT specialists, blockchain investigators, developers, OSINT specialists. Our employees regularly speak at specialized exhibitions and conferences as invited experts, and examine dozens of different cases of crypto"
          twoCardButton="Read More   >>"
          index={0}
        />
        <Card
          title="Operational Efficiency"
          description="Our investigations have been accepted by law enforcement agencies in different countries, by dozens of cryptocurrency exchanges, used in hundreds of crypto investigations, and taken into account by courts in different jurisdictions."
          twoCardButton="Read More   >>"
          isGradient={true}
          index={1}
        />
      </section>
    </>
  );
};

export default TwoCard;
