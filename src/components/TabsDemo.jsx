import { Tabs } from "../utils/tabs";

export function TabsDemo() {
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
        (<div className="relative mt-5 ">
            <Tabs tabs={tabs} />
        </div>)
    );
}