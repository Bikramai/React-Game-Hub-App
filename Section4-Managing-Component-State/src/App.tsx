import { useState } from "react";
import ListGroup from "./components/ListGroup";

// PascalCasing
function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelecItem = (item: string) => {
    console.log(item);
  };

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Bikram",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "John" } });
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="cities"
        onSelectionItem={handleSelecItem}
      />
    </div>
  );
}

export default App;
