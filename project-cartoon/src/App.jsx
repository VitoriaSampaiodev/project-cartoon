//import React from "react";
import Header from "./Components/Header/Header"
import { createGlobalStyle } from "styled-components"
import Main from "./Components/Main/Main.jsx"
import Footer from "./Components/Footer/Footer.jsx"

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>

  )
}
export default App