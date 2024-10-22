import { motion } from "framer-motion";

import { TbFileDownload } from "react-icons/tb";
import { LuLinkedin } from "react-icons/lu";
import { SiLeetcode } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdEmail } from "react-icons/md";


import { FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

import { herosection } from "../assets/info";


export default function Home() {
    function applyAnimation(delay = 0) {
        return {
            initial: { x: 50, opacity: 0 },
            animate: { x: 0, opacity: 1 },
            transition: { duration: 0.2, delay },
        }
    }

    return (
        <div>
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

                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.7 }}

                        className="mt-3 text-[#ddd]"
                        style={{ fontSize: "min(5vw, 1rem)" }}>
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

                        <div className="flex flex-1 bg-[none] text-[24px] mb-4">
                            <motion.a
                                {...applyAnimation(1)}
                                href={herosection.social.linkedin} target="_blank"
                                className="flex items-center mr-[16px]" >
                                <LuLinkedin className="hover:text-white" />
                            </motion.a>
                            <motion.a
                                {...applyAnimation(1.1)}
                                href={herosection.social.leetcode} target="_blank"
                                className="flex items-center mr-[16px]" >
                                <SiLeetcode className="hover:text-white" />
                            </motion.a>
                            <motion.a
                                {...applyAnimation(1.2)}
                                href={herosection.social.github} target="_blank"
                                className="flex items-center mr-[16px]" >
                                <FiGithub className="hover:text-white" />
                            </motion.a>
                            <motion.a
                                {...applyAnimation(1.3)}
                                href={herosection.social.email} target="_blank"
                                className="flex items-center mr-[16px] " >
                                <MdOutlineMail className="hover:text-white" />
                            </motion.a>
                            <motion.a
                                {...applyAnimation(1.4)}
                                href={herosection.social.youtube} target="_blank"
                                className="flex items-center mr-[16px]" >
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


            




        </div >
    )
}

