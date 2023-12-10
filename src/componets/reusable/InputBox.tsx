import cn from "classnames";
import { memo, InputHTMLAttributes, useState, forwardRef } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
interface InputBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  rightIcon?: any;
  leftIcon?: any;
  label?: string;
  id?: string;
  ref?: any
}
const defaultInputClass =
  "w-full border rounded-md relative disabled:bg-slate-100 p-2";
const defaulEyesClass = " absolute top-3 right-3 cursor-pointer";

const InputBox: React.FC<InputBoxProps> = memo(forwardRef(
  ({ className, type = "text", label, rightIcon, id, leftIcon, ...props },ref) => {
    const [show, setShow] = useState<boolean>(false);

    return (
      <div className="w-full relative">
        <label htmlFor={id} >{label}</label>
        {type === "password" ? (
          <input
            ref={ref}
            className={cn(defaultInputClass, className)}
            type={show ? "text" : type}
            {...props}
          />
        ) : (
          <input
            ref={ref}
            className={cn(defaultInputClass, className)}
            type={type}
            {...props}
          />
        )}

        {type === "password" ? (
          !show ? (
            <FaRegEye
              onClick={() => setShow(true)}
              className={defaulEyesClass}
            />
          ) : (
            <FaRegEyeSlash
              onClick={() => setShow(false)}
              className={defaulEyesClass}
            />
          )
        ) : (
          ""
        )}
      </div>
    );
  }
))

export default InputBox;
