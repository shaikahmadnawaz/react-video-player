import React from "react";
import { List } from "antd";
import Card from "./Card";

const CardsList = ({ cards, onDeleteCard, onMoveCard }) => {
  return (
    <List
      dataSource={cards}
      renderItem={(card) => (
        <Card card={card} onDeleteCard={onDeleteCard} onMoveCard={onMoveCard} />
      )}
    />
  );
};

export default CardsList;
