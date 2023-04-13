import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Form from "./components/Form";

function App() {
  
  const [active, setActive] = useState(false);
  const btnHandler = () => {
    setActive(!active);
  };
  
  return (
    <>
      <Button btnHandler={btnHandler} />
      {active && <Form />}
    </>
  );
}

export default App;
