import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement (
    "h1", {
        id : "heading",
        xyz : "abc"
    }, "Hello from react"
);
const parent = React.createElement (
    "div",
    {id : "parent",},
    [heading, React.createElement (
        "h1", {
        }, "Hello heading 2"
    )]
)
const rootDiv = React.createElement (
    "div",
    {id : "rootDiv"},
    parent
)
console.log (heading);
const jsxHeading = <h1 id="heading" className="head">JSX heading</h1>;

//to wirte in multiple line need to wrap in ()
// beacuse babel needs to understand it
const jsxHeading1 = (<h1 id="heading2" 
className="head">JSX heading1</h1>);


console.log (jsxHeading);
const root =  ReactDOM.createRoot (document.getElementById ("root"));
root.render (
    jsxHeading
);