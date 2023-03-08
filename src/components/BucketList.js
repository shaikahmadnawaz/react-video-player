import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Input, List, Modal } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchBuckets,
  addBucket,
  updateBucket,
  deleteBucket,
} from "../actions/buckets";

function BucketList() {
  const dispatch = useDispatch();
  const buckets = useSelector((state) => state.buckets);
  const [visible, setVisible] = useState(false);
  const [editing, setEditing] = useState(false);
  const [currentBucket, setCurrentBucket] = useState({});

  useEffect(() => {
    dispatch(fetchBuckets());
  }, [dispatch]);

  const handleAddBucket = (name) => {
    dispatch(addBucket(name));
    setVisible(false);
  };

  const handleEditBucket = (id, name) => {
    dispatch(updateBucket(id, name));
    setVisible(false);
  };

  const handleDeleteBucket = (id) => {
    dispatch(deleteBucket(id));
  };

  const handleEditClick = (bucket) => {
    setCurrentBucket(bucket);
    setEditing(true);
    setVisible(true);
  };

  const handleDeleteClick = (id) => {
    Modal.confirm({
      title: "Are you sure you want to delete this bucket?",
      okText: "Yes",
      cancelText: "No",
      onOk: () => handleDeleteBucket(id),
    });
  };

  const handleCancel = () => {
    setVisible(false);
    setEditing(false);
    setCurrentBucket({});
  };

  const modalTitle = editing ? "Edit Bucket" : "Add Bucket";

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2>Buckets</h2>
        <Button type="primary" onClick={() => setVisible(true)}>
          <PlusOutlined /> Add Bucket
        </Button>
      </div>
      <List
        size="large"
        bordered
        dataSource={buckets}
        renderItem={(bucket) => (
          <List.Item
            actions={[
              <EditOutlined
                key="edit"
                onClick={() => handleEditClick(bucket)}
              />,
              <DeleteOutlined
                key="delete"
                onClick={() => handleDeleteClick(bucket.id)}
              />,
            ]}
          >
            <Link to={`/buckets/${bucket.id}`}>{bucket.name}</Link>
          </List.Item>
        )}
      />
      <Modal
        visible={visible}
        title={modalTitle}
        okText="Save"
        onCancel={handleCancel}
        onOk={
          editing
            ? () => handleEditBucket(currentBucket.id, currentBucket.name)
            : () => handleAddBucket(currentBucket.name)
        }
      >
        <Input
          placeholder="Bucket Name"
          value={currentBucket.name}
          onChange={(e) =>
            setCurrentBucket({ ...currentBucket, name: e.target.value })
          }
        />
      </Modal>
    </div>
  );
}
