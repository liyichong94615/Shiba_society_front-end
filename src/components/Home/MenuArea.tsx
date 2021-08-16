import React, { useEffect, useState } from 'react'

import styled from 'styled-components'
import { colors } from '../../styles'

interface MenuAreaProps {
    displayMenu: boolean;
    accountID: string;
    openMenu: () => void;
    connectMetaMask: () => void;
}

interface MenuContainerProps {
    status: boolean;
}

const MenuContainer = styled.ul<MenuContainerProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: all 0.3s ease-in-out;
    height:67px;
    padding: 0 20px;
    border: 2px solid #FF001F;
    border-radius: 5px;
    margin-top: 26px;
    @media (max-width: 880px) {
        flex-direction: column;
        transform: translateY(${props => props.status ? '-100%' : '40%'});
        background: rgb(${colors.main});
        opacity: 0.9;
        width: 100%;
        position: absolute;
        z-index: 10;
        border-radius: 20px;
        border: 1px solid rgba(${colors.border});
        height:200px;
        margin-top: 0px;
    }
`
const MmenuItem = styled.li`
    color: rgb(${colors.fontColor});
    font-size: 16px;
    font-weight: 400;
    margin: 0 1em;
    @media (max-width: 1000px) {
        margin: 0 0.3em;
    }
    @media (max-width: 880px) {
        margin: 0.5em 0;
    }
    &:hover {
        cursor: pointer;
        text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em darkblue
    }
`
const MmenuItem1 = styled.li`
    color: rgb(${colors.fontColor});
    font-size: 16px;
    font-weight: 400;
    background: rgb(${colors.red});
    margin: 0 1em;
    padding: 10px 16px;
    border-radius: 5px;
    @media (max-width: 1000px) {
        margin: 0 0.3em;
    }
    @media (max-width: 880px) {
        margin: 0.5em 0;
    }
    &:hover {
        cursor: pointer;
        text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em darkblue
    }
`
const SocialIcon = styled.img`
    width: 25px;
    height: 25px;
    margin: 0.5em;
    &:hover {
        cursor: pointer;
    }
`

const MenuArea: React.FC<MenuAreaProps> = ({ displayMenu, connectMetaMask, accountID }) => {

    return (
        <MenuContainer status={displayMenu}>
            <MmenuItem><a href="#dashboard">Shiba Society</a></MmenuItem>
            <MmenuItem><a href="#loadMap">Roadmap</a></MmenuItem>
            <MmenuItem><a href="#FAQ">FAQ</a></MmenuItem>
            <MmenuItem><a href="#footer">Mint Now</a></MmenuItem>
            <MmenuItem1 onClick={connectMetaMask}>{accountID}</MmenuItem1>
            {/* {!displayMenu &&
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <SocialIcon src={twitter} />
                    <SocialIcon src={telegram} />
                </div>} */}
        </MenuContainer>
    )
}

export default MenuArea
