import React, { useState, useEffect } from 'react'

import styled from 'styled-components'
import {
    createTheme,
    makeStyles,
    ThemeProvider,
} from '@material-ui/core/styles';
import { colors } from '../../styles'
import telegramIcon from '../../assets/images/telegramIcon.png'
import discardIcon from '../../assets/images/discardIcon.png'
import lineIcon from '../../assets/images/lineIcon.png'
import LinearProgress from "@material-ui/core/LinearProgress";

const FooterContainer = styled.div`
    width: 100%;
    height:650px;
    background-image: url(/footerImage.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items:center;
`
const CalArea = styled.div`
    align-items:center;
    text-align:center;
    width: 460px;
    height: 426px;
    paddin-top:500px;
    margin-left:10%;
    border-radius:20px;
    padding: 30px 20px;
    background-color: rgba(${colors.footerColor});
    @media (max-width: 660px) {
        width: 90%;
        height: 426px;
        margin-left:5%;
    }
`
const CalContent = styled.div`
    width: 260px;
    margin: 0 auto;
    border-bottom: 2px solid rgba(${colors.border});
    flex-direction: row;
    justify-content:space-between;
    display: flex;
    align-items:center;
`
const SocialTxt = styled.div`
    width: 150px;
    margin: 30px auto;
    text-align:center;
    align-items:center;
    justify-content:center;
    border-bottom: 2px solid rgba(${colors.border});
    display: flex;
`
const Calculator = styled.div`
    width: 70px;
    margin: 0 auto;
    flex-direction: row;
    justify-content:space-between;
    align-items:center;
    display: flex;
`
const CalContent1 = styled.div`
    width: 260px;
    margin: 0 auto;
    flex-direction: row;
    justify-content:space-between;
    display: flex;
    align-items:center;
`
const SocialArea = styled.div`
    width: 400px;
    height: 175px;
    margin: 50px auto 50px auto;
    flex-direction: column;
    display: flex;
    @media (max-width: 660px) {
        width: 90%;
        height: 175px;
        margin-left:5%;
    }
`
const IconList = styled.div`
    width: 202px;
    height: 54px;
    margin: 30px auto 0 auto;
    flex-direction: row;
    justify-content:space-between;
    display: flex;
`
const PrograssBar = styled.div`
    width: 80%;
    height: 8px;
    border-radius:4px;
    background-color: rgba(${colors.red});
`
const LogoImage = styled.img`
    @media (max-width: 420px) {
        width: 80px;
        height: 80px;
        margin-bottom: 1em;
    }
`
const LogoTitle = styled.p`
    color: white;
    font-size: 14px;
    text-align:center;
    display: inline-block;
`
const LogoTitle5 = styled.p`
    color: white;
    font-size: 14px;
    text-align:center;
    display: inline-block;
    &:hover {
        cursor: pointer;
    }
`
const LogoTitle1 = styled.p`
    color: #D35BFF;
    font-size: 16px;
    text-align:center;
    display: inline-block;
    font-weight:700;
`
const LogoTitle4 = styled.p`
    color: #D35BFF;
    font-size: 25px;
    text-align:center;
    display: inline-block;
    font-weight:700;
    &:hover {
        cursor: pointer;
    }
`
const LogoTitle2 = styled.p`
    color: #D35BFF;
    font-size: 16px;
    text-align:center;
    display: inline-block;
    font-weight:700;
    margin-bottom:50px;
`
const LogoTitle3 = styled.p`
    color: white;
    font-size: 14px;
    height:20px;
    width:50px;
    border-radius:25px;
    align-items:center;
    justify-content:center;
    text-align:center;
    display: inline-block;
    &:hover {
        cursor: pointer;
    }
`
const SocialIcon = styled.img`
    width: 54px;
    height: 54px;
    margin-right:3%;
    &:hover {
        cursor: pointer;
    }
`

