import { lazy, LazyExoticComponent } from "react";
import { RegisterPage } from '../03-forms/pages/RegisterPage';
import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: JSXComponent | LazyExoticComponent<JSXComponent>
    name: string;
}


const Lazy1 = lazy(() => import("../01-lazyload/pages/LazyPage1"))
const Lazy2 = lazy(() => import("../01-lazyload/pages/LazyPage2"))
const Lazy3 = lazy(() => import("../01-lazyload/pages/LazyPage3"))

export const routes: Route[] = [

    {
        to: "/register",
        path: "register",
        Component: RegisterPage,
        name: "Register-Page"
    },
    {
        to: "/formik-basic",
        path: "formik-basic",
        Component: FormikBasicPage,
        name: "Formik-Basic-Page"
    },
    {
        to: "/lazy2",
        path: "lazy2",
        Component: Lazy2,
        name: "Lazy-2"
    },
    {
        to: "/lazy3",
        path: "lazy3",
        Component: Lazy3,
        name: "Lazy-3"
    },
]