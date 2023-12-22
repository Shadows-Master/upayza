import { useState } from "react";
import TabItem from "./TabItem";
import { CBMFirst, CBMSecond, CBMThird } from "./crossBorderMoney-contents";

const CrossBorderMoneyTabs = () => {
  const [activeTab, setActiveTab] = useState("tab-1518");
  return (
    <div className="ot-tabs">
      <ul className="tabs-heading unstyle">
        <TabItem
          title="Global remittances"
          id="tab-1518"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabItem
          title="Integration"
          id="tab-2518"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabItem
          title="Business Payouts"
          id="tab-3518"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>
      <div className="tab-content">
        {activeTab === "tab-1518" ? (
          <CBMFirst />
        ) : activeTab === "tab-2518" ? (
          <CBMSecond />
        ) : (
          <CBMThird />
        )}
      </div>
      {/*<p>
        <a className="btn-details" href="#">
          <i className="flaticon-right-arrow-1"></i> LEARN MORE
        </a>
      </p>*/}
    </div>
  );
};
export default CrossBorderMoneyTabs;
