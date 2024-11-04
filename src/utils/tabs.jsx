import { useState, useRef } from "react";
import { motion } from "framer-motion";

import { cn } from "./utils";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Projects from "../components/Projects";

export const Tabs = ({ tabs: propTabs }) => {
  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);
  const [hovering, setHovering] = useState(false);

  const buttonRefs = useRef([]);

  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  return (<>
    <div
      className="bg-[#ffffff30] flex flex-row items-center justify-center relative text-dynamic w-fit mx-auto rounded-full border-[1px] border-[#777] backdrop-blur-2xl"
      style={{ padding: "8px min(4vw, 10px)" }}>
      {propTabs.map((tab, idx) => (
        <button
          key={tab.title}
          ref={(el) => (buttonRefs.current[idx] = el)}
          onClick={() => {
            moveSelectedTabToTop(idx);
          }}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          className="relative rounded-full"
          style={{
            transformStyle: "preserve-3d",
            padding: "min(2vw, 8px) min(3vw, 16px)"
          }}>
          {active.value === tab.value && (
            <motion.div
              layoutId="clickedbutton"
              transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
              className="absolute inset-0 rounded-full dark:bg-[#0096c7]"/>
          )}

          <span className="relative block text-black dark:text-white">
            {tab.title}
          </span>
        </button>
      ))}
    </div>

    <FadeInDiv
      tabs={tabs}
      active={active}
      key={active.value}
      hovering={hovering}
      className="mt-[3rem]"
      buttonRefs={buttonRefs}
    />
  </>);
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
  buttonRefs
}) => {
  function getTabComponent(tab) {
    switch (tab) {
      case 'home': return <Home buttonRefs={buttonRefs} />
      case 'projects': return <Projects />
      case 'achievements': return <Achievements />
      case 'contact': return <Contact />
    }
  }

  const isActive = (tab) => {
    return tab.value === tabs[0].value;
  };

  return (
    (<div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -10 : 0,
            zIndex: -idx,
            opacity: idx < 4 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}>

          {isActive(tab) ?
            <>
              <div className="tab bg-[#030712] relative rounded-[10px] p-[10px] border-[1px] border-[#32363f] overflow-x-hidden" >
                {
                  getTabComponent(tab.value)
                }
              </div>
            </>
            :
            <div className="bg-[#32363f] h-[100px] rounded-[10px] border-[1px] border-[#666]"></div>
          }
        </motion.div>
      ))}
    </div>)
  );
};