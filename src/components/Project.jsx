import { motion } from "framer-motion";

import { FiGithub } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";


export default function Project({ element, delayTime }) {
    function applyAnimation(delay = 0) {
        return {
            initial: { y: 40, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { duration: 0.3, delay },
        }
    }

    return (
        <motion.div
            {...applyAnimation(delayTime)}
            className={`p-5 border-[1px] border-[#32363f] rounded-xl flex-1 sm:flex-none sm:w-[49%] mb-4 flex flex-col`} >
            <a href={element.live_link} target="_blank">
                <img
                    src={element.screenshots[0]}
                    className="rounded-sm mb-5 mt-2"
                ></img>
            </a>

            <h2
                className="text-[#eee] font-[600]" >
                {element.name}
            </h2>

            <p>{element.description}</p>

            <div
                className="bg-[none] flex flex-wrap mt-6 mb-4">
                {element.technologies.map((el, ind) => <Technology key={ind} name={el} />)}
            </div>

            <div
                className="bg-[none] mt-auto flex flex-wrap">
                <Links link={element.github_link} text={"View Code"}>
                    <FiGithub className="mr-[6px]" />
                </Links>
                <Links link={element.live_link} text={"Website"}>
                    <BsGlobe2 className="mr-[6px]" />
                </Links>
            </div>
        </motion.div>
    )
}

function Technology({ name }) {
    return (
        <div
            className="bg-[#1A2230] rounded-md py-px px-2 text-[11px] text-white font-[600] mr-1 mb-1">
            {name}
        </div>
    )
}

function Links({ link, text, children }) {
    return (
        <a
            href={link}
            target="_blank"
            className="bg-white rounded-md mr-[6px] mb-[6px] py-1 px-2 text-[#030712] text-[13px] flex items-center">
            {children}
            {text}
        </a>
    )
}