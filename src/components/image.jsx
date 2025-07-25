import React, { useState } from "react";

export const Image = ({ title, largeImage, smallImage }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
       
        style={{
          cursor: "pointer",
          margin: "0 8px",           // horizontal margin between items
          borderRadius: "12px",
          overflow: "hidden",        // keeps borderRadius working on image
          height: "200px",           // fixed height
        }}
      >
        <img
          src={smallImage}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",     // ensures it fills the box and crops if needed
            display: "block"
          }}
        />
      </div>

      {isOpen && (
        <div className="lightbox-overlay" onClick={() => setIsOpen(false)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={largeImage || smallImage}
              alt={title}
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
                borderRadius: "12px"
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};