const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    progress: {
        width: '80%',
        height: 8,
        borderRadius: 4,
    }
}));

const theme = createTheme({
    palette: {
        primary: {
            main: '#D35BFF',
        },
    }
});

interface Props {
    limitItemNum: number
    ownEthValue: number
    changeAmount: (val: number) => void
    amount: number
    getMaxValue: () => void
    buyHandler: () => void
    totalPrice: number
    totalSupply: number
}

const Footer: React.FC<Props> = ({ limitItemNum, ownEthValue, changeAmount, amount, getMaxValue, totalPrice, totalSupply, buyHandler }) => {
    const classes = useStyles();

    return (
        <div style={{ width: '100%' }}>
            <FooterContainer id="footer">
                <CalArea>
                    <LogoTitle2>{limitItemNum} NFT’S</LogoTitle2>
                    <CalContent>
                        <LogoTitle>MY ETH BALANCE</LogoTitle>
                        <LogoTitle1>{ownEthValue.toFixed(4)} ETH</LogoTitle1>
                    </CalContent>
                    <CalContent>
                        <LogoTitle>AMOUNT</LogoTitle>
                        <Calculator>
                            <LogoTitle4 onClick={() => { changeAmount(-1) }}>-</LogoTitle4>
                            <LogoTitle1>{amount}</LogoTitle1>
                            <LogoTitle4 onClick={() => { changeAmount(1) }}>+</LogoTitle4>
                        </Calculator>
                        <LogoTitle3 onClick={getMaxValue} style={{ backgroundColor: '#D35BFF' }}>MAX</LogoTitle3>
                    </CalContent>
                    <CalContent1>
                        <LogoTitle>TOTAL PRICE</LogoTitle>
                        <LogoTitle1>{totalPrice} ETH</LogoTitle1>
                    </CalContent1>
                    {/* <LogoTitle style={{ color: 'white', fontSize: 14, width: '100%', marginBottom: -10 }}>WE ARE OFFICIALLY SOLD OUT!</LogoTitle> */}
                    <LogoTitle5 style={{ color: 'white', fontSize: 20, width: 70, height: 30, borderRadius: 10, justifyContent: 'center', marginBottom: -10, paddingTop: 4, backgroundColor: "#D35BFF" }} onClick={buyHandler}>Buy</LogoTitle5>
                    {totalSupply == 10000 ? <LogoTitle5 style={{ color: '#006BF9', fontSize: 12, width: '100%' }}>Buy on OpenSea</LogoTitle5> : ""}
                    <CalContent1 style={{ width: '100%', marginTop: 30 }}>
                        <LogoTitle>Progress</LogoTitle>
                    </CalContent1>
                    <CalContent1 style={{ width: '100%', marginTop: -10, alignItems: 'center' }}>
                        <ThemeProvider theme={theme}>
                            <LinearProgress variant="determinate" value={totalSupply * 100 / limitItemNum} className={classes.progress} color="primary" />
                        </ThemeProvider>
                        <LogoTitle1>{totalSupply == 0 ? 0 : totalSupply * 100 / limitItemNum}%</LogoTitle1>
                    </CalContent1>
                </CalArea>
            </FooterContainer>
            <SocialArea>
                <IconList>
                    <a target="_blank" href="https://twitter.com/ShibaSocietyNFT"><SocialIcon src={telegramIcon} /></a>
                    <a target="_blank" href="https://discord.gg/d9K7FXF4YB"><SocialIcon src={discardIcon} /></a>
                    <a target="_blank" href="https://opensea.io/collection/shiba-society"><SocialIcon src={lineIcon} /></a>
                </IconList>
                <SocialTxt>
                    <LogoTitle><a target="_blank" href="https://etherscan.io/address/0x6a08e1D5160E204fC4648B13b9E7b0E05554D7C5">SMART CONTRACT</a></LogoTitle>
                </SocialTxt>
            </SocialArea>
        </div>
    )
}

export default Footer
