import React from "react";

import EventCard from "components/EventCard";
import ColoredText from "components/Typography/ColoredText";
import "components/styles.css";
import RadiusButton from "components/buttons/RadiusButton";
import FourDotButton from "components/icons/FourDotButton";
import TwoBarButton from "components/icons/TwoBarButton";

export interface EventDataType {
  bgImgURI: string;
  eventLabel: string;
  timeLeft: number;
  prize: number;
  participants: number;
}

const EventDataList: EventDataType[] = [
  {
    eventLabel: "Sunday Happy Hour",
    timeLeft: 20,
    prize: 3,
    participants: 0,
    bgImgURI: "/assets/images/events/background_1.png",
  },
  {
    eventLabel: "International Week",
    timeLeft: 10,
    prize: 2,
    participants: 0,
    bgImgURI: "/assets/images/events/background_2.png",
  },
];

interface TodayEventProps {
  pastEventShowFlag?: boolean;
}

export const TodayEvent: React.FC<TodayEventProps> = ({
  pastEventShowFlag,
}) => {
  return (
    <div className="w-full flex flex-col">
      <div className="event-title-container flex flex-col p-0 m-0">
        <div className="font-instagram p-0 m-0 text-c-56 text-white leading-none">
          Events
        </div>
        <div id="event-title-date">
          <ColoredText text_attr_kinds="other_color" className="text-c-16">
            Sort by
          </ColoredText>
        </div>
        <div id="event-title-controller">
          <FourDotButton />
          <TwoBarButton />
          <div id="event-title-detail-button" />
          {pastEventShowFlag && (
            <div className="ml-2">
              <RadiusButton
                width={7.99}
                label="Past events"
                setBorder={true}
                height={1.88}
              />
            </div>
          )}
        </div>
      </div>
      <div className="space-y-2" id="event-today-container">
        {EventDataList.map((eventData, index) => (
          <EventCard
            bgImgURI={eventData.bgImgURI}
            eventLabel={eventData.eventLabel}
            timeLeft={eventData.timeLeft}
            prize={eventData.prize}
            participants={eventData.participants}
          />
        ))}
      </div>
    </div>
  );
};
