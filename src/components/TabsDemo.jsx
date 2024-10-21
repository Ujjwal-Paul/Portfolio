import { Tabs } from "../utils/tabs";
import Achievements from "./Achievements";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";

export function TabsDemo({ setCurrentTab }) {
    const tabs = [
        {
            title: "Home",
            value: "home",
            content: (
                <div className="tab bg-[#030712] relative rounded-[10px] pt-[20px]     border-[1px] border-[#32363f]" >
                    <Home />
                </div>
            ),
        },
        {
            title: "Projects",
            value: "projects",
            content: (
                <div className="tab bg-[#030712] relative rounded-[10px] pt-[20px]     border-[1px] border-[#32363f]" >
                    <Projects />
                </div>
            ),
        },
        {
            title: "Achievements",
            value: "achievements",
            content: (
                <div className="tab bg-[#030712] relative rounded-[10px] pt-[20px]     border-[1px] border-[#32363f]" >
                    <Achievements />
                </div>
            ),
        },
        {
            title: "Contact",
            value: "contact",
            content: (
                <div className="tab bg-[#030712] relative rounded-[10px] pt-[20px]     border-[1px] border-[#32363f]" >
                    <Contact />
                </div>
            ),
        },
    ];

    return (
        (<div className="bg-[none] relative mt-5 ">
            <Tabs tabs={tabs} setCurrentTab={setCurrentTab} />
        </div>)
    );
}