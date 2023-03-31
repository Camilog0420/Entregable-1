import React from "react";
import "./Styles/Button.css"

export const Button = ({ handleNewQuote }) => {
  return (
    <div>
      <button className="Button" onClick={handleNewQuote}><img className="logo" src="/espacio/button.png" alt="" /></button>
    </div>
  );
};
