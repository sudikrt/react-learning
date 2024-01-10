import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.designmantic.com/logo-images/167171.png?company=Company%20Name&slogan=&verify=1">
                </img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestroCard = () => {
    return (
        <div className="restro-card"> 
            <h1>Rest -1</h1>
        </div>
    )
}


const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restro-container">
                <RestroCard></RestroCard>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header></Header>
            <Body></Body>
        </div>
    )
}

const root =  ReactDOM.createRoot (document.getElementById ("root"));
root.render (
    <AppLayout></AppLayout>
);

// const heading = React.createElement (
//     "h1", {
//         id : "heading",
//         xyz : "abc"
//     }, "Hello from react"
// );
// const parent = React.createElement (
//     "div",
//     {id : "parent",},
//     [heading, React.createElement (
//         "h1", {
//         }, "Hello heading 2"
//     )]
// )
// const rootDiv = React.createElement (
//     "div",
//     {id : "rootDiv"},
//     parent
// )
// console.log (heading);
// const jsxHeading = <h1 id="heading" className="head">JSX heading</h1>;

// //to wirte in multiple line need to wrap in ()
// // beacuse babel needs to understand it
// const JsxHeading1 = () =>  (<h1 id="heading2" 
// className="head">JSX heading1</h1>);

// const jsxElement =  (<h1 id="heading2" 
// className="head">JSX Element</h1>);

// const FunctionalComp = () => (<div>
//     <JsxHeading1></JsxHeading1>
//     {jsxElement}
//     <h1>Demo React functional Comp</h1>
// </div>);
// console.log (jsxHeading);

// const root =  ReactDOM.createRoot (document.getElementById ("root"));
// root.render (
//     <FunctionalComp></FunctionalComp>
// );