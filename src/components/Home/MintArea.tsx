import React, { useState } from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';

import { colors } from '../../styles'

import ContentToggleButton from './ContentToggleButton'


const useStyles = makeStyles((theme) => ({
    rootCont: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
        },
    },
    RightRootCont: {
        display: 'flex',
        flexDirection: 'row-reverse',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
        },
    },
    textCont: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
    },
    imgCont: {
        display: 'flex',
        justifyContent: 'center',
    },
    descriptionArea: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        color: 'white',
        fontSize: 30
    },

}));

const Container = styled.div`
    width: 90%;
    margin: 0 auto 2em auto;
`
const DescriptionArea = styled.div`
    width: 90%;
    margin: 0 auto -0.5em auto;
`
const Description = styled.p`
    color: white;
    font-size: 26px;
    margin-top:30px;
`
const Title = styled.p`
    color: white;
    font-size: 48px;
`
const OutlineButton = styled.button`
    width: 263px;
    height: 75px;
    border-radius: 5px;
    color: rgb(${colors.fontColor});
    font-size:46px;
    background: #D35BFF;
    margin: 30px 0;
    transition: all 0.2s ease-out;
    @media (max-width: 720px) {
        width: 150px;
        height: 50px;
        font-size:25px;
    }
    &:hover {
        cursor: pointer;
        color: rgb(${colors.main});
        // background: rgb(${colors.fontColor});
    }
`

const ImageContainer = () => {
    const [isHide1, setIsHide1] = useState(false)
    const [isHide2, setIsHide2] = useState(false)
    const [isHide3, setIsHide3] = useState(false)
    const [isHide4, setIsHide4] = useState(false)
    const [isHide5, setIsHide5] = useState(false)
    const [isHide6, setIsHide6] = useState(false)
    const classes = useStyles();
    return (
        <Container>
            <Title id="FAQ" style={{ width: '100%', textAlign: 'center', marginTop: 70 }}>Frequently Asked Questions</Title>
            <ContentToggleButton
                title="How and where can I purchase a SHIBBY?"
                description1="The first 10,000 SHIBBYS can only be minted on our website for 0.068 ETH each and there is a limit of 10 SHIBBYS per transaction. We recommend using Metamask to mint our SHIBBYS."
                description2={["Once all 10,000 SHIBBYS are minted they can only be purchased via the secondary market on https://opensea.io/. Purchasers will then be able to refresh their metadata on their individual SHIBBY profile on https://opensea.io/ to reveal their SHIBBY. You can also see what is for sale and who wants to trade their SHIBBYS on our ", <a style={{color:'#004aad'}} target="_blank" href="https://discord.gg/d9K7FXF4YB">Discord</a>,  " server."]}
                isHide={isHide1}
                openTxt={() => setIsHide1(!isHide1)}
            />
            <ContentToggleButton 
                title="I minted but can only see a poster saying my SHIBBY is lost!" 
                isHide={isHide2} 
                description1="Don't fret! All minted SHIBBYS from our website will be a blind and unreleased version until all 10,000 SHIBBYS have been sold."
                description2=""
                openTxt={() => setIsHide2(!isHide2)} 
            />
            <ContentToggleButton 
                title="When does the sale start?" 
                isHide={isHide3} 
                description1="If you are reading this then it means the sale has started!"
                description2=""
                openTxt={() => setIsHide3(!isHide3)} 
            />
            <ContentToggleButton 
                title="How will the community grant work?" 
                isHide={isHide4} 
                description1="When our project receives 40% funding, a project team will be established to engage with our community members who want to take on projects but have funding constraints."
                description2=" We want to ensure the grant is given to the person or groups of people who are most deserving and that are aligned with our core values."
                openTxt={() => setIsHide4(!isHide4)} 
            />
            <ContentToggleButton 
                title="What is the royalty %?" 
                isHide={isHide5} 
                description1="The royalty fee for every transaction is 2.5% and all funds will be used to further develop and improve the Shiba Society ecosystem. The more the SHIBBYS that are traded, the more the system improves!"
                description2="We have provided the royalty wallet address here to provide full transparency of transactions of which will support improved governance within our community."
                openTxt={() => setIsHide5(!isHide5)} 
            />
            <ContentToggleButton 
                title="How to contact us" 
                isHide={isHide6} 
                description1={["The Shiba Society team are best contactable via our ", <a style={{color:'#004aad'}} target="_blank" href="https://discord.gg/d9K7FXF4YB">Discord</a>, " and ", <a style={{color:'#004aad'}} target="_blank" href="https://twitter.com/ShibaSocietyNFT">Twitter.</a>," channels. Partnerships, collaborations, new ideas, or even if you just need someone to talk to, our Shibby ears are hear for you, pun intended!"]}
                description2=""
                openTxt={() => setIsHide6(!isHide6)} 
            />
            <div style={{ alignItems: 'center', justifyContent: 'center', width: '100%', display: 'flex', marginTop:30 }}>
                <OutlineButton><a href="#footer">Mint now</a></OutlineButton>
            </div>
        </Container>
    )
}

export default ImageContainer;