import { useState } from "react";
import TabItem from "./TabItem";
import {
  InteroperableFirst,
  InteroperableSecond,
} from "./interoperable-content";

const InteroperableMobileTabs = () => {
  const [activeTab, setActiveTab] = useState("tab-1518");
  return (
    <div className="ot-tabs">
      <ul className="tabs-heading unstyle">
        <TabItem
          title="Open Architecture"
          id="tab-1518"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabItem
          title="Mobile Payment Types"
          id="tab-2518"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>
      <div className="tab-content">
        {activeTab === "tab-1518" ? (
          <InteroperableFirst />
        ) : (
          <InteroperableSecond />
        )}
      </div>
      <p>
        <a className="btn-details" href="#">
          <i className="flaticon-right-arrow-1"></i> LEARN MORE
        </a>
      </p>
    </div>
  );
};

export default InteroperableMobileTabs;
