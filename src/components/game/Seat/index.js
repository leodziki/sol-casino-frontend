import React, { useContext, useEffect, useState } from "react";
import Markdown from "react-remarkable";
import PropTypes from "prop-types";

import commonModalContext from "../../../context/modal/commonModalContext";
import gameContext from "../../../context/game/gameContext";
import globalContext from "../../../context/global/globalContext";
import seatPositionContext from "../../../context/seatPosition/seatPositionContext";

import ColoredText from "../../Typography/ColoredText";
import { SolMark } from "../SolMark";

import Button from "../../buttons/Button";
import { ButtonGroup } from "../../Forms/ButtonGroup";
import { Form } from "../../Forms/Form";
import { FormGroup } from "../../Forms/FormGroup";
import { Input } from "../../Forms/Input";
import { PositionedUISlot } from "../PositionedUISlot";
import EmptySeat from "../EmptySeat";
import OccupiedSeat from "../OccupiedSeat";
import DealerButton from "../../icons/DealerButton";

import {
  BackCardWrapper,
  BackCard,
  BalanceWrapper,
  ChipsAppendImg,
  LastActionWrapper,
} from "./styles";

//userRole : 1 : able to join, 2: observe
const Seat = ({
  userRole,
  currentTable,
  seatNumber,
  isPlayerSeated,
  sitDown,
  showLossScreen,
  showWinScreen,
}) => {
  const { commonOpenModal, commonCloseModal } = useContext(commonModalContext);
  const { chipsAmount } = useContext(globalContext);
  const { standUp, seatId, rebuy, exchangeSeatPositionToDisplay } = useContext(gameContext);
  const { getAvatarPosition, getAvatarSize, getBalancePosition, getHandCardPosition } =
    useContext(seatPositionContext);

  const [avatarImageData, setAvatarImageData] = useState(null);
  const [avatarMarginPair, setAvatarMarginPair] = useState([0, 0]);
  const [avatarSizePair, setAvatarSizePair] = useState([0, 0]);  
  const [balanceMarginPair, setBalanceMarginPair] = useState([0, 0]);
  const [cardMarginPair, setCardMarginPair] = useState([0, 0]);
  const [is_hidden_card_show, setIs_hidden_card_show] = useState("");

  const seat = currentTable.seats ? currentTable.seats[exchangeSeatPositionToDisplay(2, seatNumber, seatId, currentTable.maxPlayers)] : null;
  const maxBuyin = currentTable.limit;
  const minBuyIn = currentTable.minBet * 2 * 10;

  // const getAvatarImage = (userId) => {
  //   const data = { userId: userId };
  //   const token = localStorage.token;
  //   fetch("/api/avatar", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "x-auth-token": token,
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         response.json().then(({ resultFlag, avatarImage }) => {
  //           console.log("get avatar request is successful.");
  //           if (resultFlag) {
  //             setAvatarImageData(avatarImage);
  //           } else {
  //             console.log("get avatar response failed");
  //             setAvatarImageData("");
  //           }
  //         });
  //       } else {
  //         console.log(
  //           "get avatar request failed with status " + response.status
  //         );
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("get avatar request is Failed" + error);
  //     });
  // };

  useEffect(() => {
    const updateSize = () => {
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
        setBalanceMarginPair(
          getBalancePosition(
            currentTable.maxPlayers,
            seatNumber,
            tableSizeIndex
          )
        );

        setCardMarginPair(
          getHandCardPosition(currentTable.maxPlayers, seatNumber, tableSizeIndex)
        );

        setAvatarMarginPair(getAvatarPosition(
          currentTable.maxPlayers,
            seatNumber,
            tableSizeIndex
        ));

        setAvatarSizePair(getAvatarSize(tableSizeIndex));
      } catch (error) {
        console.log(
          "Failed to set Margin for each seat balance. error:",
          error
        );
      }
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (seat) {
      // console.log("Seat : useEffect_isPlayerSeated 1, seat:" + JSON.stringify(seat));
      if (!!seat.player && !!seat.player.userId && avatarImageData == null) {
        console.log("Seat : useEffect_isPlayerSeated 2:" + avatarImageData);
        // getAvatarImage(seat.player.userId);
      }

      if (seat.hand) {
        console.log("seat hand : " + JSON.stringify(seat.hand));
        for (const card of seat.hand) {
          if (card && card.suit === "hidden" && card.rank === "hidden") {
            console.log("seat : set hidden card show");
            setIs_hidden_card_show("1");
          }
        }
      }
    } else {
      setAvatarImageData(null);
    }
  }, [seat]);

  useEffect(() => {
    if (
      currentTable &&
      isPlayerSeated &&
      seat &&
      seat.id === seatId &&
      seat.sittingOut
    ) {
      if (chipsAmount <= minBuyIn || chipsAmount === 0) {
        showLossScreen();
        standUp();
      } else {
        commonOpenModal(
          () => (
            <Form
              onSubmit={(e) => {
                e.preventDefault();

                const amount = +document.getElementById("amount").value;

                if (
                  amount &&
                  amount >= minBuyIn &&
                  amount <= chipsAmount &&
                  amount <= maxBuyin
                ) {
                  rebuy(currentTable.id, seatNumber, parseInt(amount));
                  commonCloseModal();
                }
              }}
            >
              <FormGroup>
                <Input
                  id="amount"
                  type="number"
                  min={minBuyIn}
                  max={chipsAmount <= maxBuyin ? chipsAmount : maxBuyin}
                  defaultValue={minBuyIn}
                />
              </FormGroup>
              <ButtonGroup>
                <Button primary type="submit" custom_size="fullWidth">
                  {"Rebuy into game"}
                </Button>
              </ButtonGroup>
            </Form>
          ),
          "Rebuy",
          "No thanks!",
          1,
          () => {
            standUp();
            commonCloseModal();
          },
          () => {
            standUp();
            commonCloseModal();
          }
        );
      }
    }
    // eslint-disable-next-line
  }, [currentTable]);

  return (
    <div>
      {!seat ? (
        <>
          {!isPlayerSeated ? (
            <EmptySeat
              clickCallback={() => {
                if (userRole === 1) sitDown(currentTable._id, seatNumber);
              }}
              seatIndex={seatNumber}
              maxPlayers={currentTable.maxPlayers}
            >
              <Markdown>{"Empty\nSeat"}</Markdown>
            </EmptySeat>
          ) : (
            <EmptySeat
              seated="1"
              seatIndex={seatNumber}
              maxPlayers={currentTable.maxPlayers}
            >
              <Markdown>{"Empty\nSeat"}</Markdown>
            </EmptySeat>
          )}
        </>
      ) : (
        <>
          <PositionedUISlot>
            <OccupiedSeat
              seatNumber={seatNumber}
              hasTurn={seat.turn}
              avatarImageData={avatarImageData}
              is_hidden_card_show={is_hidden_card_show}
              self_seat={seat}
              player_seat={seatId === seat.id ? "1" : ""}
            />
          </PositionedUISlot>
          {currentTable.button === seat.id && (
            <PositionedUISlot
              right="25px"
              origin="center left"
              style={{ zIndex: "55" }}
            >
              <DealerButton />
            </PositionedUISlot>
          )}

          {seat && !seat.turn && seat.lastAction !== '' && (
            <LastActionWrapper
              left_value={avatarMarginPair? avatarMarginPair[0] : 0}
              top_value={avatarMarginPair? avatarMarginPair[1] : 0}
              width_value={avatarSizePair? avatarSizePair[0] : 0}
              height_value={avatarSizePair? avatarSizePair[1] : 0}
              >
              <ColoredText
                text_attr_kinds="other_color"
                fonttype="semiMidTiny"
                semi_transparent="1"
              >
                {seat.lastAction}
              </ColoredText>
            </LastActionWrapper>
          )}

          <BalanceWrapper
            left_value={balanceMarginPair[0]}
            top_value={balanceMarginPair[1]}
          >
            <ChipsAppendImg />
            <ColoredText
              text_attr_kinds="other_color"
              fonttype="semiSmallTiny"
            >
              {parseFloat(seat.bet).toFixed(2)}
            </ColoredText>
            <SolMark />
          </BalanceWrapper>
          {is_hidden_card_show === "1" && (
            <BackCardWrapper
              left_value={cardMarginPair ? cardMarginPair[0] : 0}
              top_value={cardMarginPair ? cardMarginPair[1] : 0}
            >
              <BackCard />
              <BackCard />
            </BackCardWrapper>
          )}
        </>
      )}
    </div>
  );
};

Seat.propTypes = {
  isPlayerSeated: PropTypes.bool,
};

export default Seat;
