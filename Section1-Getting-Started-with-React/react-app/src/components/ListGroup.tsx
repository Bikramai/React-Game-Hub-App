import { MouseEvent } from "react"

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleClick = (e: MouseEvent) => console.log(e)

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map(
          (
            item, index
          ) => (
            <li
              className="list-group-item"
              key={item}
              onClick={handleClick} // event
            >
              {item}
            </li>
          )
        )}
      </ul>
    </>
  );
}

export default ListGroup;
