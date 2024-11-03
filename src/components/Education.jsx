import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { educations } from "../assets/info";

export default function Education() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref}>
            <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="font-[Calistoga] font-[400] text-white leading-none text-left my-7 flex justify-between"
                style={{ fontSize: "min(8vw, 36px)" }} >
                my education
            </motion.h1>

            <div>
                {educations.map((el, ind) => <Details key={el.id} element={el} isInView={isInView} delay={0.5 + ind * 0.2} />)}
            </div>
        </div>
    );
}

function Details({ element, isInView, delay }) {
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.3, delay }}
            className="pb-7 last:pb-0 pl-[50px] ml-[25px] border-l-[1px] border-l-[#888]">
            <div className="h-[50px] w-[50px] rounded-[50%] absolute left-[-25px]" style={{ background: `url('${element.logo}') center/cover no-repeat` }}></div>
            <p className="text-white font-[600]">{element.institution}</p>
            <p>{element.degree}</p>
            <p>{element.location}</p>
            <p>{element.start_date} - {element.end_date}</p>
        </motion.div>
    );
}