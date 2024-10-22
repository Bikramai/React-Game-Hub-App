// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
// import './App.css'
// import ListGroup from "./components/ListGroup";

import { IoCalendarNumber } from "react-icons/io5";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelecItem = (item: string) => {
    console.log(item);
  }
  return (
    <div>
      <IoCalendarNumber color="red" size="80"/>
    </div>
  );
}

export default App;
