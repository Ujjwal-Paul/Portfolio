import {motion} from "framer-motion";

export default function Achievements() {
    function applyAnimation(delay = 0) {
        return {
            initial: { y: 30, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { duration: 0.3, delay },
        }
    }

    return (
        <div>
            <motion.h1
                {...applyAnimation(0.6)}
                className="font-[Calistoga] font-[400] text-white leading-none text-left bg-[none] sm:mt-[10px] mb-7"
                style={{ fontSize: "min(11vw, 48px)" }} >
                my achievements.
            </motion.h1>
            

        </div>
    )
}