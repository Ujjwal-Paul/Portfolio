import { motion } from "framer-motion";


export default function Home() {
    return (
        <div>
            <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}

                className="font-[Calistoga] font-[400] text-white leading-none text-center sm:text-left"
                style={{ fontSize: "min(11vw, 48px)" }} >
                hi ujjwal here
                <motion.span
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [0, -25, 20, -15, 10, 0] }}
                    transition={{ duration: 1, delay: 1.3 }}
                    style={{ display: "inline-block", transformOrigin: "bottom" }}
                >
                    👋
                </motion.span>
            </motion.h2>


        </div >
    )
}