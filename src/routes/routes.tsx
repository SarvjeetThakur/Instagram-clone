import { ReactNode } from "react";
import SignIn from "../containers/auth/sign-in";
import Home from "../containers/app/home";
import SignUp from "../containers/auth/sign-up";

interface RoutesType {
    path: string;
    element: ReactNode
};

interface AuthRouteInterface{
    signIn :RoutesType;
    signUp:RoutesType;
};
export const authRoutes :AuthRouteInterface = {
    signIn: { path: '/auth/sign-in', element: <SignIn /> },
    signUp: { path: '/auth/sign-up', element: <SignUp /> }
};

interface AppRouteInterface{
    home :RoutesType;
};
export const appRoutes: AppRouteInterface = {
    home: { path: '/home', element: <Home /> },
};