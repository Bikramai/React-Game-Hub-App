import { useState } from "react";
import './ListGroup.css';
import styled from "styled-components";


const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${ props => (props.active ? 'blue' : 'none') }
`

interface Props {
  items: string[];
  heading: string;
  onSelectionItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectionItem }: Props) {
  const [selectionIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectionIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectionItem(item)
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
