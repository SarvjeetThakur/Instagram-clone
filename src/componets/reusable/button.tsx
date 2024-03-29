import { ButtonHTMLAttributes, memo } from 'react'
import cn from 'classnames'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    loading?: boolean;
    children: any
}

const defaultClass='w-full px-2 py-2 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-blue-300'
const Button = ({ className, children,loading, ...props }: ButtonProps) => {
    return (
        <button className={cn(defaultClass,className )}  {...props}>
            {children}
        </button>
    )
}

export default memo(Button)