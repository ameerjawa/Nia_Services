import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            Explore our work and see how we’ve helped secure homes, businesses, and vehicles with expert locksmith solutions.
          </p>
        </div>
        <div className="row gallery-grid">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="gallery-item">
                  <Image
                    title={d.title}
                    largeImage={d.largeImage}
                    smallImage={d.smallImage}
                  />
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
