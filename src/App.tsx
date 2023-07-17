import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/defaultTheme"
import { GlobalStyle } from "./styles/global"
import { BrowserRouter, useLocation } from "react-router-dom"
import { Router } from "./Router"
import { Footer } from "./components/Footer"
import { TopMenu } from "./components/TopMenu"
import { Header } from "./components/Header"

function AppContent() {
  const location = useLocation();
  const showTopMenuAndFooter = location.pathname !== '/inicial';

  return (
    <>

      {showTopMenuAndFooter && <TopMenu />}
      {showTopMenuAndFooter && <Header />}
      <Router />
      {showTopMenuAndFooter && <Footer />}
      {showTopMenuAndFooter && <GlobalStyle />}
    </>
  );
}

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
