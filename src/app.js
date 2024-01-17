import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/header";
import Body from "./components/body";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/about";
import ContactUs from "./components/contactus";

const AppLayout = () => {
    return (
        <div className="app">
            <Header></Header>
            <Body></Body>
        </div>
    )
}

const appRouter = createBrowserRouter (
    [
        {
            path : "/",
            element : <AppLayout></AppLayout>
        },
        {
            path : "/about",
            element : <About></About>
        },
        {
            path : "/contactus",
            element : <ContactUs/>
        }
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