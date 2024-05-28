import React from "react";

import ColoredText from "components/Typography/ColoredText";
import { EventCardContainer } from "components/EventCard/styles";
import "components/EventCard/styles.css";
import RadiusButton from "components/buttons/RadiusButton";

interface EventCardProps {
  bgImgURI: string;
  eventLabel: string;
  greyFlag?: boolean;
  timeLeft: number;
  prize: number;
  participants: number;
}

const EventCard: React.FC<EventCardProps> = ({
  bgImgURI,
  eventLabel,
  greyFlag,
  timeLeft,
  prize,
  participants,
}) => {
  return (
    <EventCardContainer
      className="h-sp-158 rounded-radius-24 w-sp-1520"
      bgImageURI={process.env.PUBLIC_URL + bgImgURI}
      greyFlag={greyFlag ? greyFlag : false}
    >
      <div className="absolute left-1 top-1 h-sp-142 w-sp-480 bg-custom-primary border-0 p-sp-32 rounded-radius-16">
        <div className="h-full relative w-full">
          <div className="absolute left-0 p-0 top-0">
            <div className="font-instagram p-0 m-0 text-c-24 text-white leading-none">
              {eventLabel}
            </div>
          </div>
          <div className="absolute flex left-0 p-0 bottom-0 row">
            <div className="flex flex-col event-inner-item">
              <div className="font-instagram p-0 m-0 text-c-12 text-custom-secondary leading-none mb-sp-8">
                Time Left
              </div>
              <div className="font-instagram p-0 m-0 text-c-16 text-white leading-none">
                {timeLeft} hours
              </div>
            </div>
            <div className="flex flex-col event-inner-item">
              <div className="font-instagram p-0 m-0 text-c-12 text-custom-secondary leading-none mb-sp-8">
                Prize
              </div>
              <div className="font-instagram p-0 m-0 text-c-16 text-white leading-none">
                {prize} SOL
              </div>
            </div>
            <div className="flex flex-col event-inner-item">
              <div className="font-instagram p-0 m-0 text-c-12 text-custom-secondary leading-none mb-sp-8">
                Participants
              </div>
              <div className="font-instagram p-0 m-0 text-c-16 text-white leading-none">
                {participants}
              </div>
            </div>
          </div>
          <div className="absolute right-0 p-0 bottom-0">
            <RadiusButton
              width={4.44}
              label="Read more"
              setBorder={true}
              height={1.32}
            />
          </div>
        </div>
      </div>
    </EventCardContainer>
  );
};

export default EventCard;
