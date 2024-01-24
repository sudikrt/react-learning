
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


React Hooks are normal JS function - written by FB developers written inside the react

We have to import these utiliy function, - there are two very important hooks,
Two most hooks
useState () - used to create super power ful state variable - used to create state vriable - it maintains the state of your comp, creating local state inside comp

useState () returns a state varibale and it is recieved in [variableName, setVaribaleName]
pass param as default value to the variable
setVaribaleName - used to set/udpate this list the value

whenever state variable react reendering components

useEffect ()

what is hook in react -> its nothing but a normal js function, which react give us, it has its own function
 1st arg is a callback function 
 2nd arg is a dependency arry

It will be invoked as soon as render cycle finished
=====

What is monolith architecture ?

CORS policy, - calling the api from one origin is not supported 
cors chrome extention


React application are single page application 
its just changing the components rather then reloading the page

# Routing in web apps
client side 
Server side



