import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useState,useEffect } from 'react';
import { useTheme } from "@mui/material";

const Table2 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);



  const [data, setData] = useState([]); //For country/sector
  useEffect(() => {
    fetch('https://13.127.29.150/table')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

   const [pageSize, setPageSize] = useState(10)



  const columns1 = [
    {
      field: "country",
      headerName: "Country",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "pestle",
      headerName: "Pestle",
      flex: 1,
      cellClassName: "name-column--cell1",
    },
    {
      field: "sector",
      headerName: "Sector",
      flex: 1,
      cellClassName: "name-column--cell1",
    },
    {
      field: "insight",
      headerName: "Insight",
      flex: 2,
      cellClassName: "name-column--cell2",
    },
    {
      field: "topic",
      headerName: "Topic",
      flex: 1,
      cellClassName: "name-column--cell2",
    },
    {
      field: "source",
      headerName: "Source",
      flex: 1.2,
      cellClassName: "name-column--cell2",
    },
    {
      field: "title",
      headerName: "Title",
      flex:4,
      cellClassName: "name-column--cell1",
    },
  ];
  const columns2 = [
    {
      field: "region",
      headerName: "Region",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "pestle",
      headerName: "Pestle",
      flex: 1,
      cellClassName: "name-column--cell1",
    },
    {
      field: "sector",
      headerName: "Sector",
      flex: 1,
      cellClassName: "name-column--cell1",
    },
    {
      field: "insight",
      headerName: "Insight",
      flex: 2,
      cellClassName: "name-column--cell2",
    },
    {
      field: "topic",
      headerName: "Topic",
      flex: 1,
      cellClassName: "name-column--cell2",
    },
    {
      field: "source",
      headerName: "Source",
      flex: 1.2,
      cellClassName: "name-column--cell2",
    },
    {
      field: "title",
      headerName: "Title",
      flex:4,
      cellClassName: "name-column--cell1",
    },
  ];
  

  return (
    <>
    <Box m="20px" >
    <Typography variant="h1" color={colors.grey[100]} fontWeight="bold">COUNTRIES</Typography>
    <Typography variant="h3" color={colors.grey[300]} fontWeight="bold">Pest & Swot Analisys</Typography>
          <Typography variant="h5" color='orange'>
              Number of Sectors
              <span style={{color:colors.grey[100]}}> & </span>
              Pestles of each Country with their respective Title
              <span style={{color:colors.grey[100]}}> & </span> 
              Insights 
          </Typography>
      <Box
        m="40px 0 10 0"
        height="90vh"
        overflow= "auto" 
        sx={{
          "& .MuiDataGrid-root": {
             border: "none",
             overflow: "auto",
             minWidth: {xs:'1100px',sm:'1100px',md:'1100px',lg:'1000px'}
          },
        }}
        
      >
        <DataGrid
          sx={{
          "& .MuiDataGrid-root": {
             border: "none",
             overflow: "auto",
             minWidth: {xs:'1100px',sm:'1100px',md:'1100px',lg:'1000px'}
          },
          "& .MuiDataGrid-cell": {
             borderBottom: `2px solid ${colors.grey[300]}`,
           
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
            fontSize:16
          },
          "& .name-column--cell1": {
            // color: colors.greenAccent[300],
            fontSize:15
          },
          "& .name-column--cell2": {
            color: colors.grey[300],
            fontSize:14
          },
          "& .MuiDataGrid-columnHeaders": {
            bgcolor:  colors.blueAccent[400],
            borderBottom: "none",
            borderRadius: "10px 10px 0px 0px",
            height:"30px",
            fontSize:16,
            
          },
          "& .MuiDataGrid-virtualScroller": {
            bgcolor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            borderRadius: "0px 0px 10px 10px",
            fontSize:16,
            bgcolor: colors.blueAccent[400],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
            fontSize:14,
          },
          "&::-webkit-scrollbar-track":{
             borderRadius:'5px',
             bgcolor: colors.blueAccent[200],
          },
          "&::-webkit-scrollbar-thumb" :{
             borderRadius:'5px',
             bgcolor: colors.blueAccent[100],
          },
          
        }}
          rows={data}
          columns={columns1}
          getRowHeight={() => 'auto'}
          components={{ Toolbar: GridToolbar }}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[10, 20, 30]}
          pagination
          {...data}
        />
      </Box>
    </Box>
    <Box m="20px">
      <Typography variant="h1" color={colors.grey[100]} fontWeight="bold">REGIONS</Typography>
      <Typography variant="h3" color={colors.grey[300]} fontWeight="bold">Pest & Swot Analisys</Typography>
          <Typography variant="h5" color='orange'>
              Number of Sectors
              <span style={{color:colors.grey[100]}}> & </span>
              Pestles of each Country with their respective Title
              <span style={{color:colors.grey[100]}}> & </span> 
              Insights 
          </Typography>
      
      <Box
        m="40px 0 10 0"
        height="90vh"
        overflow= "auto"
        sx={{
          "& .MuiDataGrid-root": {
             border: "none",
             overflow: "auto",
             minWidth: {xs:'1100px',sm:'1100px',md:'1100px',lg:'1000px'}
          },
        }} 
      >
        <DataGrid
          sx={{
          "& .MuiDataGrid-root": {
             border: "none",
             overflow: "auto",
             minWidth: {xs:'1100px',sm:'1100px',md:'1100px',lg:'1000px'}
          },
          "& .MuiDataGrid-cell": {
             borderBottom: `2px solid ${colors.grey[300]}`,
           
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
            fontSize:16
          },
          "& .name-column--cell1": {
            // color: colors.greenAccent[300],
            fontSize:15
          },
          "& .name-column--cell2": {
            color: colors.grey[300],
            fontSize:14
          },
          "& .MuiDataGrid-columnHeaders": {
            bgcolor:  colors.blueAccent[400],
            borderBottom: "none",
            borderRadius: "10px 10px 0px 0px",
            height:"30px",
            fontSize:16,
            
          },
          "& .MuiDataGrid-virtualScroller": {
            bgcolor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            borderRadius: "0px 0px 10px 10px",
            fontSize:16,
            bgcolor: colors.blueAccent[400],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
            fontSize:14,
          },
          "&::-webkit-scrollbar-track":{
             borderRadius:'5px',
             bgcolor: colors.blueAccent[200],
          },
          "&::-webkit-scrollbar-thumb" :{
             borderRadius:'5px',
             bgcolor: colors.blueAccent[100],
          },
          
        }}
          rows={data}
          columns={columns2}
          getRowHeight={() => 'auto'}
          components={{ Toolbar: GridToolbar }}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[10, 20, 30]}
          pagination
          {...data}
        />
      </Box>
    </Box>
    </>
    
  );
};

export default Table2;
