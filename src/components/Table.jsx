import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import dataWithIds from '../data/csvjson';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Title', width: 200 },
  { field: 'price', headerName: 'Price', width: 130 },
  { field: 'address', headerName: 'Address', width: 380 },
  { field: 'area', headerName: 'Area', width: 380 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  return (
    <Paper sx={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={dataWithIds}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
