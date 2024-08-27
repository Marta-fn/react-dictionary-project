import React, { useState } from "react";

export default function DictionarySearch() {
  const [keyword, setKeyword] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="DictionarySearch">
      <form onSubmit={handleSubmit}>
        <input type="search" autoFocus={true} onChange={handleChange} />
      </form>
    </div>
  );
}
