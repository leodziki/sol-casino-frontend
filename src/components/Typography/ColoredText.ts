import styled, { css } from "styled-components";
import PropTypes from "prop-types";

type ColoredTextProps = {
  emphazised?: string;
  text_attr_kinds?: string;
  fonttype?: string;
  margin_left?: string;
  semi_transparent?: string;
  backgroundType?: number;
};

const ColoredText = styled.div<ColoredTextProps>`  
  color: ${(props) => {
    if (props.text_attr_kinds === 'other_color') {
      return "#FFFFFFFF";
    } else {
      if (props.text_attr_kinds === 'secondary') {
        return "#636F89";
      } else {
        return "#555555FF";
      }
    }
  }};
  font-weight: ${(props) => (props.emphazised === 'bold' ? "bold" : "normal")};
  font-family: 'Instagram Sans', sans-serif;
  margin-left: ${(props) => (props.margin_left ? props.margin_left : 0)};
  margin-top: 0;
  padding: 0;

  ${(props) =>
    props.backgroundType == 1 &&
    css`
    background-color: rgb(32, 197, 14);
    border-radius: 0.8vw;
    width: 4vw;
    `}
  
  ${(props) =>
    props.fonttype === "XTiny" &&
    css`
      font-size: 0.57vw;
    `}

  ${(props) =>
    props.fonttype === "XextraTiny" &&
    css`
      font-size: 0.7vw;
    `}

  ${(props) =>
    props.fonttype === "semiExtraTiny" &&
    css`
      font-size: 0.79vw;
    `}

  ${(props) =>
    props.fonttype === "extraTiny" &&
    css`
      font-size: 0.88vw;
    `}

  ${(props) =>
    props.fonttype === "tinytiny" &&
    css`
      font-size: 1.09vw;
    `}

  ${(props) =>
    props.fonttype === "tiny" &&
    css`
      font-size: 1.2vw;
    `}
  
  ${(props) =>
    props.fonttype === "semiXSmallTiny" &&
    css`
      font-size: 1.3vw;
    `}

  ${(props) =>
    props.fonttype === "semiSmallTiny" &&
    css`
      font-size: 1.4vw;
    `}

  ${(props) =>
    props.fonttype === "semiMidTiny" &&
    css`
      font-size: 1.7vw;
    `}

  ${(props) =>
    props.fonttype === "semiTiny" &&
    css`
      font-size: 1.9vw;
    `}

  ${(props) =>
    props.fonttype === "small" &&
    css`
      font-size: 2.03vw;
    `}

  ${(props) =>
    props.fonttype === "medium" &&
    css`
      font-size: 2.5vw;
    `}

  ${(props) =>
    props.semi_transparent==='1' &&
    css`
      opacity: 0.7;
    `}  
`;

ColoredText.propTypes = {
  emphazised: PropTypes.string,
  text_attr_kinds: PropTypes.string,  
  fonttype: PropTypes.string,
  margin_left: PropTypes.string,
};

export default ColoredText;
