import React from "react";
import cardbackground2 from "../assets/cardbackground2.png";
import cardone from "../assets/cardone.png"; // Topmost card
import cardtwo from "../assets/cardtwo.png"; // Middle card
import cardthree from "../assets/cardthree.png"; // Bottom card

interface FloatingCardProps {
  title1?: string;
  highlight1?: string;
  subtitle1?: string;
}

const FloatingCard: React.FC<FloatingCardProps> = ({
  title1,
  highlight1,
  subtitle1,
}) => {
  return (
    <>
      <style>{`
        .floating-card-section {
          position: relative;
          width: 60%;
          background-image: url(${cardbackground2});
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 80px;
          overflow: hidden;
          margin: auto
        }

        .text-content {
          color: white;
          max-width: 50%;
        }

        .highlight-text {
          color: #9CA3AF;
          font-size: 14px;
        }

        .main-title {
          font-size: 40px;
          font-weight: 600;
          line-height: 1.2;
          margin-bottom: 0px;
        }

        .cards-container {
          position: relative;
          width: 300px;
          height: 400px;
        }

        .card-img {
          position: absolute;
          width: 100%;
          height: auto;
          top: 0;
          left: 0;
          transition: transform 0.3s ease;
        }

        .card1 {
          z-index: 3;
        //   transform: rotate(0deg);
        }

        .card2 {
          z-index: 2;
          transform:  translateX(30px) translateY(55px);
        }

        .card3 {
          z-index: 1;
          transform: translateX(50px) translateY(75px);
        }
      `}</style>

      <section className="floating-card-section">
        {/* Left side text */}
        <div className="text-content">
          <h1 className="main-title">
            <span className="highlight-text">{highlight1}</span> <br />
            {title1}
            <br />
            {subtitle1}
          </h1>
        </div>

        {/* Right side layered cards */}
        <div className="cards-container">
          <img src={cardthree} alt="Card three" className="card-img card3" />
          <img src={cardtwo} alt="Card two" className="card-img card2" />
          <img src={cardone} alt="Card one" className="card-img card1" />
        </div>
      </section>
    </>
  );
};

export default FloatingCard;
