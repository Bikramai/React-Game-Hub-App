import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  // Hook-A hook is a function that allow us to tap into built-in features in React
  const [selectionIndex, setSelectedIndex] = useState(-1)

  
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map(
          (
            item, index
          ) => (
            <li
              className={ selectionIndex === index ? 'list-group-item active' : 'list-group-item'}
              key={item}
              onClick={() => { setSelectedIndex(index) }} 
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
