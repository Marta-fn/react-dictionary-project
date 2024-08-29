import React from "react";

export default function Synonyms(props) {
  console.log(props);
  if (props.synonyms) {
    return (
      <div>
        {props.synonyms.slice(0, 4).map(function (synonym, index) {
          return (
            <ul key={index}>
              <li>{synonym}</li>
            </ul>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
