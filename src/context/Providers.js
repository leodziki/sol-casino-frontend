import { ThemeProvider } from "styled-components";
// import { GoogleOAuthProvider } from '@react-oauth/google';

import AuthProvider from "./auth/AuthProvider";
import CommonModalProvider from "./modal/CommonModalProvider";
import GlobalState from "./global/GlobalState";
import GameState from "./game/GameState";
import WebSocketProvider from "./websocket/WebsocketProvider";
import SeatPositionProvider from "./seatPosition/SeatPositionProvider";
import theme from "../styles/theme";

const Providers = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalState>
      {/* <GoogleOAuthProvider clientId="652777389788-3do6k6bok3oilbl6jsf7fpqc3n16ut1b.apps.googleusercontent.com"> */}
        <AuthProvider>
          <WebSocketProvider>
            <CommonModalProvider>
              <SeatPositionProvider>
                <GameState>{children}</GameState>
              </SeatPositionProvider>
            </CommonModalProvider>
          </WebSocketProvider>
        </AuthProvider>
      {/* </GoogleOAuthProvider> */}
    </GlobalState>
  </ThemeProvider>
);

export default Providers;
