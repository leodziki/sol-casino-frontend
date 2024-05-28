import React from "react";
import styled from "styled-components";

import ColoredText from "components/Typography/ColoredText";
import "components/buttons/RadiusButton/styles.css";

export const RadiusIcon = styled.div<{
  bgImageURI: string;  
}>`
  background-image: url(${({ bgImageURI }) => bgImageURI});
  background-size: 100% 100%;
  height: 0.61vw;  
  margin-right: 0.51vw;
  width: 0.61vw;
`;

interface RadiusButtonProps {
  bgStyle?: string;
  handlerClick?: () => void;
  height: number;
  icon?: string;
  label: string;  
  radius?: number;
  setBorder: boolean;
  width: number;  
}

const RadiusButton: React.FC<RadiusButtonProps> = ({
  bgStyle,
  handlerClick,
  height,
  icon,
  label,
  radius,
  setBorder,
  width,  
}) => {
  return (
    <div
      className={`table-button ${setBorder ? "border table-border-button" : ""} ${bgStyle ? "bg-" + bgStyle: ""}`}
      onClick={handlerClick}
      style={{ width: `${width}vw`, height: `${height}vw`, borderRadius: `${radius ? radius : 1}vw` }}
    >
      {icon && (
        <RadiusIcon bgImageURI={icon} />
      )}
      <ColoredText
        text_attr_kinds="other_color"
        className="text-c-12"
      >
        {label}
      </ColoredText>
    </div>
  );
};

export default RadiusButton;
