import React from "react";
import { useDispatch } from "react-redux";
import { actions as itemsActions } from "../slices/itemSlice";
import Photo from '../../public/assets/images/Photo.png';
import "../styles/item.sass";

const Item = ({ item }) => {
  const dispatch = useDispatch();
  const { id, active, flavor, weight, hovered, selected } = item;
  const image = new Image();
  image.src = Photo;

  const flavors = {
    fish: "с рыбой",
    chicken: "с курой",
    fuagra: "с фуа-гра",
  };

  const bottomTextElements = {
    default: (
      <p className="item__bottom-text">
        Чего сидишь? Порадуй котэ, <span onClick={handleClick}>купи.</span>
      </p>
    ),
    fish: <p className="item__bottom-text">Головы щучьи с чесноком, да свежайшая сёмгушка.</p>,
    fuagra: <p className="item__bottom-text">Печень утки разварная с артишоками.</p>,
    chicken: <p className="item__bottom-text">Филе из цеплят с трюфелями в бульоне.</p>,
    inactive: <p className="item__bottom-text">Печалька, {flavors[flavor]} закончился.</p>,
  };

  const bottomTextElement = selected ? bottomTextElements[flavor]: bottomTextElements.default;

  function handleMouseEnter() {
    dispatch(itemsActions.updateItem({ id, changes: { hovered: true } }));
  };

  function handleMouseLeave() {
    dispatch(itemsActions.updateItem({ id, changes: { hovered: false } }));
  };

  function handleClick() {
    dispatch(itemsActions.updateItem({ id, changes: { selected: !selected } }));
  };

  return (
    <div className="item__container">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={active ? handleClick : null}
        className={`item item_${selected ? "selected" : "default"} ${active ? '' : 'item_inactive'}`}>
        <div className="item__description">
          <p className="slogan">
            {selected && hovered ? "Котэ не одобряет?" : "Сказочное заморское яство"}
          </p>
          <h2 className="brand-name">Нямушка</h2>
          <p className="flavor">{flavors[flavor]}</p>
        </div>
        <div className="item__weight">
          <p className="value">{weight}</p>
          <p className="unit">кг</p>
        </div>
        <div className="item__image-container" />
      </div>
      {active
        ? bottomTextElement
        : bottomTextElements.inactive}
    </div>
  );
};

export default Item;
