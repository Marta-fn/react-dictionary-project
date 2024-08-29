import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const ApiKey = "8066f7209f55a447d5b43ta1a1a01obb";
    const ApiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${ApiKey}`;
    axios.get(ApiUrl).then(handleResponse);
    console.log(ApiUrl);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          autoFocus={true}
          onChange={handleChange}
          name="searchWord"
        />
      </form>
      <Results results={results} />
    </div>
  );
}
