import React from "react";

interface IntroducePanelThemeProps {
  children: React.ReactNode;
}

const IntroducePanelTheme: React.FC<IntroducePanelThemeProps> = ({ children }) => {
    return (
        <div id="profile_container" className="p-sp-32 rounded-sp-24 h-sp-234 w-sp-496">
          <div id="avatar_container" className="h-sp-170 rounded-sp-24 mr-sp-32 w-sp-170" />
          <div id="profile_data_container">
            { children }
          </div>
        </div>
    );
}

export default IntroducePanelTheme;