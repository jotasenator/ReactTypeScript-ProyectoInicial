import { lazy, LazyExoticComponent } from "react";
import { RegisterPage, FormikBasicPage, FormikComponents, FormikYupPage, FormikAbstraction } from '../03-forms/pages'

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
        to: "/yup",
        path: "yup",
        Component: FormikYupPage,
        name: "Formik-Yup-Page"
    },
    {
        to: "/formik-components",
        path: "formik-components",
        Component: FormikComponents,
        name: "Formik-Components-Page"
    },
    {
        to: "/formik-abstraction",
        path: "formik-abstraction",
        Component: FormikAbstraction,
        name: "Formik-Abstraction-Page"
    },
    {
        to: "/lazy1",
        path: "lazy1",
        Component: Lazy1,
        name: "Lazy-1"
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