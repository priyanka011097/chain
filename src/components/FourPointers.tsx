import React from "react";
import pointerbgimg from "../assets/pointer-bg-img.png";

interface CardItem {
  icon: string;
  title: string;
  active?: boolean;
  iconClass?: string;
  index?: number;
}

interface FourPointerProps {
  cards: CardItem[];
}

const SingleCard: React.FC<CardItem> = ({
  icon,
  title,
  active,
  iconClass,
  index,
}) => {
  const isFirst = index === 0;
  return (
    <div
      className={`choose-card-wrapper ${active ? "choose-card-active" : ""}`}
    >
      {isFirst && (
        <img src={pointerbgimg} alt="bg" className="choose-bg-image" />
      )}
      <div
        className={`choose-card-inner ${
          isFirst ? "with-border-highlight" : ""
        }`}
      >
        <div className="choose-card-content">
          <img
            src={icon}
            alt="icon"
            className={`choose-card-icon ${iconClass || ""}`}
          />
          <p className="choose-card-title">{title}</p>
        </div>
      </div>
    </div>
  );
};

const FourPointer: React.FC<FourPointerProps> = ({ cards }) => {
  return (
    <>
      <style>{`
        .choose-card-section {
          display: flex;
          flex-wrap: wrap;
          gap: 25px;
          justify-content: center;
          padding: 30px 80px;
        }

        .choose-card-wrapper {
          position: relative;
          width: 550px;
          height: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 5px;
        }

        .choose-bg-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          border-radius: 18px;
        }

        .choose-card-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          border-radius: 18px;
          overflow: hidden;
          background:
            repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0px,
              rgba(255, 255, 255, 0.06) 1px, transparent 1px, transparent 16px),
            linear-gradient(9.22deg, rgba(255, 255, 255, 0.08) 18.26%,
              rgba(0, 0, 0, 0.08) 131.8%),
            linear-gradient(0deg, #060709, #060709);
          border: 1.1px solid transparent;
          transition: all 0.3s ease;
        }

        .choose-card-inner.with-border-highlight {
          border-image-source: linear-gradient(175.64deg,
              rgba(255, 255, 255, 0) 19.94%,
              rgba(255, 255, 255, 0.07) 83.62%);
          border-image-slice: 1;
        }

        .choose-card-inner:hover,
        .choose-card-active .choose-card-inner {
          background:
            repeating-linear-gradient(135deg,
              rgba(255, 255, 255, 0.06) 0px,
              rgba(255, 255, 255, 0.06) 1px,
              transparent 1px,
              transparent 16px),
            linear-gradient(9.22deg, rgba(255, 255, 255, 0.08) 18.26%,
              rgba(0, 0, 0, 0.08) 131.8%),
            linear-gradient(0deg, #1D1D1E, #1D1D1E);
          border-image-source: linear-gradient(175.64deg,
              rgba(255, 255, 255, 0) 19.94%,
              rgba(255, 255, 255, 0.07) 83.62%);
          box-shadow: 0px 0px 73.89px 0px #FFFFFF1A inset,
            0px 14px 17.7px 0px #0000007D;
          backdrop-filter: blur(102.74px);
        }

        .choose-card-content {
          padding: 30px 28px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .choose-card-icon {
          width: 34px;
          height: 34px;
        }

        .choose-card-title {
          color: white;
          font-size: 20px;
          font-weight: 300;
          margin: 0;
          flex: 1;
        }

        .bag-icon-large-4pointer {
          background: #9b9b9b1a;
          padding: 10px;
          border-radius: 50px;
        }

        .gradient-bg {
          background: linear-gradient(135deg, #FFD729, #FF8629) !important;
        }
      `}</style>

      <section className="choose-card-section">
        {cards.map((card, index) => (
          <SingleCard key={index} {...card} index={index} />
        ))}
      </section>
    </>
  );
};

export default FourPointer;
