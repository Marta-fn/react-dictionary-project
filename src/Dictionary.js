import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);

    const ApiKey = "8066f7209f55a447d5b43ta1a1a01obb";
    const ApiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${ApiKey}`;
    axios.get(ApiUrl).then(handleResponse);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input type="search" autoFocus={true} onChange={handleChange} />
      </form>
    </div>
  );
}
