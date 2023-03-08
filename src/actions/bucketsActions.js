export const addBucket = (bucket) => {
  return {
    type: "ADD_BUCKET",
    payload: bucket,
  };
};

export const deleteBucket = (bucketId) => {
  return {
    type: "DELETE_BUCKET",
    payload: { id: bucketId },
  };
};

export const editBucket = (bucket) => {
  return {
    type: "EDIT_BUCKET",
    payload: bucket,
  };
};
