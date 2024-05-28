import { useEffect, useState, useContext } from "react";

const useSeatPosition = () => {
  const degreeLists = {
    4: [190, 130, 50, 350],
    6: [90, 172, 219, 270, 322, 8],
  };

  const SeatPoisitonList = {
    //except the shadow 50, 40
    1: [6.53, 16.89],
    2: [26.13, 11.79],
    3: [45.73, 8.62],
    4: [65.33, 11.79],
    5: [84.93, 16.89],
  };

  const TableLeftMarginList = {
    1: 110,
    2: 130,
    3: 165,
    4: 190,
    5: 227,
  };

  const topSubMarginList = {
    1: 10,
    2: 20,
    3: 35,
    4: 40,
    5: 53,
  };

  const avatarSize = {
    1: [6.53, 6.53]
  };

  const balanceInnerMarginSize = {
    1: [36, 36],
    2: [43, 43],
    3: [45, 45],
    4: [57, 57],
    5: [70, 70],
  };

  const TableShadowSize = {
    1: [52, 52],
    2: [59, 59],
    3: [57, 57],
    4: [73, 73],
    5: [76, 84],
  };

  const TableTopNumberSize = {
    1: 6,
    2: 8,
    3: 12,
    4: 17,
    5: 23,
  };

  const getAvatarSize = () => {
    let vwInPixels = window.innerWidth / 98;
    
    return [avatarSize[0][0] * vwInPixels, avatarSize[0][1] * vwInPixels];
  };

  const getHandCardPosition = (maxPlayerCnt, seatIndex, tableSizeIndex) => {
    try {
      
      
      // const degreeValues = degreeLists[maxPlayerCnt];
      // let radianPerSeat = (degreeValues[seatIndex - 1] * Math.PI) / 180;
      // const baseWidthValue =
      //   TableSizeList[tableSizeIndex][0] / 2 -
      //   TableShadowSize[tableSizeIndex][0];
      // const baseHeightValue =
      //   TableSizeList[tableSizeIndex][1] / 2 -
      //   TableShadowSize[tableSizeIndex][1];
      // let leftPerSeat =
      //   TableLeftMarginList[tableSizeIndex] +
      //   baseWidthValue +
      //   (baseWidthValue - vwInPixels * 4) *
      //     Math.cos(radianPerSeat);
      // let topPerSeat =
      //   baseHeightValue +
      //   TableTopNumberSize[tableSizeIndex] +
      //   (baseHeightValue - vwInPixels * 4) *
      //     Math.sin(radianPerSeat);

      // // switch (seatIndex) {
      // //   case 1:
      // //     leftPerSeat += 7 * vwInPixels;
      // //     break;
      // //   case 2:
      // //     topPerSeat += 2.5 * vwInPixels;
      // //     break;
      // //   case 3:
      // //     topPerSeat -= (topSubMarginList[tableSizeIndex] - 2.5 * vwInPixels);
      // //     break;
      // //   case 4:
      // //     topPerSeat += 2.5 * vwInPixels;
      // //     break;
      // //   case 5:
      // //     leftPerSeat -= 2.5 * vwInPixels;
      // //     topPerSeat -= (topSubMarginList[tableSizeIndex] - 2.5 * vwInPixels);
      // //     break;
      // //   case 6:
      // //     leftPerSeat -= 3 * vwInPixels;
      // //     topPerSeat += 2.5 * vwInPixels;
      // //     break;          
      // // }
      
      // return [leftPerSeat, topPerSeat];
    } catch (error) {
      console.log("useSeatPosition-getHandCardPosition: error:", error);
    }

    return [0, 0];
  };

  const getBalancePosition = (maxPlayerCnt, seatIndex, tableSizeIndex) => {
    try {
      let vwInPixels = window.innerWidth / 100;
      
      // const degreeValues = degreeLists[maxPlayerCnt];
      // let radianPerSeat = (degreeValues[seatIndex - 1] * Math.PI) / 180;
      // const baseWidthValue =
      //   TableSizeList[tableSizeIndex][0] / 2 -
      //   TableShadowSize[tableSizeIndex][0];
      // const baseHeightValue =
      //   TableSizeList[tableSizeIndex][1] / 2 -
      //   TableShadowSize[tableSizeIndex][1];
      // let leftPerSeat =
      //   TableLeftMarginList[tableSizeIndex] +
      //   baseWidthValue +
      //   (baseWidthValue - balanceInnerMarginSize[tableSizeIndex][0]) *
      //     Math.cos(radianPerSeat);
      // let topPerSeat =
      //   baseHeightValue +
      //   TableTopNumberSize[tableSizeIndex] +
      //   (baseHeightValue - balanceInnerMarginSize[tableSizeIndex][1]) *
      //     Math.sin(radianPerSeat);

      // // switch (seatIndex) {
      // //   case 1:
      // //     leftPerSeat += 7 * vwInPixels;
      // //     break;
      // //   case 3:
      // //     topPerSeat -= topSubMarginList[tableSizeIndex];
      // //     break;
      // //   case 5:
      // //     leftPerSeat -= 3 * vwInPixels;
      // //     topPerSeat -= topSubMarginList[tableSizeIndex];
      // //     break;          
      // //   case 6:
      // //     leftPerSeat -= 3 * vwInPixels;          
      // //     break;          
      // // }
      
      // return [leftPerSeat, topPerSeat];
    } catch (error) {
      console.log("useSeatPosition-getBalancePosition: error:", error);
    }

    return [0, 0];
  };

  const getAvatarPosition = (maxPlayerCnt, seatIndex, tableSizeIndex) => {
    console.log("getAvatarPosition 1");
    try {
      let vwInPixels = window.innerWidth / 100;

      let leftPerSeat = Math.round(vwInPixels * SeatPoisitonList[seatIndex - 1][0]);
      let topPerSeat = Math.round(vwInPixels * SeatPoisitonList[seatIndex - 1][1]);
      
      return [leftPerSeat, topPerSeat];      
    } catch (error) {
      console.log("useSeatPosition-getAvatarPosition: error:", error);
    }

    return [0, 0];
  };

  return [
    getAvatarSize,
    getAvatarPosition,
    getBalancePosition,
    getHandCardPosition,
  ];
};

export default useSeatPosition;
