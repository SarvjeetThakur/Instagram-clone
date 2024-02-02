import { ReactNode } from "react";
import SignIn from "../containers/auth/sign-in";
import Home from "../containers/app/home";
import SignUp from "../containers/auth/sign-up";

interface RoutesType {
    path: string;
    element: ReactNode
}


export const authRoutes = {
    signIn: { path: '/auth/sign-in', element: <SignIn /> } as RoutesType,
    signUp: { path: '/auth/sign-up', element: <SignUp /> } as RoutesType,
}

export const appRoutes :any = {
    home: { path: '/home', element: <Home />  }as RoutesType
}