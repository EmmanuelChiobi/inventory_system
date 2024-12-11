import { Typography } from "@mui/material";
import React from "react";
import Product from "./Product";
import { DataGrid } from "@mui/x-data-grid";
import productList from "./productList";
export default function Products() {
  const columns = [
    {
      field: "id",
      headerName: "Item ID",
      width: 90,
      description: "id of the product",
    },
    {
      field: "product",
      headerName: "Product",
      width: 250,
      description: "",
      //same here we have the cell data which i will get the value of the cells in the tables cellData.row.fieldName

      renderCell: (cellData) => {
        console.log("the cell data is : ", cellData.row.product);
        return <Product productName={cellData.row.product} />;
      },
    },
    {
      field: "details",
      headerName: "Description",
      width: 550,
      description: "category of the product",
    },
    {
      field: "price",
      headerName: "Price",
      width: 150,
      description: "price of the product",
      valueGetter: (params) => "$" + params.row.price,
    },
    {
      field: "location_id",
      headerName: "In-Store Location ID",
      width: 150,
      description: "location id of the product",
    },
    {
      field: "supplier_id",
      headerName: "Supplier ID",
      width: 90,
      description: "id of the product supplier",
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 200,
      description: "how many items in the stock",
      valueGetter: (params) => params.row.stock + " pcs",
    },
    {
      field: "reorder",
      headerName: "Reorder Level",
      width: 200,
      description: "if stock reaches this number, reorder from supplier",
      valueGetter: (params) => params.row.reorder + " pcs",
    },
    {
      field: "exp_date",
      headerName: "Expiration Date",
      width: 150,
      description: "expiration date of the product",
    },
  ];

  return (
    <div>
      <DataGrid
        sx={{ borderLeft: 0, borderRight: 0, borderRadius: 0 }}
        rows={productList}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
      />
    </div>
  );
}
