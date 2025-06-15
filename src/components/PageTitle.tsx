import React from "react";

interface PageTitleProps {
  topbutton?: string;
  title1?: string;
  title2?: string;
  highlight1?: string;
  highlight2?: string;
  subtitle1?: string;
  subtitle2?: string;
  text?: string;
  primaryButton?: string;
  secondaryButton?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({
  topbutton,
  title1,
  title2,
  highlight1,
  highlight2,
  subtitle1,
  subtitle2,
  text,
  primaryButton,
  secondaryButton,
}) => {
  return (
    <>
      <style>{`
        .page-title-section {
          width: 100%;
          color: #fff;
          display: flex;
          align-items: center;
          flex-direction: column;
          margin-bottom: 50px;
          // position: relative;
        }

        // .page-title-tag {
        //   position: absolute;
        //   top: 24px;
        //   left: 10;
        //   right: 10;
        //   display: flex;
        //   justify-content: center;
        // }

        .tag-button {
          color: #ffffff;
          padding: 10px 10px;
          border: 1px solid #9CA3AF;
          border-radius: 9999px;
          font-size: 14px;
          background: #272732;;
          backdrop-filter: blur(4px);
          font-weight: 500px;
        }

        .content-container {
          text-align: center;
          padding: 0 16px;
          max-width: 60rem;
          z-index: 10;
        }

        .main-title {
          font-size: 45px;
          font-weight: 600;
          margin-bottom: 16px;
          line-height: 1.2;
          font-family: "Archivo", sans-serif;
        }

        .highlight-text {
          color: #9CA3AF;
        }

        .subtitle {
          font-size: 16px;
          color: #D1D5DB;
          line-height: 1.5;
          width: 70%;
          margin: auto;
        }

        .buttons-container {
          display: flex;
          justify-content: center;
          gap: 16px;
        } 

        .primary-button {
          padding: 12px 24px;
          background-color: #FFF;
          color: #000;
          border-radius: 9999px;
          font-size: 14px;
          font-weight: 500;
          transition: background-color 0.2s ease;
          cursor: pointer;
        }


        .secondary-button {
          font-size: 14px;
          text-decoration: none;
          cursor: pointer;
          background: transparent; 
          border: none;            
          color: #fff;            
          padding: 0;
        }

        @media (min-width: 768px) {
          .main-title {
            font-size: 45px;
          }
          
          .subtitle {
            font-size: 16px;
            font-weight: 400;
          }
        }
      `}</style>

      <section className="page-title-section">
        {/* Tag at top */}
        {topbutton && (
          <div className="page-title-tag">
            <button className="tag-button">{topbutton}</button>
          </div>
        )}
        {/* Main content */}
        <div className="content-container">
          {(title1 ||
            title2 ||
            highlight1 ||
            highlight2 ||
            subtitle1 ||
            subtitle2) && (
              <h1 className="main-title">
                {title1} <span className="highlight-text">{highlight1}</span>{" "}
                {title2} <br />
                {subtitle1} <span className="highlight-text">{highlight2}</span>{" "}
                {subtitle2}
              </h1>
            )}

          <p className="subtitle">{text}</p>

          {(primaryButton || secondaryButton) && (
            <div className="buttons-container">
              {primaryButton && (
                <button className="primary-button">{primaryButton}</button>
              )}
              {secondaryButton && (
                <button className="secondary-button">{secondaryButton}</button>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PageTitle;
