import React from "react";

export default function meaning(props) {
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>{props.meaning.definition}</p>
      <em>{props.meaning.example}</em>
    </div>
  );
}
