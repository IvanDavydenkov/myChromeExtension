import React, {useState} from "react";
// import './App.css'
import Button from "./components/Button";
import Container from "./components/Container";

function App() {
  
  const [active, setActive] = useState(false);
  const btnHandler = () => {
    setActive(!active)
  }
  
  return (
    <div>
      <Button btnHandler={btnHandler}/>
      {active && <Container/>}
    </div>
  );
}

export default App;
