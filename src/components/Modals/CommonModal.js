import React from "react";
import { createPortal } from "react-dom";
import CloseButton from "../buttons/CloseButton";
import HeadingWithLogo from "../Typography/HeadingWithLogo";
import Heading from "../Typography/Heading";
import Button from "../buttons/Button";
import PropTypes from "prop-types";
import styled from "styled-components";
import Text from "../Typography/Text";

const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 105;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledModal = styled.div`
  position: relative;
  z-index: 105;
  max-width: 480px;
  min-width: 264px;
  width: "100%";
  text-align: center;
  background-color: ${(props) => props.theme.colors.lightestBg};
  border-radius: ${(props) => props.theme.other.stdBorderRadius};
  padding: 1.5rem;
  margin: 0 1rem;
  box-shadow: ${(props) => props.theme.other.cardDropShadow};
  opacity: 0;
  animation: fade-in 0.75s ease-out forwards;

  @media screen and (min-width: 1024px) {
    padding: 2rem;
    margin: 0;
    min-width: 400px;
    max-width: 600px;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }

  & > :first-child {
    margin-bottom: 0;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
`;

const CommonModal = ({
  children,
  headingText,
  btnText,
  waiting_modal,
  onClose,
  onBtnClicked,
}) => {
  return createPortal(
    <ModalWrapper
      id="wrapper"
      onClick={(e) => {
        if (e.target.id === "wrapper") {
          onClose();
        }
      }}
    >
      <StyledModal>
        <IconWrapper>
          <CloseButton clickHandler={onClose} />
        </IconWrapper>
        <ModalContent>
          {waiting_modal > 1 ? (
            waiting_modal === 2 ? (
              <Heading
                as="h3"
                headingclass="h3"
                textcentered='1'
                textcolor="#666666"
              >
                Wait a minute...
              </Heading>
            ) : (
              <Heading
                as="h3"
                headingclass="h3"
                textcentered='1'
                textcolor="#666666"
              >
                Uploading...
              </Heading>
            )
          ) : (
            <>
              <HeadingWithLogo textcentered='1' hideIconOnMobile={false}>
                {headingText}
              </HeadingWithLogo>
              {children ? children : <Text></Text>}
              <Button primary onClick={onClose}>
                {btnText}
              </Button>
            </>
          )}
        </ModalContent>
      </StyledModal>
    </ModalWrapper>,
    document.getElementById("modal")
  );
};

CommonModal.propTypes = {
  headingText: PropTypes.string,
  btnText: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onBtnClicked: PropTypes.func.isRequired,
};

CommonModal.defaultProps = {
  headingText: "CommonModal",
  btnText: "Call to Action",
};

const initialCommonModalData = {
  children: () => <Text></Text>,
  headingText: "CommonModal",
  btnText: "Button",
};

export default CommonModal;
export { initialCommonModalData };
