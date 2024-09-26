function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (  // rendering ListGroup dynamically
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
