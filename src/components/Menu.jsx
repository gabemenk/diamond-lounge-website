import React from "react";
import menuItems from "../data/menuData";

export default function Menu() {
  return (
    <section id="menu">
      <h2>Menu</h2>
      {menuItems.map(({ id, category, name, description, price }) => (
        <div key={id} className="menu-item">
          <h3>{name} <small>({category})</small></h3>
          <p>{description}</p>
          <p><strong>{price}</strong></p>
        </div>
      ))}
    </section>

  );
}
