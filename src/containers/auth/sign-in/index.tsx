import { useEffect, useRef, useState } from "react";
import InputBox from "../../../componets/reusable/InputBox";
import Button from "../../../componets/reusable/button";
import { IoLogoFacebook } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { appRoutes, authRoutes } from "../../../routes/routes";
import {
  instgramName,
  screenshot1,
  screenshot2,
  screenshot3,
  screenshot4,
} from "./assets/images";
import { storeKeys } from "../../../util/storeHelper";

const screenSots = [screenshot1, screenshot2, screenshot3, screenshot4];

export default function SignIn() {
  const navigate=useNavigate()
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<any>(screenshot1);
  useEffect(() => {
    const interval = setInterval(() => {
      const number = Math.floor(Math.random() * 4);
      setImage(screenSots[number]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const validateInput = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
    if (emailRegex.test(value) || phoneRegex.test(value) || usernameRegex.test(value)) {
      return false
    } else {
      return true
    }
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isError = validateInput(username.current?.value ? username.current?.value : '')
    if (isError) {
      console.log('Invalid input. Please enter a valid email, phone number, or username.');
    } else {
      localStorage.setItem(storeKeys.isLogin,'true')
      navigate(appRoutes.home.path,{replace:true})
      console.log(
        `Logging in with username: ${username.current?.value} and password: ${password.current?.value}`
      );
    }

  };

  return (
    <div className="flex h-screen pt-[40px] justify-center items-center">
      <div className="flex justify-end w-full mr-[15px]">
        <div className="bg-black rounded-[27px] h-[540px] border border-black shadow-[0_0_7px_gray] mr-[29px] ">
          <img
            src={image}
            alt="Screenshot"
            className="w-[300px] h-[540px]"
            loading="lazy"
          />
        </div>
      </div>
      <div className="w-full flex justify-start ">
        <div className="w-[350px] mt-2 ">
          <div className="border-[#cfc8c8] border px-10 pt-10 pb-4">
            <div>
              <div>
                <img src={instgramName} alt="instaName" />
              </div>

              <form onSubmit={handleLogin}>
                <div className="mt-2">
                  <InputBox
                    ref={username}
                    className="!bg-slate-50 py-2 !px-3 mt-2 focus:outline-none focus:ring focus:border-blue-300"
                    id="username"
                    placeholder="Phone number ,email,username"
                  />
                </div>
                <div className="mt-2">
                  <InputBox
                    ref={password}
                    autoComplete="false"
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="!bg-slate-50 py-2 !px-3 mt- focus:outline-none focus:ring focus:border-blue-300"
                    required
                  />
                </div>
                <div className="mt-2">
                  <Button className=" !bg-blue-400" type="submit">
                    Login
                  </Button>
                </div>
              </form>
              <div className="mt-6 flex items-center">
                <span className="border border-gray-200 h-1/3 flex-grow"></span>
                <span className="mx-6 text-sm">OR</span>
                <span className="border border-gray-200 h-1/3 flex-grow"></span>
              </div>
              <button className="w-full flex items-center justify-center mt-4">
                <IoLogoFacebook className="mr-1" />
                <span className="text-385185">Log in with Facebook</span>
              </button>
              <div className="flex justify-center mt-5 text-12px">
                <Link to={"/"}>Forgot password?</Link>
              </div>
            </div>
          </div>
          <div className="border-[#cfc8c8] border mt-[20px] p-5 flex justify-center text-center">
            <span>
              Don't have an account?
              <Link to={authRoutes.signUp.path} className="text-blue-500">
                {" "}
                Sign up
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
