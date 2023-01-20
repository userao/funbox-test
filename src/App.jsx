import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ItemsList from "./components/ItemsList.jsx";
import { actions as itemsActions } from "./slices/itemSlice.js";

const App = () => {
  const items = [
    {
      id: 0,
      active: true,
      flavor: "fuagra",
      weight: "0,5",
      hovered: false,
      selected: false,
    },
    {
      id: 1,
      active: true,
      flavor: "fish",
      weight: "2",
      hovered: false,
      selected: false,
    },
    {
      id: 2,
      active: false,
      flavor: "chicken",
      weight: "5",
      hovered: false,
      selected: false,
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(itemsActions.addItems(items));
  }, []);

  return (
    <>
      <h1 className="header">Ты сегодня покормил кота?</h1>
      <ItemsList />
    </>
  );
};

export default App;
