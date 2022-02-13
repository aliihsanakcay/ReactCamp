import React from "react";
import './App.css';
import Container from "./Container";
import { GlobalProvider } from "./context/GlobalContext";

function App() {

  return (
    <div className="App">
      <GlobalProvider>
        <Container />
      </GlobalProvider>
    </div>
  );
}

export default App;
