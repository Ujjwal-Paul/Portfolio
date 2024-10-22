import { useEffect, useState } from "react";
import { TabsDemo } from "./components/TabsDemo";


export default function App() {
  const [currentTab, setCurrentTab] = useState(null);
  const [tabHeight, setTabHeight] = useState(0);

  useEffect(() => {
    if (currentTab) {
      const tab = currentTab.querySelector('.tab');
      setTabHeight(tab.offsetHeight);
    }
  }, [currentTab, setTabHeight])

  return (
    <div className="bg-[none] w-[95vw] max-w-[700px] m-auto relative">

      <TabsDemo setCurrentTab={setCurrentTab} />



      {/* footer part */}
      <div
        className="mb-[50px]"
        style={{ marginTop: `${tabHeight + 100}px` }} >

        <p className="text-[#777] text-center">© 2025 Ujjwal Paul | This is footer</p>


      </div>

    </div>
  )
}