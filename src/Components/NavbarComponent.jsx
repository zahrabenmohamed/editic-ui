import React from "react";
import logo from "../images/logo.png";

function NavbarComponent() {
  return (
    <nav style={{ backgroundColor: "#ECF2FF", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px" }}>
      <h1 style={{ margin: 0, color: "black" }}>Template Generator</h1>
      <img src={logo} alt="Logo" style={{ width: "50px", height: "50px", marginLeft: "10px" }} />
    </nav>
  );
}

export default NavbarComponent;