import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/defaultTheme"
import { GlobalStyle } from "./styles/global"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { Footer } from "./components/Footer"
import { TopMenu } from "./components/TopMenu"
import { Header } from "./components/Header"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <TopMenu />
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
