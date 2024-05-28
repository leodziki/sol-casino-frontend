import React, { useState, useEffect } from 'react';
import CommonModalContext from './commonModalContext';
import CommonModal, { initialCommonModalData } from '../../components/Modals/CommonModal';

const CommonModalProvider = ({ children }) => {
  const [showCommonModal, setShowCommonModal] = useState(false);
  const [modalData, setModalData] = useState(initialCommonModalData);

  useEffect(() => {
    const layoutWrapper = document.getElementById('layout-wrapper');

    if (showCommonModal) {
      document.body.style.overflow = 'hidden';

      if (layoutWrapper) {
        layoutWrapper.style.filter = 'blur(4px)';
        layoutWrapper.style.pointerEvents = 'none';
        layoutWrapper.tabIndex = '-1';
      }
    } else {
      document.body.style.overflow = 'initial';

      if (layoutWrapper) {
        layoutWrapper.style.filter = 'none';
        layoutWrapper.style.pointerEvents = 'all';
      }
    }
  }, [showCommonModal]);

  const commonOpenModal = (
    children,
    headingText,
    btnText,
    waiting_modal,
    btnCallBack = commonCloseModal,
    onCloseCallBack = commonCloseModal,
  ) => {
    setModalData({
      children,
      headingText,
      btnText,
      waiting_modal,
      btnCallBack,
      onCloseCallBack,
    });

    setShowCommonModal(true);
  };

  const commonCloseModal = () => setShowCommonModal(false);

  return (
    <CommonModalContext.Provider
      value={{ showCommonModal, modalData, commonOpenModal, commonCloseModal }}
    >
      {children}
      {showCommonModal && (
        <CommonModal
          headingText={modalData.headingText}
          btnText={modalData.btnText}
          waiting_modal={modalData.waiting_modal}
          onClose={modalData.onCloseCallBack}
          onBtnClicked={modalData.btnCallBack}
        >
          {modalData.children()}
        </CommonModal>
      )}
    </CommonModalContext.Provider>
  );
};

export default CommonModalProvider;
