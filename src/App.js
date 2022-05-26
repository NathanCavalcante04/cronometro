import React from "react"
import styled from  "styled-components"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
  margin: 0 ;
  padding:0;
  
  
};

`
const PAI = styled.div`
color:black;

`
const FILHO = styled.div`
width:100%;
display:flex;
color:black;


`
const BUTAO = styled.button`
width:10vw;
height:10vw;

`


export default class App extends React.Component{

   state = {
     number: 0 
   }

   start = () => {
     const ParaIrmao = setInterval (()=>{
     this.setState({number: this.state.number +1})
     },1000)

     this.stop = ()=>{
      clearInterval(ParaIrmao)
     }
    }

    restart = ()=>{
      this.setState({number:0})
    }


  render(){
    return(
      <PAI>
      <GlobalStyle/>
      <h1>{this.state.number}</h1>
      <FILHO>
   <BUTAO onClick={this.start}>start</BUTAO>
   <BUTAO onClick={this.restart}>restart</BUTAO>
    <BUTAO onClick={this.stop}>stop</BUTAO>
    </FILHO>
    </PAI>
    )
  }
}