import React, { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";

import seatPositionContext from "../../context/seatPosition/seatPositionContext";
import playerBgImg from "../../assets/game/play/player_bg.png";
import selfPlayerBgImg from "../../assets/game/play/self_player_bg.png";
import photoShadowImg from "../../assets/game/play/photo_shadow.png";
import emptySeatImg from "../../assets/game/play/empty_seat.png";
import maleAnonImg from "../../assets/settings/man_silhouette.png";

const EmptySeatContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 64px;
  height: 64px;
  border: none;
  border-style: none;
  z-index: 1;
  position: relative;
  transition: all 0.1s;
  cursor: default;

  p {
    margin-bottom: 0;
  }

  ${(props) =>
    props.player_seat !== "1" &&
    css`
      background-image: url(${playerBgImg});
    `}

  ${(props) =>
    !!props.player_seat &&
    props.player_seat === "1" &&
    css`
      background-image: url(${selfPlayerBgImg});
    `}
`;

const PersonShadow = styled.div`
  position: absolute;
  background-image: url(${photoShadowImg});
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border: none;
  border-style: none;
  width: 105px;
  height: 110px;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: calc(50% - 70px);
  left: calc(50% - 55px);
  cursor: default;
`;

const AvapicImage = styled.img`
  position: absolute;
  background-color: transparent;
  background-repeat: no-repeat;
  width: ${(props) => props.width_value}px;
  height: ${(props) => props.height_value}px;
  top: ${(props) => props.top_value}px;
  left: ${(props) => props.left_value}px;

  ${(props) =>
    props.seated === "1" &&
    css`
      cursor: none;
    `}

  cursor: pointer;
`;

const EmptySeat = ({
  avatarImage,
  back_cards_display_flag,
  clickCallback,
  seated,
  self_seat,
  player_seat,
  seatIndex,
  maxPlayers,
}) => {
  const { getAvatarSize, getAvatarPosition } =
    useContext(seatPositionContext);
  const [avatarSize, setAvatarSize] = useState([0, 0]);
  const [marginPair, setMarginPair] = useState([0, 0]);  

  useEffect(() => {
    const updateSize = () => {
      console.log("set table size");
      let tableSizeIndex = 1;
      if (
        window.matchMedia("(min-width: 1680px) and (max-width: 2048px)").matches
      ) {
        tableSizeIndex = 5;
      } else if (
        window.matchMedia("(min-width: 1440px) and (max-width: 1680px)").matches
      ) {
        tableSizeIndex = 4;
      } else if (
        window.matchMedia("(min-width: 1280px) and (max-width: 1440px)").matches
      ) {
        tableSizeIndex = 3;
      } else if (
        window.matchMedia("(min-width: 1024px) and (max-width: 1280px)").matches
      ) {
        tableSizeIndex = 2;
      } else {
        tableSizeIndex = 1;
      }

      try {
        const avatarMarginPair = getAvatarPosition(
          maxPlayers,
          seatIndex,
          tableSizeIndex
        );
        
        setMarginPair(avatarMarginPair);
        setAvatarSize(getAvatarSize(tableSizeIndex));
      } catch (error) {
        console.log("Failed to set Margin for each seat. error:", error);
      }
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <>
      <AvapicImage
        src={
          player_seat
            ? !!avatarImage && avatarImage !== ""
              ? `data:image/png;base64,${avatarImage}`
              : maleAnonImg
            : emptySeatImg
        }
        width_value={avatarSize ? avatarSize[0] : 0}
        height_value={avatarSize ? avatarSize[1] : 0}
        left_value={marginPair ? marginPair[0] : 0}
        top_value={marginPair ? marginPair[1] : 0}
        onClick={clickCallback}
        seated={seated}
      />      
    </>
  );
};

export default EmptySeat;
