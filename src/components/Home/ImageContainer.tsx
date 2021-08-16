import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../styles'


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
}));

const Container = styled.div`
    width: 80%;
    margin: 0 auto 4em auto;
`
const Description = styled.p`
    color: white;
    font-size: 26px;
    margin-top:30px;
`
const Description1 = styled.p`
    color: white;
    font-size: 26px;
    margin-top:60px;
    margin-bottom:60px;
`
const Title = styled.p`
    color: white;
    font-size: 48px;
`

const ImageContainer = () => {
    const classes = useStyles();
    return (
        <Container>
            <Title style={{ width: '100%', textAlign: 'center' }}>RELEASE THE SHIBA ARMY</Title>
            <Description1>
                Who are we?
            </Description1>
            <Description>
                We are the free thinkers of the New World. We approach this world together with a calm dignity that is uniquely our own, strong-willed and confident.
            </Description>
            <Description>
                You cannot keep us on a leash. We will not bow down to sheltered and close-minded authorities who do not understand the life-changing and transformative world of which we live and play.
            </Description>
            <Description>
                Our strength comes from our community, loyal, protective, and highly intelligent. Some call us the Doge killer but it is only due to our competitive nature, known for our bold and fiery personalities. Competition is what breeds continual improvement.
            </Description>
            <Description>
                We are Shiba Society and it's time for our calling. Release the Shiba Army!
            </Description>
        </Container>
    )
}

export default ImageContainer;