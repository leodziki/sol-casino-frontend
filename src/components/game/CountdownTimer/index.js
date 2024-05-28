import React, { useEffect, useRef, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import {CountdownTimerWrapper} from "./styles";
const CountdownTimer = () => {
  const parentRef = useRef(null);
  const [parentHeight, setParentHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if(parentRef.current) {
        setParentHeight(parentRef.current.offsetHeight);
      }
    }
  
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <CountdownTimerWrapper ref={parentRef}>
      <CountdownCircleTimer          
          isPlaying
          duration={10}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          size={parentHeight * 8 / 10}
          strokeWidth={parentHeight / 10}
      >
          {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </CountdownTimerWrapper>
  );
}

export default CountdownTimer;