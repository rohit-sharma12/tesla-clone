import React from 'react'
import styled from 'styled-components'
import Section from './Section';

function Home() {
  return (
    <Container>
     <video src="images/home.mp4" muted autoPlay loop/>
      <Section
        title="Model S"
        description="Oredr Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Oredr"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model 3"
        description="Oredr Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom Oredr"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model X"
        description="Oredr Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom Oredr"
        rightBtnText="Existing inventory"
      />
      <Section title="Model Y"
        description="Oredr Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom Oredr"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Cyber Truck"
        description="Schedule a Virtual Consultant"
        backgroundImg="cybertruck.jpg"
        leftBtnText="Custom Oredr"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Solar panels"
        description="Schedule a Virtual Consultant"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Custom Oredr"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Solar roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Custom Oredr"
        rightBtnText="Existing inventory"
      />
   
        <Section title="Accessories"
        description="Oredr Online for Touchless Delivery"
        backgroundImg="accessories.jpg"
        leftBtnText="Custom Oredr"
      />
      
    </Container>
  )
}

export default Home

const Container = styled.div`
height: 100vh;
`


