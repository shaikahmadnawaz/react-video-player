import React from "react";
import { List } from "antd";

const HistoryList = ({ history }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={history}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={<a href={item.url}>{item.name}</a>}
            description={`Played at ${item.playedAt}`}
          />
        </List.Item>
      )}
    />
  );
};

export default HistoryList;
