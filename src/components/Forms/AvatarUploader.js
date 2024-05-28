import React, { useState, useContext } from 'react';
import Button from '../buttons/Button';
import styled from 'styled-components';
import maleAnonImg from '../../assets/settings/man_silhouette.png';
import avapicBgImg from '../../assets/settings/avapic_place.png';
import settingCheckImg from '../../assets/settings/settings_check.png';
import commonModalContext from '../../context/modal/commonModalContext';

const UploadAVATICBtn = styled(Button)`
  position: absolute;
  top: calc(50% + 50px);
  left: calc(50% - 180px);
  z-index: 1;
`;

const AvapicContainer = styled.div`
  position: absolute;
  background-image: url(${avapicBgImg});
  background-size: 100% 100%;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  top: calc(50% + 30px);
  left: calc(50% + 140px);
  height: 130px;
  width: 130px;
`;

const AvapicImage = styled.img`
  position: absolute;
  cursor: pointer;
  background-color: transparent;
  background-repeat: no-repeat;    
  height: 90%;
  width: 90%;
  top: 5px;
  left: 5px;
`;

const AvatarUploadContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  vertical-align: center;
  background-color: transparent;
`;

const AvapicChecker = styled.div`
  position: absolute;
  background-image: url(${settingCheckImg});
  background-size: 100% 100%;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  top: calc(50% + 105px);
  left: calc(50% + 220px);
  height: 80px;
  width: 80px;
  display: none;
`;

const AvatarUploader = ({ settingItems, setSettingItemList }) => {  
  const [avatarUrlState, setAvatarUrlState] = useState(null);
  const [selectedFile, setSelectedFile] = useState(!settingItems || !settingItems.avatar ? null : settingItems.avatar);
  const { commonOpenModal, commonCloseModal } = useContext(commonModalContext);    

  const openCommonModal = () =>
    commonOpenModal(
      () => (
        <></>
      ),
      '',
      '',
      3,
    );

  const showLoadingDialog = () => {
    openCommonModal();
  }

  const hideLoadingDialog = () => {
    commonCloseModal();
  }

  const handleImageClick = () => {
    document.getElementById('avatar-input').click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      
      const formData = new FormData();
      formData.append('avatar', file);          
      
      const token = localStorage.token;
      showLoadingDialog();
      
      fetch('/api/upload-avatar', {
        method: 'POST',
        headers: {          
          'x-auth-token': token,
        },
        body: formData
      })
      .then((response) => {
        hideLoadingDialog();
        if (response.ok) {
          response.json().then(({ resultFlag, url}) => {
            console.log("upload avatar request is successful.");            
            if (resultFlag) {
              document.getElementById("avatar-upload-checkmark").style.display = "block";                  
            } else {
              console.log("upload avatar response failed");                  
            }
          });
        }
      })
      .catch((error) => {
        console.error('Failed to upload avatar', error);
      });      

      const reader = new FileReader();
      reader.onload = async () => {
        setAvatarUrlState(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <AvatarUploadContainer>
      <UploadAVATICBtn onClick={handleImageClick} uploadAVA={true} />
      <AvapicContainer>
        <AvapicImage src={avatarUrlState? avatarUrlState : (settingItems && settingItems.avatar? `data:image/png;base64,${settingItems.avatar}` : maleAnonImg)} />
      </AvapicContainer>      
      <input
        type="file"
        id="avatar-input"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <AvapicChecker id="avatar-upload-checkmark" />
    </AvatarUploadContainer>
  );
};

export default AvatarUploader;