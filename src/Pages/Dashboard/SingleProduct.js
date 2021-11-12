import React from 'react';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/material";

///////////////  Select menu ////////////////////
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


const columns = [
  { id: "patientName", label: "Patient Name", minWidth: 100 },
  { id: "date", label: "Schedule", minWidth: 100 },
  {
    id: "serviceName",
    label: "Action",
    minWidth: 80,
    align: "center",
    format: (value) => value,
  },
];

const SingleProduct = ({ row }) => {
    const [visit, setVisit] = React.useState("");

    console.log(row);
     const handleChange = (event) => {
    setVisit(event.target.value);
  };
    return (
        <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {/* {value} */}

                          {/* {column.format 
                            ? column.format(<Box><Button variant="contained"> View</Button> <Button variant="contained"> Delete</Button> </Box>)
                            : value} */}
                          {column.format
                            ? column.format(
                                <Box sx={{ minWidth: 50, color:"red", }}>
                                  <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                      Action
                                    </InputLabel>
                                    <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      value={visit}
                                      label="Age"
                                      onChange={handleChange}
                                    >
                                      <MenuItem sx={{color:'red' }} value={'NotVisited'}> Not Visited </MenuItem>
                                      <MenuItem value={'Visited'}>Visited</MenuItem>
                                      <MenuItem value={'Prescription'}>Prescription</MenuItem>
                                    </Select>
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
