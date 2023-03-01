import { Box,Typography } from "@mui/material";
import { DataGrid, GridToolbar} from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useState,useEffect } from 'react';
import { useTheme } from "@mui/material";


const Table1 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch('https://13.127.29.150/table');
      const jsonData = await res.json();
      setData(jsonData);
    } catch (error) {
      console.log(error);
    }
  };
  fetchData();
}, []);


  const formattedData = data.map(item => {
  const added = new Date(item.added);
  const published = new Date(item.published);
  return {
    ...item,
    added: added.toLocaleString(),
    published: published.toLocaleString()
  };
});

  const [pageSize, setPageSize] = useState(10);


  const columns1 = [
    {
      field: "country",
      headerName: "Country",
      flex: 1.2,
      cellClassName: "name-column--cell"
    },
    {
      field: "pestle",
      headerName: "Pestle",
      flex: 1.2,
      cellClassName: "name-column--cell1",
    },
    {
      field: "sector",
      headerName: "Sector",
      flex: 1.4,
      cellClassName: "name-column--cell1",
    },
    {
      field: "impact",
      headerName: "Impact",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "intensity",
      headerName: "Intensity",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "likelihood",
      headerName: "Likelihood",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "relevance",
      headerName: "Relevance",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "added",
      headerName: "Added",
      flex: 2,
      cellClassName: "name-column--cell2",
    },
    {
      field: "published",
      headerName: "Published",
      flex: 2,
      cellClassName: "name-column--cell2",
    },
    {
      field: "start_year",
      headerName: "Start year",
      flex: 1,
      cellClassName: "name-column--cell1",
    },
    {
      field: "end_year",
      headerName: "End year",
      flex:1,
      cellClassName: "name-column--cell1",
    },
  ];
  const columns2 = [
    {
      field: "region",
      headerName: "Region",
      flex: 2,
      cellClassName: "name-column--cell",
    },
    {
      field: "pestle",
      headerName: "Pestle",
      flex: 1.3,
      cellClassName: "name-column--cell1",
    },
    {
      field: "sector",
      headerName: "Sector",
      flex: 1.6,
      cellClassName: "name-column--cell1",
    },
    {
      field: "impact",
      headerName: "Impact",
      flex:1,
      cellClassName: "name-column--cell",
    },
    {
      field: "intensity",
      headerName: "Intensity",
      flex:1,
      cellClassName: "name-column--cell",
    },
    {
      field: "likelihood",
      headerName: "Likelihood",
      flex:1,
      cellClassName: "name-column--cell",
    },
    {
      field: "relevance",
      headerName: "Relevance",
      flex:1,
      cellClassName: "name-column--cell",
    },
    {
      field: "added",
      headerName: "Added",
      flex: 2,
      cellClassName: "name-column--cell2",
    },
    {
      field: "published",
      headerName: "Published",
      flex: 2,
      cellClassName: "name-column--cell2",
    },
    {
      field: "start_year",
      headerName: "Start year",
      flex: 1,
      cellClassName: "name-column--cell1",
    },
    {
      field: "end_year",
      headerName: "End year",
      flex:1,
      cellClassName: "name-column--cell1",
    },
  ];

  return (
    <>
    <Box m="20px"  >
      <Typography variant="h1" color={colors.grey[100]} fontWeight="bold">REGIONS</Typography>
          <Typography variant="h5" color='orange'>
            Datewise Impact
            <span style={{color:colors.grey[100]}}> | </span>
            Intensity 
            <span style={{color:colors.grey[100]}}> | </span>
            Likelihood
            <span style={{color:colors.grey[100]}}> | </span>
            Relevance for each Country
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
          
           "& .MuiDataGrid-cell": {
            borderBottom: `2px solid ${colors.grey[300]}`,
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
            fontSize:18,
          },
          "& .name-column--cell1": {
            fontSize:15,
          },
          "& .name-column--cell2": {
            color: colors.grey[300],
            fontSize:15,
            
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
           components={{
             Toolbar: GridToolbar,
             }}
          rows={formattedData}
          columns={columns1}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[10, 20, 30]}
          pagination
          {...formattedData}
        />
      </Box>
    </Box>
    <Box m="20px">
      <Typography variant="h1" color={colors.grey[100]} fontWeight="bold">REGIONS</Typography>
          <Typography variant="h5" color='orange'>
            Datewise Impact
            <span style={{color:colors.grey[100]}}> | </span>
            Intensity 
            <span style={{color:colors.grey[100]}}> | </span>
            Likelihood
            <span style={{color:colors.grey[100]}}> | </span>
            Relevance for each Region
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
            fontSize:14
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
          }
          
        }}
          rows={formattedData}
          columns={columns2}
          components={{ Toolbar: GridToolbar }}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[10, 10, 20]}
          pagination
          {...formattedData}
        />
      </Box>
    </Box>
    </>
    
  );
};

export default Table1;

