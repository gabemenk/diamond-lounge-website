import React from "react";
import MapSection from "../components/MapSection";

export default function Contact() {
  return (
    <div style={{ maxWidth: "900px", margin: "2rem auto", padding: "1rem" }}>
      <h1>Contact Us</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          alignItems: "flex-start",
        }}
      >
        <div style={{ flex: "1 1 300px", minWidth: "280px" }}>
          <MapSection />
        </div>

        <div style={{ flex: "1 1 300px", minWidth: "280px" }}>
          <h2>Diamond Lounge Info</h2>
          <p><strong>Phone:</strong> (###) ###-####</p>
          <p><strong>Email:</strong> email@email.com</p>
          <p><strong>Address:</strong> 1923 McDonaldd Ave 2nd Floor, Brooklyn, NY 11223</p>
          <p><strong>Hours:</strong> Mon–Fri: 9am – 9pm, Sat–Sun: 10am – 6pm</p>
        </div>
      </div>
    </div>
  );
}
