import React from 'react';
import styled from 'styled-components';
import { Zoom } from 'react-awesome-reveal';
import { Fade } from 'react-awesome-reveal';

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {

    return (
        <Wrap bgImage={backgroundImg}>
            <Zoom >
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Zoom>

            <Buttons>
                <Fade>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        {rightBtnText &&
                            <RightButton>
                                {rightBtnText}
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                <DownArrow src='/images/down-arrow.svg' />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
width: 92vw;
height: 100vh;
margin-left: 4vw;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-image: ${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
padding-top: 15vh;
text-align: center;
font-size: 25px;
`


const ButtonGroup = styled.div`
display: flex;
margin-bottom: 30px;
@media(max-width: 765px) {
flex-direction: column}
`
const LeftButton = styled.div`
   background-color: #3E6AE1;
   height: 40px;
   width: 250px;
   color: white;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 100px;
   opacity: 0.85;
   text-transform: uppercase;
   font-size: 12px;
   cursor: pointer;
   margin: 8px;
`

const RightButton = styled(LeftButton)`
background: white;
opacity: 0.65;
color: black;
`
const DownArrow = styled.img`
height: 40px;
animation: animateDown infinite 1.5s;
margin-left: 250px;
overflow-x: hidden;
@media(max-width: 765px) {
margin-left: 115px;
}
`
const Buttons = styled.div`
`