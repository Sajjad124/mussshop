import { ThemeProvider } from "@mui/material";
import { Button, Container } from "@mui/material";
import { useEffect } from "react";
import AppBar from "./components/appbar";
import theme from "./styles/theme";

function App() {
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: "#fff" }}>
        <AppBar />
        {/* 
        
        Banner
        Promotions
        Title
        Products
        Footer
        searchbox
        appdrawer
     */}
        {/* <Button variant="contained">Hello</Button> */}
      </Container>
    </ThemeProvider>
  );
}

export default App;
