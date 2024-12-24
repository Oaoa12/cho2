import React from "react";
import "./header.css";
import { CartBlock } from "../cart-block";

export const Header = ({ onNavigate }) => {
  return (
    <div className="header">
      <div className="header-content">
        <img
          src="/covers/Remove-bg.ai_1732696072596 1.png"
          alt="Логотип"
          className="header-logo"
        />
        <nav className="header-nav">
          <button onClick={() => onNavigate('about')} className="nav-link">О нас</button>
          <button onClick={() => onNavigate('products')} className="nav-link">Товары</button>
        </nav>
        <div className="cart-container">
          <CartBlock />
        </div>
      </div>
    </div>
  );
};