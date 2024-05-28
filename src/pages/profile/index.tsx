import React, { useState } from "react";
import {
  ProfileWrapper,
  ProfileSetting,
  Title,
  SetRow
} from "./styles";
import { Switch } from "antd"; 

import { AppLayout } from "../../layouts/AppLayout";

import { FaCopy } from "react-icons/fa";


export const Profile: React.FC = () => {

  const [ profileData ] = useState({
    title:"Profile",
    content: [
      {
        label: "Nickname",
        value: "charge56",
        buttonText: "Edit",
      },
      {
        label: "Avatar",
        sublabel: "Choose a NFT as Your Avatar",
        value: <img src="/assets/images/profile-user.png" width={30} height={30} style={{ borderRadius: '50%' }} alt=""/>,
        buttonText: "Edit",
      },
      {
        label: "Wallet",
        value: "0xe76f2A...A0e361A2",
        buttonText: "Copy",
        icon: <FaCopy />
      },
      {
        label: "Email",
        value: "-",
      },
    ]
  })
 
  return (
    <AppLayout>
      <ProfileWrapper>
        <ProfileSetting>
          <Title>{profileData.title}</Title>
          {
            profileData.content.map(item => 
              <SetRow>
                <label>
                  {item.label}
                  {item.sublabel && <span>{item.sublabel}</span>}
                </label>
                <span>{item.value}</span>
                {
                  item.buttonText ? <button className="region-edit-btn">
                  {
                    item.icon && item.icon
                  }
                  {item.buttonText}
                </button> : <div style={{ minWidth: "80px" }}/>
                }
              </SetRow>
            )
          }          
        </ProfileSetting>
        <ProfileSetting>
          <Title>Regional Settings</Title>
          <SetRow>
            <label>Time Zone</label>
            <span>
              UTC +09:00
              <b>
                <Switch size="small" checked /> Current Time Zone
              </b>
            </span>
            <button className="region-edit-btn">Edit</button>
          </SetRow>
        </ProfileSetting>
        <ProfileSetting>
          <Title>Link Account</Title>
          <SetRow>
            <label>Telegram</label>
            <span>-</span>
            <button className="link-btn">Link</button>
          </SetRow>
        </ProfileSetting>
        <ProfileSetting>
          <Title>Responsible Gaming</Title>
          <SetRow>
            <label>
              Self-Exclusion Period
              <span>Here you can setup self-exclusion period.</span>
            </label>
            <button className="region-edit-btn">Edit</button>
          </SetRow>
        </ProfileSetting>
      </ProfileWrapper>
    </AppLayout>
  );
};
