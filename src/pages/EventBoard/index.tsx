import React from "react";

import EventCard from "components/EventCard";
import { EventDataType, TodayEvent } from "components/TodayEvent";
import ColoredText from "components/Typography/ColoredText";
import "pages/EventBoard/styles.css";
import RadiusButton from "components/buttons/RadiusButton";

const PastEventDataList: EventDataType[] = [
  {
    eventLabel: "Sunday Happy Hour",
    timeLeft: 20,
    prize: 3,
    participants: 0,
    bgImgURI: "/assets/images/events/background_1.png",
  },
];

export const EventBoard: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <TodayEvent />
      <div className="mb-9">
        <div className="event-title-container flex flex-col">
          <div className="font-instagram p-0 m-0 text-c-56 text-white leading-none">
              Past events          
          </div>
          <div id="event-title-date">
            <ColoredText
              text_attr_kinds="other_color"
              className="text-c-16"
            >
              Sort by
            </ColoredText>
          </div>
        </div>
        <div className="space-y-2" id="event-today-container">
          {PastEventDataList.map((eventData, index) => (
            <EventCard
              bgImgURI={eventData.bgImgURI}
              eventLabel={eventData.eventLabel}
              greyFlag={true}
              timeLeft={eventData.timeLeft}
              prize={eventData.prize}
              participants={eventData.participants}
            />
          ))}
        </div>
        <div className="flex items-center justify-center w-full ">
          <RadiusButton
            width={7.67}
            label="Load more"
            setBorder={true}
            height={1.88}
          />
        </div>
      </div>
    </div>
  );
};
