import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { skills } from "../assets/info";

function applyAnimation(isInView, delay = 0) {
    return {
        initial: { y: 50, opacity: 0 },
        animate: isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 },
        transition: { duration: 0.3, delay }
    }
}

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref}>
            <motion.h1
                {...applyAnimation(isInView, 0.3)}
                className="font-[Calistoga] font-[400] text-white leading-none text-left my-7 flex justify-between"
                style={{ fontSize: "min(8vw, 36px)" }} >
                my skills
            </motion.h1>

            <div className="flex flex-wrap" >
                {skills.map((el, ind) => <Skill key={el.id} image={el.image} name={el.name} isInView={isInView} delay={0.5 + ind * 0.2} />)}
            </div>
        </div>
    );
}

function Skill({ image, name, delay, isInView }) {
    return (
        <motion.div
            {...applyAnimation(isInView, delay)}
            className="mr-4 mb-4 flex flex-col justify-center items-center py-5 rounded-md w-[39vw] max-w-[170px] sm:w-[150px] border-[1px] border-[#32363f]">
            <img src={image} className="h-[25vw] max-h-[100px] mb-2"></img>
            <p>{name}</p>
        </motion.div>
    );
}