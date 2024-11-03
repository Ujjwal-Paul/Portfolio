import { motion } from "framer-motion";

import { projects } from "../assets/info";
import Project from "./Project";
import Footer from "./Footer";

export default function Projects() {
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
                className="font-[Calistoga] font-[400] text-white leading-none text-left sm:mt-[10px] mb-7"
                style={{ fontSize: "min(11vw, 48px)" }} >
                my projects.
            </motion.h1>

            <div
                className="flex flex-col sm:flex-row flex-wrap justify-between" >
                {projects.map((proj, ind) => <Project key={proj.id} element={proj} isInView={true} delayTime={0.8 + (ind * 0.2)} />)}
            </div>

            <Footer />

        </div>
    );
}