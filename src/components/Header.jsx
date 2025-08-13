import React from "react";
import { Link } from "react-router-dom";
import '../Header.css';

export default function Header() {
  return (
    <header>
      <h1>Diamond Lounge</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
