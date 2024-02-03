import { ReactNode, memo } from 'react'
import { motion } from 'framer-motion'

type Props = { children: ReactNode }

export default memo(function Page({ children }: Props): JSX.Element {
    const pageVariants = {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            className='container px-[100px]'
            initial="initial"
            animate="animate"
            variants={pageVariants}
        >
            <div className="sm:ml-[140px]">
                <div className="p-4 rounded-lg dark:border-gray-700">
                    {children}

                </div>
            </div>
        </motion.div>
    )
})
