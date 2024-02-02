import { Link } from "react-router-dom";
import InputBox from "../../../../componets/reusable/InputBox";
import Button from "../../../../componets/reusable/button";
import { instgramName } from "../../sign-in/assets/images";
import { AiOutlineFacebook } from "react-icons/ai";
import { authRoutes } from "../../../../routes/routes";
import { memo } from "react";


export interface SignUpStepPropsType {
    callBack: Function
};

const StepOne = ({ callBack }: SignUpStepPropsType) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        callBack('next');
    };
    return (
        <div className="flex justify-center items-center flex-row m-4">
            <div>
                <div className=" border border-[#cfc8c8] w-[350px] p-8">
                    <div className=" flex justify-center m-3">
                        <img
                            className="w-[200px] h-[50px]"
                            src={instgramName}
                            alt="name"
                        />
                    </div>
                    <div className="mb-3">
                        <span className="text-center text-[16px] text-gray-400">
                            Sign up to see photos and videos from your friends.
                        </span>
                    </div>
                    <div>
                        <Button className=" flex justify-center gap-1">
                            <AiOutlineFacebook className="mt-1" />
                            Log in with Facebook
                        </Button>
                    </div>
                    <div className="mt-6 flex items-center">
                        <span className="border border-gray-200 h-1/3 flex-grow"></span>
                        <span className="mx-6 text-sm">OR</span>
                        <span className="border border-gray-200 h-1/3 flex-grow"></span>
                    </div>
                    <form onSubmit={handleSubmit}>

                        <div className="m-2">
                            <InputBox placeholder="Mobile Number or Email" />
                        </div>
                        <div className="m-2">
                            <InputBox placeholder="Full Name" />
                        </div>
                        <div className="m-2">
                            <InputBox placeholder="User Name" />
                        </div>
                        <div className="m-2">
                            <InputBox autoComplete="false" type="password" placeholder="Password" />
                        </div>
                        <div className="text-[12px] flex justify-center text-gray-400">
                            <span>
                                People who use our service may have uploaded your contact
                                information to Instagram.{" "}
                                <span className=" cursor-pointer text-blue-400">
                                    Learn More
                                </span>
                            </span>
                        </div>
                        <div className="text-[12px] flex justify-center text-gray-400 mt-3">
                            <span>
                                By signing up, you agree to our Terms ,
                                <span className=" cursor-pointer text-blue-400">
                                    {" "}
                                    Privacy Policy
                                </span>{" "}
                                and{" "}
                                <span className=" cursor-pointer text-blue-400">
                                    Cookies Policy .
                                </span>
                            </span>
                        </div>
                        <div className="mt-2">
                            <Button type="submit" className=" !bg-blue-400">Sign up</Button>
                        </div>
                    </form>
                </div>
                <div className="border-[#cfc8c8] border mt-[20px] p-5 flex justify-center text-center">
                    <span>
                        Have an account?
                        <Link to={authRoutes.signIn.path} className="text-blue-500">
                            {" "}
                            Log in
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default memo(StepOne)