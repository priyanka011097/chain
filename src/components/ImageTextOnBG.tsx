import React from "react";
import cardbackground2 from "../assets/cardbackground2.png";
import riskscoreimg from "../assets/riskscore-img.png";

interface FloatingCardProps {
  topbutton?: string;
  title1?: string;
  highlight1?: string;
  highlight2?: string;
  title2?: string;
  text?: string;
}

const FloatingCard: React.FC<FloatingCardProps> = ({
  topbutton,
  title1,
  highlight1,
  highlight2,
  title2,
  text,
}) => {
  return (
    <>
      <style>{`
  .floating-card-section {
    position: relative;
    width: 90%;
    background-image: url(${cardbackground2});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    padding: 0px 0px;
    overflow: hidden;
    margin: auto;
  }

  .text-content {
    color: white;
    width: 70%;
    margin-right:50px;
  }

  .riskscore-highlight-text {
    color: #9CA3AF;
  }

  .riskscore-title {
    font-size: 32px;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 20px;
    margin-top:20px;
  }

  .cards-container {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .riskscore-img {
    width: 100%;
    max-width: 360px;
    height: auto;
  }

  .tag-button {
    color: #ffffff;
    padding: 6px 14px;
    border: 1px solid #9CA3AF;
    border-radius: 9999px;
    font-size: 14px;
    background: #272732;
    backdrop-filter: blur(4px);
    font-weight: 500;
  }

  .riskscore-subtitle {
    font-size: 15px;
    color: #D1D5DB;
    font-weight: 400;
    line-height: 1.4;
  }
`}</style>

      <section className="floating-card-section">
        <div className="cards-container">
          <img src={riskscoreimg} alt="Risk score" className="riskscore-img" />
        </div>

        <div className="text-content">
          {topbutton && (
            <div className="page-title-tag">
              <button className="tag-button">{topbutton}</button>
            </div>
          )}

          <h1 className="riskscore-title">
            <span className="riskscore-highlight-text">{highlight1}</span>{" "}
            {title1}{" "}
            <span className="riskscore-highlight-text">{highlight2}</span>{" "}
            {title2}
          </h1>

          <p className="riskscore-subtitle">{text}</p>
        </div>
      </section>
    </>
  );
};

export default FloatingCard;
