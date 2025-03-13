import React from "react";
import Nav from "./nav"; 
import "../style/style.scss";

const Ressursarkiv = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="content">
        {children}
      </main>
    </>
  );
};

export default Ressursarkiv;
