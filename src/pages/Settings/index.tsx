import React from "react";

import RadiusButton from "components/buttons/RadiusButton";
import ColoredText from "components/Typography/ColoredText";

import "pages/Settings/styles.css";

export const Settings: React.FC = () => {
  const handleAvatarSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    console.log("file:", event.target.files[0]);
  };

  return (
    <div>
      <div id="setting-title-letter">
        <ColoredText text_attr_kinds="other_color" fonttype="small">
          Settings
        </ColoredText>
      </div>
      <div className="m-0 p-0" id="avatar-label-img-container">
        <ColoredText text_attr_kinds="other_color" fonttype="tiny">
          Avatar
        </ColoredText>
        <div
          className="border border-dashed border-custom-secondary flex flex-col justify-center setting-item-col-space text-center"
          id="avatar-container"
        >
          <ColoredText text_attr_kinds="secondary" fonttype="XextraTiny">
            Drag and drop an image here or{" "}
            <div
              className="relative cursor-pointer inline-block text-white"
              onClick={(e) => {
                e.stopPropagation();
                document.getElementById("fileInput")?.click();
              }}
            >
              select
            </div>{" "}
            one for upload
            <input
              className="hidden"
              id="fileInput"
              type="file"
              accept=".png"
              onChange={(event) => handleAvatarSelect(event)}
            />
          </ColoredText>
          <ColoredText text_attr_kinds="secondary" fonttype="XextraTiny">
            Supported files: PNG or JPG | Maximum size: 2MB
          </ColoredText>
        </div>
      </div>
      <div className="m-0 p-0" id="avatar-label-img-container">
        <ColoredText text_attr_kinds="other_color" fonttype="tiny">
          Display name
        </ColoredText>
        <div className="setting-item-col-space">
          <input
            id="setting-name-input"
            className="border border-custom-secondary bg-transparent font-instagram text-xs"
            placeholder="Example: SatoshiNakamoto"
          />
        </div>
      </div>
      <div className="m-0 p-0" id="avatar-label-img-container">
        <ColoredText text_attr_kinds="other_color" fonttype="tiny">
          Connected wallets
        </ColoredText>
        <div className="setting-item-col-space">
          <RadiusButton
            bgStyle="linearGradient-5"
            height={1.88}
            icon="/assets/plus_icon.png"
            label="Connect Wallet"
            radius={0.61}
            setBorder={false}
            width={9.03}
          />
        </div>
      </div>
      <div className="m-0 p-0" id="avatar-label-img-container">
        <ColoredText text_attr_kinds="other_color" fonttype="tiny">
          Connected Socials
        </ColoredText>
        <div className="setting-item-col-space">
          <RadiusButton
            bgStyle="custom-2"
            height={1.88}
            icon="/assets/plus_icon.png"
            label="Connect Discord"
            radius={0.61}
            setBorder={false}
            width={9.59}
          />
        </div>
      </div>
      <div className="flex flex-col m-0 p-0" id="avatar-label-img-container">
        <ColoredText text_attr_kinds="other_color" fonttype="tiny">
          Transaction history
        </ColoredText>
        <div className="setting-item-col-space">
          <ColoredText text_attr_kinds="secondary" fonttype="XTiny">
            Nothing to see here yet
          </ColoredText>
        </div>
      </div>
    </div>
  );
};
