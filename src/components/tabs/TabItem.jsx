const TabItem = ({ id, title, activeTab, setActiveTab }) => {
  const toggleTab = () => {
    setActiveTab(id);
  };

  const active = activeTab === id ? "current" : "";
  return (
    <li className={`tab-link octf-btn ${active}`} onClick={toggleTab}>
      {title}
    </li>
  );
};

export default TabItem;
