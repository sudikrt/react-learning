import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/header";
import Body from "./components/body";
import Error from "./components/error";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/about";
import ContactUs from "./components/contactus";
import RestroMenuPage from "./components/restroMenuPage";


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
                    element : <About></About>
                },
                {
                    path : "/contactus",
                    element : <ContactUs/>
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