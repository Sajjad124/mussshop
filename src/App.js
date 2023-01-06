import { Button, Container } from "@mui/material";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);
  return (
    <Container maxWidth="xl" sx={{ background: "#fff" }}>
      {/* 
        AppBar
        Banner
        Promotions
        Title
        Products
        Footer
        searchbox
        appdrawer
     */}
      <Button>Hello</Button>
    </Container>
  );
}

export default App;
