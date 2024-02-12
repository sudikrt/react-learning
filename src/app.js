import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/header";
import Body from "./components/body";
import Error from "./components/error";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//doing lzy loading for about us
//import About from "./components/about";
import ContactUs from "./components/contactus";
import RestroMenuPage from "./components/restroMenuPage";


//loads the code immediately 
//import Grocery from "./components/grocery";

/**
 * when our app load initially our app home page will load
 * it will not load the code for Grocery
 * only when I navigate to Grocery pgae that time Grocery code will be displayed
 * lazy or on demand loading
 */

/**
 * lazy is a named import from react
 * 
 * import () is a function will take the path of the component 
 * 
 * when I click on Grocery link on header, react threw error, because Grocery filed 11 ms to load
 * 
 * Suspense is a comp comes from react lib
 */
const Grocery = lazy (() => {
    return import ('./components/grocery')
});

const About = lazy (() => import ( "./components/about" ));

const AppLayout = () => {
    return (
        <div className="app">
            <Header></Header>
            {
                /**
                 * if my path is / then it should have body <Body></Body>
                 * if my path is /about then its about component <About></About>
                 * if my path is /contactus then its contact us component <ContactUs/>
                 * 
                 * <Outlet> is replaced by the component based on path
                 * 
                 * Single page application
                 * 
                 * if you want to navigate don't use anchor tag
                 */
            }
            <Outlet></Outlet>
        </div>
    )
}

const appRouter = createBrowserRouter (
    [
        {
            path : "/",
            element : <AppLayout></AppLayout>,
            errorElement : <Error></Error>,
            children : [
                {
                    path : "/",
                    element : <Body></Body>
                },
                {
                    path : "/aboutus",
                    element : <Suspense fallback={<h1>Loading....</h1>}><About></About></Suspense>
                },
                {
                    path : "/contactus",
                    element : <ContactUs/>
                },
                {
                /**
                 * when I click on Grocery link on header, react threw error, because Grocery filed 11 ms to load
                 * Suspense is a comp comes from react lib
                 * you need to wrap the comp around it which is not available at the moment
                 * Give it a place holder or fallback to when the code is not available
                 */
                    path : "/grocery",
                    element : <Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
                },
                {
                    path : "/restro/:resId", /**resId is dynamic */
                    element : <RestroMenuPage></RestroMenuPage>
                }
            ]
        },
    ]
);

//earlier we re renderding app layout,
const root =  ReactDOM.createRoot (document.getElementById ("root"));
// root.render (
//     <AppLayout></AppLayout>
// );
root.render (
    <RouterProvider router={appRouter}></RouterProvider>
);