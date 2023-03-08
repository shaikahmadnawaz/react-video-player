import React from "react";
import { Modal } from "antd";

const VideoModal = ({ visible, onCancel, videoUrl }) => {
  return (
    <Modal visible={visible} onCancel={onCancel} footer={null}>
      <video width="100%" height="auto" controls>
        <source src={videoUrl} type="video/mp4" />
      </video>
    </Modal>
  );
};

export default VideoModal;
