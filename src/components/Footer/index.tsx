import React from "react";

const Footer: React.FC = () => {
  return (
    <div
      style={{
        height: "5vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <p>+38 066 80 55115 (Даніель)</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <p>+38 066 80 55115 (Ярослав)</p>
      </div>
    </div>
  );
};

export default Footer;
