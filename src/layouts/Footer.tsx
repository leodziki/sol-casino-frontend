import React from "react";

import ColoredText from "components/Typography/ColoredText";
import { FooterWrapper } from "./styles";

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <div id="footer-inner-wrapper">
        <div id="footer-top-container">
          <div className="footer-card">
            <div>
              <ColoredText
                text_attr_kinds="other_color"
                fonttype="semiSmallTiny"
              >
                SOLHOLDEM
              </ColoredText>
            </div>
            <div>
              <ColoredText text_attr_kinds="secondary" fonttype="extraTiny">
                The premier destination for adrenaline-fueled gaming and
                cutting-edge technology! Dive into the heart-pounding world of
                online gambling where the stakes are high and the excitement
                never fades.
              </ColoredText>
            </div>
          </div>
          <div className="footer-card right">
            <div>
              <ColoredText
                text_attr_kinds="other_color"
                fonttype="semiSmallTiny"
              >
                Social Media
              </ColoredText>
            </div>
            <div>
              <ColoredText text_attr_kinds="secondary" fonttype="extraTiny">
                Twitter
              </ColoredText>
            </div>
            <div>
              <ColoredText text_attr_kinds="secondary" fonttype="extraTiny">
                Discord
              </ColoredText>
            </div>
          </div>
          <div className="footer-card right">
            <div>
              <ColoredText
                text_attr_kinds="other_color"
                fonttype="semiSmallTiny"
              >
                Terms
              </ColoredText>
            </div>
            <div>
              <ColoredText text_attr_kinds="secondary" fonttype="extraTiny">
                Terms and Conditions
              </ColoredText>
            </div>
            <div>
              <ColoredText text_attr_kinds="secondary" fonttype="extraTiny">
                Privacy policy
              </ColoredText>
            </div>
          </div>
          <div className="footer-card right">
            <div>
              <ColoredText
                text_attr_kinds="other_color"
                fonttype="semiSmallTiny"
              >
                Links
              </ColoredText>
            </div>
            <div>
              <ColoredText text_attr_kinds="secondary" fonttype="extraTiny">
                Play
              </ColoredText>
            </div>
            <div>
              <ColoredText text_attr_kinds="secondary" fonttype="extraTiny">
                Events
              </ColoredText>
            </div>
            <div>
              <ColoredText text_attr_kinds="secondary" fonttype="extraTiny">
                Leaderboard
              </ColoredText>
            </div>
            <div>
              <ColoredText text_attr_kinds="secondary" fonttype="extraTiny">
                Rules
              </ColoredText>
            </div>
          </div>
        </div>
        <div id="footer-bottom-container">
          <img src="/assets/sol_mark_label.png" alt="" id="footer-solana-mark" />
          <div className="copyright-wrapper">
            <ColoredText text_attr_kinds="secondary" fonttype="semiExtraTiny">
              © 2024 DuelArena. All rights reserved. Unauthorized reproduction
              or distribution of this website, or any portion of it, may result
              in severe civil and criminal penalties, and will be prosecuted to
              the maximum extent possible under the law.
            </ColoredText>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};
