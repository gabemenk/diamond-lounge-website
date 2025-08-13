import React from "react";

export default function Gallery() {
  // Temporary placeholder images
  const images = [
    "https://via.placeholder.com/300x200?text=Photo+1",
    "https://via.placeholder.com/300x200?text=Photo+2",
    "https://via.placeholder.com/300x200?text=Photo+3",
    "https://via.placeholder.com/300x200?text=Photo+4"
  ];

  return (
    <section id="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Gallery ${index + 1}`} />
        ))}
      </div>
    </section>
  );
}
