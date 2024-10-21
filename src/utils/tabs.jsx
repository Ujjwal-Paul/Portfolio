import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "./utils";

export const Tabs = ({ tabs: propTabs, setCurrentTab }) => {
  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);

  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (<>
    <div
      className="bg-[#ffffff30] flex flex-row items-center justify-center relative text-dynamic w-fit mx-auto rounded-full border-[1px] border-[#777] backdrop-blur-2xl"

      style={{
        padding: "8px min(4vw, 10px)",
      }}
    >
      {propTabs.map((tab, idx) => (
        <button
          key={tab.title}
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
              className="absolute inset-0 rounded-full dark:bg-[#0096c7]" />
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
      setCurrentTab={setCurrentTab}
    />
  </>);
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
  setCurrentTab
}) => {
  const activeTab = useRef(null);


  const isActive = (tab) => {
    return tab.value === tabs[0].value;
  };

  useEffect(() => {
    if (activeTab.current) {
      setCurrentTab(activeTab.current);
    }
  }, [activeTab, setCurrentTab])

  return (
    (<div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          ref={isActive(tab) ? activeTab : null}
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
            tab.content :
            <div className="bg-[#32363f] h-[100px] rounded-[10px] border-[1px] border-[#666]"></div>
          }

        </motion.div>
      ))}
    </div>)
  );
};
