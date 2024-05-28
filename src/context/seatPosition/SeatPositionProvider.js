import React from "react";
import SeatPositionContext from "./seatPositionContext";
import useSeatPosition from "../../hooks/useSeatPosition";

const SeatPositionProvider = ({ children }) => {
  const [
    getAvatarSize,
    getAvatarPosition,
    getBalancePosition,
    getHandCardPosition,
  ] = useSeatPosition();

  return (
    <SeatPositionContext.Provider
      value={{
        getAvatarSize,
        getAvatarPosition,
        getBalancePosition,
        getHandCardPosition,
      }}
    >
      {children}
    </SeatPositionContext.Provider>
  );
};

export default SeatPositionProvider;
