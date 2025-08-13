import React from "react";

export default function MapSection() {
  return (
    <section id="location">
      <h2>Find Us</h2>
      <div className="map-container">
        <iframe
          title="Lounge Location"
          //replace w 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d280.939942115729!2d-73.97276847509107!3d40.6056213113742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2450e95aade77%3A0xa226c04587c22735!2sDiamondAutoSpa%20NYC!5e0!3m2!1sen!2sus!4v1754956881179!5m2!1sen!2sus"
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
