import React, { useContext } from "react";

import ColoredText from "components/Typography/ColoredText";
import "pages/RulesBoard/styles.css";

export const RulesBoard: React.FC = () => {
  return (
    <div className="flex row" id="rules-container">
      <div className="flex flex-col justify-start text-left mr-sp-32">
        <div>
          <ColoredText
            text_attr_kinds="other_color"
            className="text-c-56"
          >
            Poker Playing Rules
          </ColoredText>
        </div>
        <div id='rules-rule' className="h-sp-1089 w-sp-744" />
      </div>
      <div className="flex flex-col text-right">
        <div>
          <ColoredText
            text_attr_kinds="other_color"
            className="font-instagram text-c-56"
          >
            Game UI Guide
          </ColoredText>
        </div>
        <div id='rules-guide' className="h-sp-1089 w-sp-744" />
      </div>
    </div>
  );
};
