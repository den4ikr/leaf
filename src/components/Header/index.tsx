import React from "react";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div
      style={{
        height: "10vh",
        display: "flex",
        justifyContent: "center",
        columnGap: "40px",
        alignItems: "center",
      }}
    >
      <a
        href="/"
        style={{
          textDecoration: "none",
          color: pathname === "/" ? "#4B9D56" : "#333",
          fontSize: "20px",
        }}
      >
        Home
      </a>
      <a
        href="/menu"
        style={{
          textDecoration: "none",
          color: pathname === "/menu" ? "#4B9D56" : "#333",
          fontSize: "20px",
        }}
      >
        Menu
      </a>
    </div>
  );
};

export default Header;
