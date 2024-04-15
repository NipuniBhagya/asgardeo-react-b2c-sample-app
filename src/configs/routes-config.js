import { lazy } from "react";
import { AppConstants } from "../constants/app-constants";

export const routes = [
    {
        id: "home",
        path: AppConstants.getPaths().get("HOME"),
        component: lazy(() => import("../pages/Home")),
    },
    {
        id: "profile",
        path: AppConstants.getPaths().get("PROFILE"),
        component: lazy(() => import("../pages/Profile")),
    },
    {
        id: "resources",
        path: AppConstants.getPaths().get("RESOURCES"),
        component: lazy(() => import("../pages/Resources")),
    },
    {
        id: "settings",
        path: AppConstants.getPaths().get("SETTINGS"),
        component: lazy(() => import("../pages/Settings")),
    },
];
