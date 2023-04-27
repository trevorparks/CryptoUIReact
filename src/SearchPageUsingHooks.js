import React, { useState } from "react";
import { siteData } from "./data.js";
import Result from "./Result.js";
import useSearchIndex from "./useSearchIndex.js";

const miniSearchOptions = {
  fields: ["title", "description", "url", "category"],
  storeFields: ["title", "description", "url", "category"],
  searchOptions: {
    boost: { title: 2, description: 1 },
    prefix: true,
    fuzzy: 0.25
  }
};

export default function SearchPageUsingHooks() {
  const [inputValue, setInputValue] = useState("");
  const [showResults, setShowResults] = useState(false);

  const { results, search, searchIndex } = useSearchIndex(
    siteData,
    miniSearchOptions,
    {}
  );

  const handleSubmit = () => {
    search(inputValue);
    setShowResults(true);
  };

  return (
    <div className="App">
      <div className="Search">
        <h1>Search</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Yearn Finance..."
          className="input input-lg input-bordered input-primary w-full mb-12"
        />
        <button onClick={handleSubmit} className="submit-button">
          Submit
        </button>
      </div>

      {showResults && (
        <div className="result-container">
          {results.length
            ? results.map((result) => (
                <Result
                  key={result.id}
                  result={result}
                  url={result.url}
                  category={result.category}
                />
              ))
            : siteData.map((result) => (
                <Result
                  key={result.id}
                  result={result}
                  url={result.url}
                  category={result.category}
                />
              ))}
        </div>
      )}
    </div>
  );
}
