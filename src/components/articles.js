import React from "react";
import { Link } from "react-router-dom";
import data from "./data";

function Articles() {
  return (
    <div>
      {data.map((article) => {
        return (
          <div>
            <Link to={`/articles/${article.name}`}>{article.title}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Articles;
