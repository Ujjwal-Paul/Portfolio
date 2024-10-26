import { Tabs } from "../utils/tabs";


export function TabsDemo({ setCurrentTab }) {
    const tabs = [
        {
            title: "Home",
            value: "home",
        },
        {
            title: "Projects",
            value: "projects",
        },
        {
            title: "Achievements",
            value: "achievements",
        },
        {
            title: "Contact",
            value: "contact",
        },
    ];

    return (
        (<div className="bg-[none] relative mt-5 ">
            <Tabs tabs={tabs} setCurrentTab={setCurrentTab} />
        </div>)
    );
}