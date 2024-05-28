import React, { useContext } from 'react';
import styled from "styled-components";
import loseBgImg from "../../assets/game/play/lose_bg.png";
import Heading from "../Typography/Heading";
// import Button from "../buttons/Button";
// import gameContext from '../../context/game/gameContext';
// import modalContext from '../../context/modal/modalContext';
// import commonModalContext from '../../context/modal/commonModalContext';

const LoseBg = styled.div`
  background-image: url(${loseBgImg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  display: none;
  position: absolute;
  pointer-events: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 300;
  opacity: 0.9;
`;

const LoseElement = styled.div`
  top: calc(35%);
  right: calc(43%);
  position: absolute;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const LossHeading = styled(Heading)`
  margin: 0px 0px;
`;

// const ShopButton = styled(Button)`
//     bottom: calc(25%);
//     left: calc(40%);
//     position: absolute;
//     cursor: pointer;
//     z-index:301;
//     display: none;
// `;

// const LobbyButton = styled(Button)`
//   bottom: calc(25%);
//   right: calc(50%);
//   position: absolute;
//   cursor: pointer;
//   z-index: 301;
//   display: none;
// `;

const LoseOverlay = ({ history, currentTable, seatId }) => {
  // const { shopItemList } = useContext(gameContext);
  // const { openModal } = useContext(modalContext);
  // const { commonOpenModal } = useContext(commonModalContext);

  // const openShopModal = () =>
  //     openModal(
  //         () => (
  //            ''
  //         ),
  //         '',
  //         '',
  //         shopItemList,
  //         commonOpenModal,
  //     );

  
  // const { leaveTable } = useContext(gameContext);

  // const handleNavLobby = () => {
  //   leaveTable(currentTable._id, 1);
  // };

  return (
    <>
      <LoseBg id="loss-background-div">
        <LoseElement>
          <LossHeading
            as="h1"
            headingclass="h1"
            textcentered="1"
            textcolor="#FFFFFFFF"
          >
            YOU LOSS
          </LossHeading>
        </LoseElement>
      </LoseBg>
      {/* <ShopButton id="loss-shop-button" key={1000} onClick={openShopModal} shop /> */}
      {/* <LobbyButton
        id="loss-lobby-button"
        onClick={handleNavLobby}
        type="lobby"
      /> */}
    </>
  );
};

export default LoseOverlay;
