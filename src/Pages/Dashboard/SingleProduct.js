import React from 'react';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Box, InputLabel } from "@mui/material";

///////////////  Select menu ////////////////////
import FormControl from "@mui/material/FormControl";
import Button from '@restart/ui/esm/Button';


const columns = [
  { id: "productName", label: "Product Name", minWidth: 100 },
  { id: "productId", label: "Product ID", minWidth: 100 },
  { id: "productPrice", label: "Product Price", minWidth: 100 },
  {
    id: "serviceName",
    label: "Action",
    minWidth: 100,
    align: "right",
    format: (value) => value,
  },
];

const SingleProduct = ({ row }) => {
   
  

    return (
        <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format
                            ? column.format(
                                <Box sx={{ minWidth: 50, color:"red", }}>
                                <FormControl fullWidth>
                                  <InputLabel id="demo-simple-select-label">
                                      {value}
                                    </InputLabel>
                                  <div className="action-btn">
                                    <Button className="purchase-btn"> Update</Button>
                                    <Button className="purchase-btn">Delete </Button>
                                  </div>
                                  </FormControl>
                                </Box>
                              )
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
    );
};

export default SingleProduct;
