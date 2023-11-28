import {
  InteroperableFirst,
  InteroperableSecond,
} from "./interoperable-content";

const TabContent = ({ id, activeTab }) => {
  return activeTab === id ? (
    <div className="tab-content outlet">
      {activeTab === "tab-1518" ? (
        <InteroperableFirst />
      ) : (
        <InteroperableSecond />
      )}
    </div>
  ) : null;
};
export default TabContent;
