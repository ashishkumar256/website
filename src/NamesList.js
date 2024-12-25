import React from "react";

function NamesList({ names }) {
  return (
    <div style={{ overflowY: "scroll", height: "100vh", width: "50%" }}>
      <h2>Names List</h2>
      <ul>
        {names.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NamesList;
