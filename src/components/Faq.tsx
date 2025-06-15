import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  data: FaqItem[];
}

const Faq: React.FC<FaqProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleIndex = (index: number) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <>
      <style>{`
        .faq-wrapper {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 0px 80px;
          margin-bottom:60px;
        }

        .faq-item {
          position: relative;
          background:
            repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0px,
              rgba(255, 255, 255, 0.06) 1px, transparent 1px, transparent 16px),
            linear-gradient(9.22deg, rgba(255, 255, 255, 0.08) 18.26%,
              rgba(0, 0, 0, 0.08) 131.8%),
            linear-gradient(0deg, #060709, #060709);
          border-radius: 12px;
          border: 1.1px solid transparent;
          transition: all 0.3s ease;
          overflow: hidden;
          width: 70%;
          margin: auto;
        }

        .faq-item.active {
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
          border-image-slice: 1;
          box-shadow: 0px 0px 73.89px 0px #FFFFFF1A inset,
                      0px 14px 17.7px 0px #0000007D;
          backdrop-filter: blur(102.74px);
        }

        .faq-question {
          padding: 20px 24px;
          font-size: 16px;
          font-weight: 500;
          color: #fff;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .faq-answer {
          padding: 0 24px 20px;
          font-size: 14px;
          line-height: 1.5;
          color: #ccc;
        }

        .arrow {
          transition: transform 0.3s ease;
        }

        .faq-arrow {
  margin-left: 10px;
  font-size: 16px;
  color: white;
}
      `}</style>

      <div className="faq-wrapper">
        {data.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div key={index} className={`faq-item ${isActive ? "active" : ""}`}>
              <div className="faq-question" onClick={() => toggleIndex(index)}>
                {item.question}
                <div className="faq-arrow">
                  {!isActive ? (
                    <span className="arrow">⌄</span> // Down arrow when collapsed
                  ) : (
                    <span className="arrow">⌃</span> // Up arrow when expanded
                  )}
                </div>
              </div>
              {isActive && <div className="faq-answer">{item.answer}</div>}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Faq;
