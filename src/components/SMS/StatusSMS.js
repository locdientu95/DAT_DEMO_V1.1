import React from "react";
import "./SMS.scss";
import DataTable from "react-data-table-component";

function StatusSMS(props) {
  const paginationComponentOptions = {
    rowsPerPageText: "Số hàng",
    rangeSeparatorText: "đến",
    selectAllRowsItem: true,
    selectAllRowsItemText: "tất cả",
  };

  const column = [
    {
      name: "Thời gian",
      code: "datetime",
      selector: (row) => row.datetime,
    },
    {
      name: "Người nhận",
      code: "customer",
      selector: (row) => row.customer,
    },
    {
      name: "Số lượng tin",
      code: "quantity",
      selector: (row) => row.quantity,
    },
    {
      name: "Giá tiền",
      code: "price",
      selector: (row) => row.price,
    },
  ];

  const data = [
    {
      datetime: "30/10/2023",
      customer: "Mr. A",
      quantity: 60,
      price: 100,
    },
  ];
  return (
    <div>
      <DataTable
        columns={column}
        data={data}
        pagination
        paginationComponentOptions={paginationComponentOptions}
      ></DataTable>
    </div>
  );
}

export default StatusSMS;
