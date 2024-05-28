import React, { useContext, useState } from "react";

import { SelectedMenuContext } from "context/SelectedMenuContext";

import "components/SimpleTab/styles.css";

interface SimpleTabProps {
  tabs: Array<{
    key: Number;
    label: string;
  }>;
}

const SimpleTab: React.FC<SimpleTabProps> = ({ tabs }) => {
  const { setSelectedMenuKey } = useContext(SelectedMenuContext);
  const [activeTab, setActiveTab] = useState("");

  const onSetActiveTabHandler = (key: Number, label: string) => {
    setActiveTab(label);
    setSelectedMenuKey(key.toString());
  };

  return (
    <div className="tab-component mt-1.5">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`tab-item text-c-16 mr-sp-48 ${activeTab === tab.label ? "active" : ""}`}
          onClick={() => {
            onSetActiveTabHandler(tab.key, tab.label);
          }}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
};

export default SimpleTab;
