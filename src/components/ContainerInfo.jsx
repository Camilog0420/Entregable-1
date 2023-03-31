import React from "react";
import { Button } from "./Button";
import "./Styles/ContainerInfo.css"

const ContainerInfo = ({ quote, handleNewQuote }) => {
  return (
    <section className="ContainerInfo">
      <h1 className="ContainerInfo__title">Galletas de la fortuna</h1>

      <article className="ContainerInfo__phrase">
        <p>{quote.phrase}</p>
      </article>

      <article className="ContainerInfo__author">
        <h4>Fuente: {quote.author}</h4>
      </article>

      <Button handleNewQuote={handleNewQuote} />
    </section>
  );
};

export default ContainerInfo;
