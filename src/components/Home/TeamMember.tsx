import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../styles'
import arrow from '../../assets/images/arrow.png';
import { display } from '@material-ui/system';

interface Props {
    url: string;
    url1: string;
    title: string;
}

const useStyles = makeStyles((theme) => ({
    imgCont: {
        display: 'flex',
        justifyContent: 'center',
    },
    ContentList: {
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },
    contentArea:{
        flexDirection:'row',
        backgroundColor:'black',
        alignItems:'center',
        borderRadius:10,
        
    }
}));

const Container = styled.div`
    width: 80%;
    margin: 64px auto 0 auto;
    padding:0;
`
const Description = styled.p`
    color: white;
    font-size: 24px;
    line-height:2;
    color: #D35BFF;
    margin:0;
`
const Description1 = styled.p`
    color: white;
    font-size: 16px;
    color: rgb(${colors.white});
    margin:0;
`
const Title = styled.p`
    color: white;
    font-size: 36px;
    margin-bottom:50px;
`
const ContainerImg = styled.img`
    width: 80px;
    height: 80px;
    margin-right:3%;
`
const ContentArea = styled.div`
    width:49%;
    height: 140px;
    border: 1px solid rgba(${colors.white});
    justify-content:center;
    align-items:center;
    display:flex;
    @media (max-width: 1000px) {
        width:100%;
        margin-bottom:20px;
    }
`
const ContentList = styled.div`
    width:100%;
    flex-direction: row;
    justify-content:space-between;
    display: flex;
    margin-bottom:50px;
    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
    }
`

const ImageContainer1: React.FC<Props> = ({ url, url1, title }) => {
    const classes = useStyles();
    return (
        <Container>
            <Title style={{ width: '100%', textAlign: 'center' }}>{title}</Title>
            <ContentList>
                <ContentArea className = {classes.contentArea}>
                    <ContainerImg src={url} />
                    <div style={{marginTop:-30}}>
                        <Description>
                            TOMMY DAWGS
                        </Description>
                        <Description1>
                            A kid at heart. Here to meme with new paw friends.
                        </Description1>
                    </div>
                </ContentArea>
                <ContentArea className = {classes.contentArea}>
                    <ContainerImg src={url1} />
                    <div style={{marginTop:-30}}>
                        <Description>
                            ZU DOGGY DOGG
                        </Description>
                        <Description1>
                            Chillin' killin' illin'. Doing his thang, with doggies he hangs.
                        </Description1>
                    </div>
                </ContentArea>
            </ContentList>
            <Title style={{ width: '100%', textAlign: 'center' }}>BUY SHIBBYS</Title>
        </Container >
    )
}

export default ImageContainer1;