import { Link } from "react-router-dom"
import Button from "../../../../componets/reusable/button"
import { authRoutes } from "../../../../routes/routes"
import { SignUpStepPropsType } from "./StepOne"
import { signUpImage } from "../assets"
import { useState } from "react"
const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
const months = [
    { name: 'January', value: 1 },
    { name: 'February', value: 2 },
    { name: 'March', value: 3 },
    { name: 'April', value: 4 },
    { name: 'May', value: 5 },
    { name: 'June', value: 6 },
    { name: 'July', value: 7 },
    { name: 'August', value: 8 },
    { name: 'September', value: 9 },
    { name: 'October', value: 10 },
    { name: 'November', value: 11 },
    { name: 'December', value: 12 },
]

function StepTwo({ callBack }: SignUpStepPropsType) {
    const [dob, setDob] = useState({ day: currentDay, year: currentYear, month: currentMonth })
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value, id } = e.target;
        setDob((pre) => ({ ...pre, [id]: value }));
    }

    return (
        <div className="w-full flex flex-row m-4 justify-center items-center">
            <div className=" w-[348px] h-[417px] ">
                <div className=" border border-solid p-10 flex justify-center flex-col items-center">
                    <div className="w-[144px] h-[96px] p-2 flex justify-center items-center">
                        <img src={signUpImage.birthdayImage} alt="" />
                    </div>
                    <span className=" font-[500] p-1">
                        Add Your Birthday
                    </span>
                    <div className="text-sm font-[400]">
                        This won't be a part of your public profile.
                    </div>
                    <p className="text-sm text-blue-800 cursor-pointer font-[400] mb-[5px]">
                        Why do i need to provide my birthday?
                    </p>
                    <div className="flex gap-4 mb-[10px]">
                        <select value={dob.month} onChange={handleSelectChange} className="text-gray-500 shadow-[0_0_1px_gray] p-[5px] rounded-[5px]" name="" id="month">
                            {months.map(({ name, value }) => (
                                <option key={name + value} value={value}>{name}</option>
                            ))
                            }
                        </select>
                        <select value={dob.day} onChange={handleSelectChange} className="text-gray-500 shadow-[0_0_1px_gray] p-[5px] rounded-[5px]" name="" id="day">
                            {Array.from({ length: new Date(dob.year, dob.month, 0).getDate() }).map((_, index: number) => (
                                <option key={index + 1} value={index + 1}>{index + 1}</option>
                            ))
                                // currentMonthDays
                            }
                        </select>
                        <select value={dob.year} onChange={handleSelectChange} className="text-gray-500 shadow-[0_0_1px_gray] p-[5px] rounded-[5px]" name="" id="year">
                            {Array.from({ length: 110 }).map((_, index: number) => (
                                <option key={currentYear - index} value={currentYear - index}>{currentYear - index}</option>
                            ))

                            }

                        </select>
                    </div>
                    <div className="text-[12px] text-gray-400 mb-[20px]">
                        You need to enter the date you were born
                    </div>
                    <div className="text-[12px] text-gray-400 flex justify-center items-center text-center">
                        Use your own birthday, even if this account is for a business, a pet, or something else
                    </div>
                    <div className="w-full my-[15px]">
                        <Button disabled={currentYear - dob.year <5} onClick={() => callBack('next')} type="button" >Next</Button>
                    </div>
                    <div>
                        <span className="text-blue-400 cursor-pointer hover:text-black " onClick={() => callBack('back')}>Go Back</span>
                    </div>
                </div>
                <div className=" border-solid border mt-3 p-5 text-center">
                    <span>Have an account?{' '}
                        <Link className="text-blue-600 font-[30px]" to={authRoutes.signIn.path}>Log in</Link>
                    </span>
                </div>
            </div>
        </div>

    )
}

export default StepTwo