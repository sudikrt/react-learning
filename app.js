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

const styleCard = {
    backgroundColor: '#f0f0f0'
};
// const RestroCard = (props) => {
// /* <h1>{props.resName}</h1>
//<h3>{props.cuisine}</h3>

const RestroCard = ({resName, cuisine}) => {
    //console.log (props);
    return (
        <div className="restro-card" style={styleCard}>
            <img className="res-logo" src="https://www.designmantic.com/logo-images/167171.png?company=Company%20Name&slogan=&verify=1">
                </img>  
            <h1>{resName}</h1>
            <h3>{cuisine}</h3>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}


const Body = () => {
    return (
        <div className="body" >
            <div className="search">Search</div>
            <div className="restro-container">
                <RestroCard resName="M1" cuisine="Burger, etc"></RestroCard>
                <RestroCard></RestroCard>
                <RestroCard></RestroCard>
                <RestroCard></RestroCard>
                <RestroCard></RestroCard>
                <RestroCard></RestroCard>
                <RestroCard></RestroCard>
                <RestroCard></RestroCard>
                <RestroCard></RestroCard>
                <RestroCard></RestroCard>
                <RestroCard></RestroCard>
                <RestroCard></RestroCard>
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