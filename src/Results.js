import React from "react";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2 className="text-capitalize">{props.results.word}</h2>
        <p>{props.results.phonetic}</p>
        {props.results.meanings.slice(0, 4).map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
              <Synonyms synonyms={meaning.synonyms} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
