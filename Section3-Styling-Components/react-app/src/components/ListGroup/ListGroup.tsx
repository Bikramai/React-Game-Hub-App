import { useState } from "react";
import './ListGroup.css';

interface Props {
  items: string[];
  heading: string;
  onSelectionItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectionItem }: Props) {
  const [selectionIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectionIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectionItem(item)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
