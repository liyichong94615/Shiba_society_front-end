import React from 'react'
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components'
import bannerImage from '../../assets/images/bannerImage.png'
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../styles'

import telegramIcon from '../../assets/images/telegram.png'
import discardIcon from '../../assets/images/discard.png'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
        },
    },
    textCont: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgCont: {
        display: 'flex',
        justifyContent: 'center',
    },
}));

const BannerImg = styled.img`
    width: 100%;
`
const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    @media (max-width: 550px) {
        flex-direction: column;
        align-items: center;
    }
`
const OutlineButton = styled.button`
    width: 263px;
    height: 75px;
    border-radius: 5px;
    color: rgb(${colors.fontColor});
    font-size:46px;
    background: #D35BFF;
    margin: -15% 0;
    transition: all 0.2s ease-out;
    @media (max-width: 720px) {
        width: 100px;
        height: 35px;
        font-size:20px;
    }
    &:hover {
        cursor: pointer;
        color: rgb(${colors.main});
        // background: rgb(${colors.fontColor});
    }
`
const NoBorderButton = styled(OutlineButton)`
    border: none;
`

const SocialIcon = styled.img`
    width: 100%;
    height: 100%;
    &:hover {
        cursor: pointer;
        text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em darkblue
    }
`
const SocialTag = styled.a`
    width: 40%;
    height: 10%;
    margin-right:3%;
    @media (max-width: 560px) {
        width: 100%;
        margin-top:-2%;
    }
`
const IconList = styled.div`
    width: 50%;
    height: 7%;
    margin: 0 auto 0 auto;
    flex-direction: row;
    justify-content:space-between;
    display: flex;
`

function BannerContent() {
    const classes = useStyles();
    return (
        <div style={{ alignItems: 'center', justifyContent: 'center', width: '100%', paddingBottom: '12%' }}>
            <BannerImg src={bannerImage} />
            <div style={{ alignItems: 'center', justifyContent: 'center', width: '100%', display: 'flex', marginTop: '-12%' }}>
                <OutlineButton><a href="#footer">Mint now</a></OutlineButton>
            </div>
            <IconList style={{ marginTop: '2%' }}>
                <SocialTag target="_blank" href="https://discord.gg/d9K7FXF4YB"><SocialIcon src={discardIcon} ></SocialIcon></SocialTag>
                <SocialTag target="_blank" href="https://twitter.com/ShibaSocietyNFT"><SocialIcon src={telegramIcon} ></SocialIcon></SocialTag>
            </IconList>
        </div >
    )
}

export default BannerContent
