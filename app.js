const heading = React.createElement (
    "h1", {
        id : "heading",
        xyz : "abc"
    }, "Hello from react"
);
const parent = React.createElement (
    "div",
    {id : "parent",},
    heading
)
const rootDiv = React.createElement (
    "div",
    {id : "rootDiv"},
    parent
)
const root =  ReactDOM.createRoot (document.getElementById ("root"));
root.render (
    rootDiv
);