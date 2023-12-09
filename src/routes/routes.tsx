import { ReactNode } from "react";
import SignIn from "../containers/auth/sign-in";
import Home from "../containers/app/home";
import SignUp from "../containers/auth/sign-up";

interface Type {
    path: string;
    element: ReactNode
}

interface authProverType {
    signIn: Type,
    signUp: Type,
}
export const authRoutes: authProverType | any = {
    signIn: { path: '/auth/sign-in', element: <SignIn /> },
    signUp: { path: '/auth/sign-up', element: <SignUp /> },
}

export const appRoutes :any = {
    home: { path: '/home', element: <Home /> }
}