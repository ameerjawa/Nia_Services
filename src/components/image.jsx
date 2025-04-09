import React, { useState } from "react";

export const Image = ({ title, largeImage, smallImage }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="portfolio-item">
        <div className="hover-bg">
          <div onClick={() => setIsOpen(true)} style={{ cursor: "pointer" }}>
            <div className="hover-text">
              <h4>{title}</h4>
            </div>
            <img src={smallImage} className="img-responsive" alt={title} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lightbox-overlay" onClick={() => setIsOpen(false)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
         
            <img src={largeImage} alt={title} />
          </div>
        </div>
      )}
    </>
  );
};
