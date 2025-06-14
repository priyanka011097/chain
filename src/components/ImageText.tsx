import React from "react";

interface ImageTextProps {
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
  imageLink?: string;
  imageLeftorRight?: "left" | "right";
}

const ImageText: React.FC<ImageTextProps> = ({
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
  imageLink,
  imageLeftorRight = "left",
}) => {
  const isImageRight = imageLeftorRight === "right";

  return (
    <>
      <style>{`
        .page-title-section-imgtext {
          width: 100%;
          background-color: #000;
          color: #fff;
          display: flex;
          align-items: left;
          justify-content: center;
          padding: 10px 0px;
        }

        .page-title-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: fit-content;
          width: 100%;
          gap: 40px;
        }

        @media (min-width: 1024px) {
          .page-title-container {
            flex-direction: row;
            justify-content: center;
          }

          .image-right .image-container {
            order: 2;
          }

          .image-right .content-container-imgtext {
            order: 1;
          }

          .image-left .image-container {
            order: 1;
          }

          .image-left .content-container-imgtext {
            order: 2;
          }
        }

        .image-container {
          flex: 1;
          max-width: 500px;
          height: fit-content;
        }

        .image-container img {
          width: 100%;
          height: auto;
        }

        .content-container-imgtext {
          flex: 1;
          max-width: 600px;
          height: fit-content;
        }

        .page-title-tag-imgtext {
          margin-bottom: 16px;
        }

        .tag-button-imgtext {
          color: #ffffff;
          padding: 6px 14px;
          border: 1px solid #9CA3AF;
          border-radius: 9999px;
          font-size: 14px;
          background: #272732;
          backdrop-filter: blur(4px);
        }

        .main-title-imgtext {
          font-size: 36px;
          font-weight: 700;
          line-height: 1.3;
          text-align: left;
          margin-bottom: 16px;
        }

        .highlight-text-imgtext {
          color: #9CA3AF;
        }

        .subtitle-text-imgtext{
          font-size: 16px;
          color: #D1D5DB;
          margin-bottom: 24px;
          text-align: left;
          line-height: 1.5;
        }

        .buttons-container-imgtext {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .primary-button {
          padding: 12px 24px;
          background-color: #FFF;
          color: #000;
          border-radius: 9999px;
          font-size: 14px;
          font-weight: 500;
        }

        .secondary-button {
          font-size: 14px;
          color: #fff;
          text-decoration: underline;
        }

        @media (min-width: 768px) {
          .main-title-imgtext {
            font-size: 48px;
          }
        }
      `}</style>

      <section
        className={`page-title-section-imgtext ${
          isImageRight ? "image-right" : "image-left"
        }`}
      >
        <div className="page-title-container">
          {/* Image */}
          {imageLink && (
            <div className="image-container">
              <img src={imageLink} alt="Visual" />
            </div>
          )}

          {/* Text Content */}
          <div className="content-container-imgtext">
            {topbutton && (
              <div className="page-title-tag-imgtext">
                <button className="tag-button-imgtext">{topbutton}</button>
              </div>
            )}

            <h1 className="main-title-imgtext">
              {title1} <span className="highlight-text-imgtext">{highlight1}</span>{" "}
              {title2} <br />
              {subtitle1} <span className="highlight-text-imgtext">{highlight2}</span>{" "}
              {subtitle2}
            </h1>

            {text && <p className="subtitle-text-imgtext">{text}</p>}

            {(primaryButton || secondaryButton) && (
              <div className="buttons-container-imgtext">
                {primaryButton && (
                  <button className="primary-button">{primaryButton}</button>
                )}
                {secondaryButton && (
                  <button className="secondary-button">
                    {secondaryButton}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ImageText;
