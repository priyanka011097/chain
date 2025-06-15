import React from "react";

interface ImageGreadProps {
  image: string;
//   overlayImage: string;
  title: string;
  subtitle: string;
}

interface ImageGreadListProps {
  cards: ImageGreadProps[];
}

const HoverCard: React.FC<ImageGreadProps> = ({
  image,
//   overlayImage,
  title,
  subtitle,
}) => {
  return (
    <div className="hover-card">
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="main-image" />
        <div className="overlay">
          {/* <img src={overlayImage} alt="Overlay" className="overlay-image" /> */}
          <button className="read-more">Read More</button>
        </div>
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-subtitle">{subtitle}</p>
    </div>
  );
};

const ImageGread: React.FC<ImageGreadListProps> = ({ cards }) => {
  return (
    <>
      <style>{`
        .hover-card {
          width: 300px;
          margin: 16px;
          font-family: sans-serif;
          color: white;
        }

        .card-image-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 5px;
        }

        .main-image {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.3s ease;
          border-radius: 5px;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(#ffffff33 1px, transparent 1px);
          background-size: 10px 10px;
          background-color: rgba(0, 0, 0, 0.5); 
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          pointer-events: none;
        }


        .overlay-image {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.5;
          pointer-events: none;
        }

        .read-more {
          z-index: 2;
          padding: 10px 20px;
          background: white;
          color: black;
          font-weight: bold;
          border-radius: 20px;
          border: none;
          cursor: pointer;
        }

        .card-image-wrapper:hover .overlay {
          opacity: 1;
        }

        .card-title {
          font-size: 18px;
          margin: 12px 0;
          white-space: nowrap;      
          overflow: hidden;         
          text-overflow: ellipsis;   
          max-width: 100%;  
          color: #9CA3AF; 
        }

        .card-subtitle {
          font-size: 14px;
          color: #9CA3AF;
          margin: 0px;
        }

        .hover-card-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 20px;
          padding: 10px 120px;
          margin-bottom: 200px;
        }
      `}</style>

      <div className="hover-card-list">
        {cards.map((card, index) => (
          <HoverCard key={index} {...card} />
        ))}
      </div>
    </>
  );
};

export default ImageGread;
