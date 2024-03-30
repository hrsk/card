import styled from 'styled-components'

import card_image from './assets/images/card_image.jpeg'

const Container = styled.div`

  display: flex;
  flex-direction: column;
  width: 300px;
  height: 350px;
  background: #FFFFFF;
  border-radius: 15px;

  box-shadow: 0px 4px 20px 5px #0000001A;
`

const Content = styled.div`

padding: 10px;

`
const Image = styled.img`

  width: 280px;
  height: 170px;
  border-radius: 10px;
  margin-bottom: 20px;

`

const Title = styled.h1`

  width: 70px;
  height: 19px;

  margin: 0;
  margin-left: 10px ;
  margin-bottom: 20px;


  font: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 19.36px;
  text-align: left;
  color: #000000;

`

const Text = styled.p`

width: 260px;
height: 40px;
margin: 0;
margin-left: 10px;
margin-bottom: 19px;

font: Inter;
font-size: 12px;
font-weight: 500;
line-height: 20px;
text-align: left;

color: #ABB3BA;

`

const Button = styled.button<{ bgc?: string, color: string, mrgL?: string }>`
  
  width: 86px;
  height: 30px;
  margin-left: ${props => props.mrgL};
  border-radius: 5px;
  align-items: center;
  text-align: center;

  font: Inter;
  font-size: 10px;
  font-weight: 700;
  line-height: 20px;

  color: ${props => props.color};

  border: 2px solid #4E71FE;
  background-color: ${props => props.bgc} 
`

const ButtonsBlock = styled.div`

  margin-left: 10px;
  margin-bottom: 12px;

`

export const Card = () => {
  return (
    <Container>
      <Content>
        <Image src={card_image}></Image>
        <Title>Headline</Title>
        <Text>
          Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
        </Text>
        <ButtonsBlock>
          <Button bgc='#4E71FE' color='#FFFFFF'>See more</Button>
          <Button mrgL='12px' bgc='#FFFFFF' color='#4E71FE'>Save</Button>
        </ButtonsBlock>
      </Content>
    </Container>
  )
}
