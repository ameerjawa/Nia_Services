import React, { useEffect, useState } from "react";

export const Testimonials = ({ data }) => {
  const [combinedReviews, setCombinedReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/.netlify/functions/get-reviews")
      .then((res) => res.json())
      .then((apiReviews) => {
        const googleReviews = apiReviews.map((review) => ({
          name: review.author_name,
          text: review.text,
          img: review.profile_photo_url?.replace(/^http:/, "https:") || "img/default-user.jpg",
        }));

        const staticReviews = data || [];

        // Interleave the two arrays
        const maxLength = Math.max(googleReviews.length, staticReviews.length);
        const interleaved = [];

        for (let i = 0; i < maxLength; i++) {
          if (i < googleReviews.length) interleaved.push(googleReviews[i]);
          if (i < staticReviews.length) interleaved.push(staticReviews[i]);
        }

        setCombinedReviews(interleaved); // optional: limit to 6
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch reviews", err);
        setCombinedReviews(data || []); // fallback to static
        setLoading(false);
      });
  }, [data]);

  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>What our clients say</h2>
        </div>
        <div className="row">
          {loading ? (
            <p>Loading reviews...</p>
          ) : combinedReviews.length > 0 ? (
            combinedReviews.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4">
                <div className="testimonial">
                  <div className="testimonial-image">
                    <img src={d.img} alt="" />
                  </div>
                  <div className="testimonial-content">
                    <p>"{d.text}"</p>
                    <div className="testimonial-meta"> - {d.name} </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No reviews found.</p>
          )}
        </div>
      </div>
    </div>
  );
};
