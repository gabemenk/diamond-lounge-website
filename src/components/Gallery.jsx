import React, { useState } from "react";import bar from "../images/bar.jpg";
import coffee from "../images/coffee.jpg";
import exterior from "../images/exterior.jpg";
import gamingaction from "../images/gamingaction.jpg";
import pool_and_food from "../images/pool_and_food.jpg";
import pool_in_action from "../images/pool_in_action.jpg";
import pool_table from "../images/pool_table.jpg";
import PS5s from "../images/PS5s.jpg";
import tables from "../images/tables.jpg";
import "../App.css"


const images = [exterior, bar, tables, pool_table, pool_and_food, pool_in_action, gamingaction, PS5s, coffee];

export default function Gallery() {
  const [lightbox, setLightbox] = useState({ open: false, img: null });

  const openLightbox = (img) => setLightbox({ open: true, img });
  const closeLightbox = () => setLightbox({ open: false, img: null });

  return (
    <>
      <div className="gallery">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Lounge ${idx + 1}`}
            onClick={() => openLightbox(img)}
          />
        ))}
      </div>

      {lightbox.open && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={lightbox.img} alt="Enlarged lounge" />
        </div>
      )}
    </>
  );
}