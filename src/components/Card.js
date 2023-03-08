import React from "react";
import { Card, Button } from "antd";

const { Meta } = Card;

const CardItem = ({ card, onDelete, onEdit, onPlay }) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={card.name} src={card.thumbnail} />}
      actions={[
        <Button onClick={() => onPlay(card)}>Play</Button>,
        <Button onClick={() => onEdit(card)}>Edit</Button>,
        <Button onClick={() => onDelete(card)}>Delete</Button>,
      ]}
    >
      <Meta title={card.name} description={card.description} />
    </Card>
  );
};

export default CardItem;
