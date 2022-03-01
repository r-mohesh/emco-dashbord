import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Announcement from '../Component/Announcement';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';
import Newsletter from '../Component/Newsletter';
import { mobile } from '../Responsive';

const Container=styled.div``;
const Wrapper=styled.div`
padding: 50px;
display: flex;
${mobile({padding:'10px',flexDirection:'column'})}

`;
const ImageContainer=styled.div`
flex: 1;
`;
const Image=styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({height:'40vh'})}

`;
const InfoContainer=styled.div`
flex: 1;
padding: 0px 50px;
${mobile({padding:'10px'})}
`;
const Title=styled.h2`
font-weight: 200;

`;
const Desc=styled.p`
margin: 20px 0px;
`;
const Price=styled.span`
font-weight: 100;
font-size: 40px;
`;
const FilterContainer=styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
${mobile({width:'100%'})}

`;
const Filter=styled.div`
display: flex;
align-items: center;
`;
const FilterTitle=styled.span`
font-size: 20px;
font-weight: 200;
`;
const FilterColor=styled.div`
width: 20px;
height: 20px;
border-radius:50%;
background-color: ${props=>props.color};
margin: 0px 5px;
cursor: pointer;
`;
const FilterSize=styled.select`
margin-left: 10px;
padding: 5px;
`;
const FilterOption=styled.option``;
const AddContainer=styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({width:'100%'})}

`;
const AmountContainer=styled.div`
display: flex;
align-items: center;
font-weight: 700;
`;
const Amount=styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`;
const Button=styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover{
  background-color: #f8f4f4;
}
`;

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImageContainer>
                <Image src='https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'/>
            </ImageContainer>
            <InfoContainer>
                <Title>Denim Jeans</Title>
                <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit praesentium dignissimos exercitationem asperiores mollitia sapiente hic eligendi vero, est accusantium.</Desc>
                <Price>$20</Price>
                <FilterContainer>
                  <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color='blue'/>
                    <FilterColor color='black'/>
                    <FilterColor color='grey'/>
                  </Filter>
                  <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                      <FilterOption>XS</FilterOption>
                      <FilterOption>S</FilterOption>
                      <FilterOption>M</FilterOption>
                      <FilterOption>L</FilterOption>
                      <FilterOption>XL</FilterOption>
                    </FilterSize>
                  </Filter>
                </FilterContainer>
                <AddContainer>
                  <AmountContainer>
                  <Remove/>
                  <Amount>1</Amount>
                  <Add/>
                  </AmountContainer>
                  <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product