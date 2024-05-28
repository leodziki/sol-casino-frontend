import React, { useState, useEffect, useRef } from 'react';


import styled from 'styled-components';
import maleAnonImg from '../../assets/settings/man_silhouette.png';
import femaleAnonImg from '../../assets/settings/woman_silhouette.png';
import './menu_style.css';

const AvatarDropdown = styled.div`
    position: relative;
`;

const AvatarContainer = styled.div`
    width: 1.837vw;
    height: 1.837vw;
    border-radius: 50%;
    overflow: hidden;    
    cursor: pointer;
`;

const AvatarImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;    
`;

const MenuContainer = styled.div`
    position: absolute;
    top: 70px;
    right: 0;
    z-index: 10;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CircleAvatar = ({ avatarImgData, sex, menuItems }) => {
    const [isOpen, setIsOpen] = useState(false);
    const timeoutId = useRef(null);

    const handleAvatarClick = () => {
        setIsOpen(true);
    };

    const handleAvatarDismiss = () => {
        timeoutId.current = setTimeout(() => {
            setIsOpen(false);
        }, 700);

        console.log("CAvar : timeout : " + timeoutId.current);
    };

    useEffect(() => {
        return () => {
            console.log("CAavar : try to clear timeout:" + timeoutId.current);
            if (timeoutId.current) clearTimeout(timeoutId.current);            
        };
    }, []);

    return (
        <AvatarDropdown>
            <AvatarContainer onMouseEnter={handleAvatarClick} onMouseLeave={handleAvatarDismiss}>
                <AvatarImg src={(!!avatarImgData && avatarImgData !== '') ? `data:image/png;base64,${avatarImgData}` : ((!!sex && sex === 1) ? maleAnonImg : femaleAnonImg)} />
            </AvatarContainer>            
            {isOpen && (
                <MenuContainer>
                    <ul className="menu">
                        {!!menuItems && menuItems.map((item) => (
                        <li key={item.id} onClick={item.onClick}>
                            {item.label}
                        </li>
                        ))}
                    </ul>
                </MenuContainer>
            )}
        </AvatarDropdown>
        
    );
};
  
export default CircleAvatar;
