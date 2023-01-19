import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item.jsx";
import { selectors as itemsSelectors } from "../slices/itemSlice.js";
import "../styles/items-list.sass";

const ItemsList = () => {
  const { entities } = useSelector((state) => state.items);
  const items = Object.values(entities).map((v) => v);

  return (
    <div className="items-list">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemsList;
