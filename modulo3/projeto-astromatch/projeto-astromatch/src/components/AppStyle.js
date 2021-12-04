import { createGlobalStyle } from "styled-components"
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
	margin: 0;
    padding: 0;
	box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   }

   a {
       color: black;
   }
`

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
`

export const MainContainer = styled.div`
  background-color: white;
  width: 360px;
  height: 560px;
  border: 1px solid gray;
  border-radius: 5px;
`
