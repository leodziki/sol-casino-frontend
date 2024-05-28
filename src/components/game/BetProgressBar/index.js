import React, { useEffect, useRef, useState, useContext } from "react";

import gameContext from "../../../context/game/gameContext";
import { ProgressBarWrapper, ProgressedBar, ProgressOperator } from "./styles";

const BetProgressBar = ({ chipsAmount }) => {
  const { bet, currentTable, UpdateTableParameters } = useContext(gameContext);
  const progressBarRef = useRef(null);
  const [betChipPercent, setBetChipPercent] = useState(bet * 100 / chipsAmount);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    if (currentTable) {
        UpdateTableParameters(
        currentTable._id,
        parseFloat(parseFloat((chipsAmount * betChipPercent) / 100)),
        undefined,
        undefined,
        undefined,
        undefined,
        undefined
        );
    }
  }, [betChipPercent]);

  const startDrag = (event) => {
    setDragging(true);

    calculateCurrentBetChipPercent(event);
  };

  const calculateCurrentBetChipPercent = (event) => {
    if (!progressBarRef.current) return;

    let bounds = progressBarRef.current.getBoundingClientRect();
    let x = event.pageX - bounds.left;
    let progress = (x / bounds.width) * 100;

    if (progress > 100) progress = 100;
    if (progress < 0) progress = 0;

    setBetChipPercent(Math.round(progress));
  };

  const doDrag = (event) => {
    if (!dragging) return;

    calculateCurrentBetChipPercent(event);
  };

  const stopDrag = (event) => {
    setDragging(false);
  };

  return (
    <ProgressBarWrapper
      ref={progressBarRef}
      onMouseDown={startDrag}
      onMouseMove={doDrag}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
    >
      <ProgressedBar progress_value={betChipPercent}></ProgressedBar>
      <ProgressOperator
        progress_value={betChipPercent}
        onMouseDown={startDrag}
        onMouseMove={doDrag}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
      />
    </ProgressBarWrapper>
  );
};

export default BetProgressBar;
