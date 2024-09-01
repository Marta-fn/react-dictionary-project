import React from "react";
import "./Meaning.css";

export default function meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="text-capitalize">{props.meaning.partOfSpeech}</h3>
      <p>{props.meaning.definition}</p>
      <em>{props.meaning.example}</em>
    </div>
  );
}
