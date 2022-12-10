import { lazy, LazyExoticComponent } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import NoLazy from '../01-lazyload/pages/NoLazy';
import LazyLayout from '../01-lazyload/layout/LazyLayout';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: JSXComponent | LazyExoticComponent<JSXComponent>
    name: string;
}

const Lazy1 = lazy(() => import("../01-lazyload/layout/LazyLayout"))

export const routes: Route[] = [
    {
        to: "/lazyload/",
        path: "/lazyload/*",
        Component: LazyLayout,
        name: "LazyLayout-Dash"
    },
    {
        to: "/no-lazy",
        path: "no-lazy",
        Component: NoLazy,
        name: "Lazy-2"
    },

]