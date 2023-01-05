import logo from "./logo.svg";
import "./App.css";
import { Button } from "@mui/material";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);
  return (
    <div className="App">
      <Button>Test</Button>
    </div>
  );
}

export default App;
