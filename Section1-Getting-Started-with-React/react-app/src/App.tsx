  import Message from "./Message"

// PascalCasing
function App() {
  // JSX: JavaScript XML
  const name = 'Bikram';
  if (name)
    return <h1>Hello {name}</h1>
  return <div><Message /></div>;
}

export default App;