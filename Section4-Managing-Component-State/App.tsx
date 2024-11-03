function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Bikram",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
  };
}
