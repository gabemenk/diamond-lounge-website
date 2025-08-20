import React from "react";

export default function MapSection() {
  return (
    <section id="location">
      <h2>Find Us</h2>
      <div className="map-container">
        <iframe
          title="Lounge Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.0997790231086!2d-73.97543628861762!3d40.605622144002375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c245c1f64fabeb%3A0x205cd1bec158690c!2sDiamond%20Lounge!5e0!3m2!1sen!2sus!4v1755705543421!5m2!1sen!2sus"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
