import { motion } from "framer-motion";

import { FiExternalLink } from "react-icons/fi";


export default function Achievement({ element, delayTime }) {
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
            <a href={element.link} target="_blank">
                <img
                    src={element.screenshots[0]}
                    className="rounded-sm mb-2 mt-2"
                ></img>
            </a>

            <h2
                className="text-[#eee] font-[600]"
                style={{ fontSize: "min(6.5vw, 24px)" }} >
                {element.title}
            </h2>

            <div className="text-[#bbb] italic">
                Category:
                <p className="inline-block ml-2 font-[500] text-[#eee] not-italic">{element.category}</p>
            </div>

            {
                element.date &&
                <div className="text-[#bbb] italic">
                    Date:
                    <p className="inline-block ml-2">{element.date}</p>
                </div>
            }

            <p className="mt-1 mb-4">{element.description}</p>

            {element.keywords &&
                <div
                    className="flex flex-wrap mb-4">
                    {element.keywords.map((el, ind) => <Keywords key={ind} name={el} />)}
                </div>
            }

            <div
                className="mt-auto flex flex-wrap">
                <Links link={element.link} text={"View Achievement"}>
                    <FiExternalLink className="ml-[6px]" />
                </Links>
            </div>
        </motion.div>
    )
}

function Keywords({ name }) {
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
            {text}
            {children}
        </a>
    )
}