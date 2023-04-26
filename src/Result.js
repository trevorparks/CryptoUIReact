import React from "react";

export default function Result({ result }) {
    
  return (
    <div className="card w-full max-w-[400px] bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="card-title">{result.title}
        <p>Description: <br/>
        {result.description} <br />
        <a href={result.url}>URL: {result.url}</a> <br />
        Category: {result.category}
        </p>
        <div className="card-title justify-end">
          <button className="btn btn-primary btn-block mt-2" href={result.url}>
            Visit Now
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}