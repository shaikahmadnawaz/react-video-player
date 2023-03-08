import React from "react";
import { Input, Button } from "antd";

const BucketItem = ({ bucket, onDelete, onEdit, onMove }) => {
  return (
    <div>
      <Input defaultValue={bucket.name} />
      <Button onClick={() => onEdit(bucket)}>Edit</Button>
      <Button onClick={() => onDelete(bucket)}>Delete</Button>
      <Button onClick={() => onMove(bucket)}>Move</Button>
    </div>
  );
};

export default BucketItem;
