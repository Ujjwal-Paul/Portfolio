import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LuLinkedin } from "react-icons/lu";
import { SiLeetcode } from "react-icons/si";
import { FiYoutube } from "react-icons/fi";

import { herosection } from "../assets/info";

export default function Footer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ y: 10, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
            transition={{ transition: 0.3, delay: 0.3 }}
            className="mt-20 mb-2 flex flex-col sm:flex-row items-center justify-between">
            <SocialLinks type="sm:hidden mb-5" />
            <p className="sm:ml-5 text-sm">© {new Date().getFullYear()} by Ujjwal Paul</p>
            <SocialLinks type="hidden sm:flex" />
        </motion.div >
    );
}

function SocialLinks({ type }) {
    return (
        <div className={`flex text-xl ${type}`}>
            <motion.a
                href={herosection.social.linkedin} target="_blank"
                className="flex items-center mr-5" >
                <LuLinkedin className="hover:text-white" />
            </motion.a>
            <motion.a
                href={herosection.social.leetcode} target="_blank"
                className="flex items-center mr-5" >
                <SiLeetcode className="hover:text-white" />
            </motion.a>
            <motion.a
                href={herosection.social.youtube} target="_blank"
                className="flex items-center sm:mr-5" >
                <FiYoutube className="hover:text-white" />
            </motion.a>
        </div>
    );
}