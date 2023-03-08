export const addCard = (card) => {
  return {
    type: "ADD_CARD",
    payload: card,
  };
};

export const deleteCard = (cardId) => {
  return {
    type: "DELETE_CARD",
    payload: { id: cardId },
  };
};

export const moveCard = (cardId, bucketId) => {
  return {
    type: "MOVE_CARD",
    payload: { id: cardId, bucketId: bucketId },
  };
};

export const editCard = (card) => {
  return {
    type: "EDIT_CARD",
    payload: card,
  };
};
