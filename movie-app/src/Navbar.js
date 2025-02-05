import { Component } from "react";
import styled from 'styled-components';

const Nav = styled.div`
  display:flex;
  justify-content: space-between;
   font-family: 'Times New Roman', Times, serif;
  width: 100%;
  height: 70px;
  background:#251bb1;
  color:white;
  &:hover{color: #0f0}
`
const Title = styled.div`
font-size:25px;
margin:20px 25px;
  visibility: ${(props) => props.show?"visible":"hidden"}
 
`
const Image = styled.img`
  width:50px;
`
class Navbar extends Component{
       render(){
        return(
            <>
            <Nav>
                <Title show={true}>MOVIE <span className="title-app">APP</span></Title>
                <div className="nav-icon">
                    <Image src={"https://cdn-icons-png.flaticon.com/128/1170/1170576.png"} alt="cart-icon"/>
                    <span>0</span>
                </div>
                </Nav>
            </>
        )
       }
}

export default Navbar