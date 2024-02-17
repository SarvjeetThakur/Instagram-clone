import { ReactNode } from "react";
import SignIn from "../containers/auth/sign-in";
import Home from "../containers/app/home";
import SignUp from "../containers/auth/sign-up";
import Story from "../containers/app/storys";

interface RoutesType {
    path: string;
    element: ReactNode
};

export interface AuthRouteInterface {
    signIn: RoutesType;
    signUp: RoutesType;
};
export const authRoutes: AuthRouteInterface = {
    signIn: { path: '/auth/sign-in', element: <SignIn /> },
    signUp: { path: '/auth/sign-up', element: <SignUp /> }
};

export interface AppRouteInterface {
    noPath: RoutesType;
    home: RoutesType;
    story: RoutesType;
};
export const appRoutes: AppRouteInterface = {
    noPath: { path: '/', element: <Home /> },
    home: { path: '/home', element: <Home /> },
    story: { path: '/story/:userName/:storyId', element: <Story /> },
};