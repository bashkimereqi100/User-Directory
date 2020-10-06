import React from "react";

// function Container({ fluid, children }) {
//     return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
//   }

function Container({ children }) {
    return <div className="container">{children}</div>;
}
export default Container;
