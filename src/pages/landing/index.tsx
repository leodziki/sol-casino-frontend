import React, { useContext, useEffect, useState } from "react";

import authContext from "context/auth/authContext";
import { SelectedMenuContext } from "context/SelectedMenuContext";
import { DashBoard } from "pages/DashBoard";
import { EventBoard } from "pages/EventBoard";
import { Leaderboard } from "pages/Leaderboard";
import { PlayBoard } from "pages/PlayBoard";
import { Profile } from "pages/profile";
import { RulesBoard } from "pages/RulesBoard";
import { Room } from "pages/room";
import { Settings } from "pages/Settings"; 

import { AppLayout } from "layouts/AppLayout";
import { LandingPageWrapper } from "pages/landing/styles";

export const Landing: React.FC = () => {
  const [selectedMenuKey, setSelectedMenuKey] = useState("0");  
  const { isLoggedIn } = useContext(authContext);

  useEffect(() => {
    console.log("selectedMenuKey in Landing", selectedMenuKey); // Here
  }, [selectedMenuKey]);

  return (
    <SelectedMenuContext.Provider
      value={{ selectedMenuKey, setSelectedMenuKey }}
    >
      {isLoggedIn && selectedMenuKey === "10" ? (
        <Room />
      ):(
      <AppLayout>
        <LandingPageWrapper id="home">
          {isLoggedIn ? (
            <>
              {selectedMenuKey === "0" && <DashBoard />}
              {selectedMenuKey === "1" && <PlayBoard />}
              {selectedMenuKey === "2" && <EventBoard />}
              {selectedMenuKey === "3" && <Leaderboard />}
              {selectedMenuKey === "4" && <RulesBoard />}
              {selectedMenuKey === "5" && <Profile />}
              {selectedMenuKey === "6" && <Settings />}
            </>
          ) : (
            <DashBoard />
          )}
        </LandingPageWrapper>
      </AppLayout>
      )}
    </SelectedMenuContext.Provider>
  );
};
