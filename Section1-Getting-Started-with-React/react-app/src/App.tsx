import ListGroup from "./components/ListGroup";

// PascalCasing
function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  return (
    <div>
      <ListGroup items={items} heading="cities"/>
    </div>
  );
}

export default App;
