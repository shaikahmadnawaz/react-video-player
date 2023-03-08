import React from "react";
import Bucket from "./Bucket";

const BucketList = ({ buckets, onDelete, onEdit, onMove }) => {
  return (
    <div>
      {buckets.map((bucket) => (
        <Bucket
          key={bucket.id}
          bucket={bucket}
          onDelete={onDelete}
          onEdit={onEdit}
          onMove={onMove}
        />
      ))}
    </div>
  );
};

export default BucketList;
