import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import './App.css'
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelecItem = (item: string) => {
    console.log(item);
  }
  return (
    <div>
      <ListGroup items={items} heading="cities" onSelectionItem={handleSelecItem}/>
    </div>
  );
}

export default App;
