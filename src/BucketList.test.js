import React from "react";
import { shallow } from "enzyme";
import { BucketsList } from "./BucketsList";

describe("BucketsList", () => {
  it("renders a table with the correct columns", () => {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Action",
        key: "action",
        render: () => <a>Delete</a>,
      },
    ];
    const buckets = [{ id: 1, name: "Entertainment Videos" }];
    const wrapper = shallow(
      <BucketsList columns={columns} buckets={buckets} />
    );
    expect(wrapper.find("Table").prop("columns")).toEqual(columns);
    expect(wrapper.find("Table").prop("dataSource")).toEqual(buckets);
  });
});
