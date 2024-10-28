import { motion } from "framer-motion";

import { TbFileDownload } from "react-icons/tb";
import { LuLinkedin } from "react-icons/lu";
import { SiLeetcode } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

import { achievements, herosection, projects } from "../assets/info";
import Project from "./Project";
import Achievement from "./Achievement";


export default function Home({ buttonRefs }) {
    function applyAnimation(delay = 0) {
        return {
            initial: { x: 50, opacity: 0 },
            animate: { x: 0, opacity: 1 },
            transition: { duration: 0.2, delay },
        }
    }

    function applyAnimationUpside(delay = 0) {
        return {
            initial: { y: 50, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { duration: 0.3, delay },
        }
    }

    return (
        <div>
            {/* Hero Section */}
            <div className="flex justify-between">
                <div className="md:w-[450px]">
                    <motion.img
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.6 }}

                        src={herosection.profile_pic}
                        className="md:hidden block rounded-lg mb-7"
                        style={{ height: "min(90vw, 200px)" }}>
                    </motion.img>

                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}

                        className="font-[Calistoga] font-[400] text-white leading-none text-left bg-[none] sm:mt-[10px]"
                        style={{ fontSize: "min(11vw, 48px)" }} >
                        hi Ujjwal here
                        <motion.span
                            initial={{ rotate: 0 }}
                            animate={{ rotate: [0, -25, 20, -15, 10, 0] }}
                            transition={{ duration: 1, delay: 2 }}
                            style={{ display: "inline-block", transformOrigin: "bottom" }}
                        >
                            👋
                        </motion.span>
                    </motion.h2>

                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.7 }}

                        className="mt-3 text-[#ddd]"
                        style={{ fontSize: "min(5vw, 1rem)" }}>
                        {"I'm " + herosection.name + " from " + herosection.location + "."}
                        <br></br>

                        {herosection.sm_about}
                    </motion.p>

                    <div className="mt-6 flex flex-wrap">
                        <motion.a
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 1 }}

                            href={herosection.resume}
                            target="_blank"
                            className="flex items-center text-white border-[1px] border-[#32363f] py-1 px-4 rounded-md mr-7 mb-4">
                            Resume
                            <TbFileDownload className="inline-block ml-3 scale-150" />
                        </motion.a>

                        <div className="flex flex-1 max-w-[225px] justify-between text-[24px] mb-4">
                            <motion.a
                                {...applyAnimation(1)}
                                href={herosection.social.linkedin} target="_blank"
                                className="flex items-center mr-[9px]" >
                                <LuLinkedin className="hover:text-white" />
                            </motion.a>
                            <motion.a
                                {...applyAnimation(1.1)}
                                href={herosection.social.leetcode} target="_blank"
                                className="flex items-center mr-[9px]" >
                                <SiLeetcode className="hover:text-white" />
                            </motion.a>
                            <motion.a
                                {...applyAnimation(1.2)}
                                href={herosection.social.github} target="_blank"
                                className="flex items-center mr-[9px]" >
                                <FiGithub className="hover:text-white" />
                            </motion.a>
                            <motion.a
                                {...applyAnimation(1.3)}
                                href={herosection.social.email} target="_blank"
                                className="flex items-center mr-[9px] " >
                                <MdOutlineMail className="hover:text-white" />
                            </motion.a>
                            <motion.a
                                {...applyAnimation(1.4)}
                                href={herosection.social.youtube} target="_blank"
                                className="flex items-center mr-[9px]" >
                                <FiYoutube className="hover:text-white" />
                            </motion.a>
                            <motion.a
                                {...applyAnimation(1.5)}
                                href={herosection.social.instagram} target="_blank"
                                className="flex items-center" >
                                <FaInstagram className="hover:text-white" />
                            </motion.a>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 }}

                    className="hidden md:block content-center">
                    <img
                        className="rounded-lg"
                        src={herosection.profile_pic}
                        style={{ height: "min(90vw, 200px)" }}
                    />
                </motion.div>
            </div>

            {/* Projects Section */}
            <motion.h1
                {...applyAnimationUpside(1.2)}
                className="font-[Calistoga] font-[400] text-white leading-none text-left my-7 flex justify-between"
                style={{ fontSize: "min(8vw, 36px)" }} >
                featured projects

                <button
                    className="font-sans font-[100] ml-5 text-[#aaa] flex items-center hover:text-white bg-[none]"
                    style={{ fontSize: "min(5vw, 16px)" }}
                    onClick={() => buttonRefs.current[1].click()} >
                    View more
                    <FaArrowRight className="ml-2 mt-[2px]" />
                </button>
            </motion.h1>

            <div
                className="flex flex-col sm:flex-row flex-wrap justify-between" >
                {projects.slice(0, 2).map((proj, ind) => <Project key={proj.id} element={proj} delayTime={1.4 + (ind * 0.3)} />)}
            </div>

            {/* Achievement Section */}
            <motion.h1
                {...applyAnimationUpside(1.9)}
                className="font-[Calistoga] font-[400] text-white leading-none text-left my-7 flex justify-between"
                style={{ fontSize: "min(8vw, 36px)" }} >
                featured achievements

                <button
                    className="font-sans font-[100] ml-5 text-[#aaa] flex items-center hover:text-white bg-[none]"
                    style={{ fontSize: "min(5vw, 16px)" }}
                    onClick={() => buttonRefs.current[2].click()} >
                    View more
                    <FaArrowRight className="ml-2 mt-[2px]" />
                </button>
            </motion.h1>

            <div
                className="flex flex-col sm:flex-row flex-wrap justify-between" >
                {achievements.slice(0, 2).map((el, ind) => <Achievement key={el.id} element={el} delayTime={1.9 + (ind * 0.3)} />)}
            </div>


            {/* Education Section */}
            <div className="bg-[#32363f] mt-10 text-[#ddd]">
                Education
            </div>




        </div >
    )
}

