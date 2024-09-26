function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = []

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p> }
      <ul className="list-group">
        {items.map((item) => (  // rendering ListGroup dynamically
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
