import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Announcement from '../Component/Announcement';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';
import { mobile } from '../Responsive';

const Container = styled.div``;
const Wrapper = styled.div`
padding: 20px;
${mobile({padding:'10px'})}

`;
const Title = styled.h2`
font-weight: 300;
text-align: center;
`;
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;
const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props => props.type === 'filled' && 'none'};
background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
color: ${props => props.type === 'filled' && 'white'};
`;

const TopTexts = styled.div`
${mobile({display:'none'})}
`;
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`;
const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection:'column'})}
`;
const Info = styled.div`
flex: 3;
`;
const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection:'column'})}
`;
const ProductDetail = styled.div`
flex: 2;
display: flex;
`;
const Image = styled.img`
width: 200px;
`;
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const ProductAmountContainer=styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`;
const ProductAmount=styled.div`
font-size: 24px;
margin: 5px;
${mobile({margin:'5px 15px'})}
`;
const ProductPrice=styled.div`
font-size: 30px;
font-weight: 200;
${mobile({marginBottom:'20px'})}
`;
const Hr=styled.hr`
background-color: #ebe2e2;
border: none;
height: 1px;
`;
const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`;
const SummaryTitle=styled.h2`
font-weight: 200;
`;
const SummaryItem=styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type==='total' && '500'};
font-size: ${props=>props.type==='total' && '24px'};
`;
const SummaryItemText=styled.span``;
const SummaryItemPrice=styled.span``;
const Button=styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your WishList(0)</TopText>
          </TopTexts>
          <TopButton type='filled'>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1619487269-tr3mmst080-shoe-angle-global-mens-tree-runner-mist-white-b11537e4-5c45-4443-a1dd-c70c31779715-png-1619487255.jpg?crop=1xw:1xh;center,top&resize=480:*' />
                <Details>
                  <ProductName><b>Product:</b>RUNNING SHOES</ProductName>
                  <ProductId><b>ID:</b>12345</ProductId>
                  <ProductColor color='darkgrey' />
                  <ProductSize><b>Size:</b>M</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add/>
                  <ProductAmount>2</ProductAmount>
                  <Remove/>
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr/>
            <Product>
              <ProductDetail>
                <Image src='https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI=' />
                <Details>
                  <ProductName><b>Product:</b>RUNNING SHOES</ProductName>
                  <ProductId><b>ID:</b>12345</ProductId>
                  <ProductColor color='blue' />
                  <ProductSize><b>Size:</b>M</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add/>
                  <ProductAmount>2</ProductAmount>
                  <Remove/>
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 100</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shiiping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type='total'>
              <SummaryItemText >Total</SummaryItemText>
              <SummaryItemPrice>$ 100</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart;