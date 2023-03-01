import { Box, Grid,Typography, Avatar, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import GeographyChart from "../../components/GeographyChart";
import { BarChart7, BarChart8, Pie, Line5, Line6, Line7, Line8, Line9, Line10} from "../../components/DashboardBox";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useState, useEffect } from 'react';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  

//For table

const [data, setData] = useState([]);
const [data1, setData1] = useState([]);

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

useEffect(() => {
  const fetchData1 = async () => {
    try {
      const res = await fetch('https://13.127.29.150/table1');
      const jsonData = await res.json();
      setData1(jsonData);
    } catch (error) {
      console.log(error);
    }
  };
  fetchData1();
}, []);

const [pageSize, setPageSize] = useState(10);

const columns1 = [
    {
      field: "country",
      headerName: "Country",
      flex: 1,
      cellClassName: "name-column--cell1",
      display:'none'
    },
    {
      field: "region",
      headerName: "Region",
      flex: 1,
      cellClassName: "name-column--cell1"
    },
    {
      field: "pestle",
      headerName: "Pestle",
      flex: 0.7,
      cellClassName: "name-column--cell2",
    },
    {
      field: "sector",
      headerName: "Sector",
      flex: 1,
      cellClassName: "name-column--cell2",
    },
    {
      field: "intensity",
      headerName: "Intensity",
      flex: 0.7,
      cellClassName: "name-column--cell1",
    },
    {
      field: "start_year",
      headerName: "Start year",
      flex: 0.7,
      cellClassName: "name-column--cell",
    },
    {
      field: "end_year",
      headerName: "End year",
      flex:0.7,
      cellClassName: "name-column--cell",
    },
  ];
const columns2 = [
    {
      field: "country",
      headerName: "Country",
      flex: 1,
      cellClassName: "name-column--cell1"
    },
    {
      field: "region",
      headerName: "Region",
      flex: 1,
      cellClassName: "name-column--cell1"
    },
    {
      field: "start_year",
      headerName: "Start year",
      flex: 0.7,
      cellClassName: "name-column--cell",
    },
    {
      field: "end_year",
      headerName: "End year",
      flex:0.7,
      cellClassName: "name-column--cell",
    },
  ];


  return (
    
      <Grid container  >
      <Grid item xs={12} sm={12} lg={12} xl={12}>
        <Grid container
              direction="row"
              justifyContent="space-around"
              alignItems="center" 
              pr={2.4}  
              pl={2.4}  
              pt={2}  
              spacing={2}
              >
          <Grid item  xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
           bgcolor={colors.primary[400]}
           borderRadius= "10px"
           boxShadow= "0 0 10px #202020"  
           overflow="hidden"
           >
          <Box
           sx={{ p: "15px 15px 5px 15px" }}
           >
           <Avatar sx={{ 
            bgcolor:"#29c66f30",
            border: "1.7px solid #29c66f",
            color:"#29c66f"}}
            >
            <ElectricBoltIcon/>
           </Avatar>
           <Typography  
            variant="h3"
            fontWeight="500"
            pt="5px"
             >Energy 
            </Typography>
           <Typography 
            variant="h6"
            fontWeight="500" 
            pt="5px"
            color={colors.grey[200]}
            >Total Intensity -- 1167 <KeyboardDoubleArrowUpIcon sx={{color:"#29c66f"}} />
            </Typography>
           </Box>
           <Box height="100px"  >
             < Line6/>
           </Box>
          </Box>
          </Grid>
          <Grid item  xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
           bgcolor={colors.primary[400]}
           borderRadius= "10px"
           boxShadow= "0 0 10px #202020"  
           overflow="hidden"
           >
          <Box
           sx={{ p: "15px 15px 5px 15px" }}
           >
           <Avatar sx={{ 
            bgcolor:"#ffb73340",
            border: "1.7px solid #ffb733",
            color:"#ffb733"}}
            >
            <AccountBalanceOutlinedIcon />
           </Avatar>
           <Typography  
            variant="h3"
            fontWeight="500"
            pt="5px"
             >Finance
            </Typography>
           <Typography 
            variant="h6"
            fontWeight="500" 
            pt="5px"
            color={colors.grey[200]}
            >Total Intensity -- 221 <KeyboardDoubleArrowUpIcon sx={{color:"#ffb733"}}/>
            </Typography>
           </Box>
           <Box height="100px"  >
             < Line7/>
           </Box>
          </Box>
          </Grid>
          <Grid item  xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
           bgcolor={colors.primary[400]}
           borderRadius= "10px"
           boxShadow= "0 0 10px #202020"  
           overflow="hidden"
           >
          <Box
           sx={{ p: "15px 15px 5px 15px" }}
           >
           <Avatar sx={{ 
            bgcolor:"#884ff040",
            border: "1.7px solid #884ff0",
            color:"#884ff0"}}
            >
            <AddBusinessIcon/>
           </Avatar>
           <Typography  
            variant="h3"
            fontWeight="500"
            pt="5px"
             >Retail
            </Typography>
           <Typography 
            variant="h6"
            fontWeight="500" 
            pt="5px"
            color={colors.grey[200]}
            >Total Intensity -- 209 <KeyboardDoubleArrowDownRoundedIcon sx={{color:"#884ff0"}}/>
            </Typography>
           </Box>
           <Box height="100px"  >
             < Line8/>
           </Box>
          </Box>
          </Grid>
          <Grid item  xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
           bgcolor={colors.primary[400]}
           borderRadius= "10px"
           boxShadow= "0 0 10px #202020"  
           overflow="hidden"
           >
          <Box
           sx={{ p: "15px 15px 5px 15px" }}
           >
           <Avatar sx={{ 
            bgcolor:"#00cfe740",
            border: "1.7px solid #00cfe7",
            color:"#00cfe7"}}
            >
            <FactoryOutlinedIcon/>
           </Avatar>
           <Typography  
            variant="h3"
            fontWeight="500"
            pt="5px"
             >Manufacturing
            </Typography>
           <Typography 
            variant="h6"
            fontWeight="500" 
            pt="5px"
            color={colors.grey[200]}
            >Total Intensity -- 198 <KeyboardDoubleArrowDownRoundedIcon sx={{color:"#00cfe7"}}/>
            </Typography>
           </Box>
           <Box height="100px"  >
             < Line9/>
           </Box>
          </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} lg={12} xl={12}>
        <Grid container
              direction="row"
              justifyContent="space-around"
              alignItems="center" 
              pr={2.4}  
              pl={2.4}  
              pt={2}  
              spacing={2}
              >
              <Grid item  xs={12} sm={12} md={6} lg={7} xl={7}>
              <Box
                bgcolor={colors.primary[400]}
                borderRadius= "10px"
                boxShadow= "0 0 10px #202020"
                overflow="hidden"
                > 
                <Box  sx={{ 
                  p: "20px 20px 0px 20px",
                  display: 'flex',
                  flexDirection:{xs:'column',sm:'row',md:'row',lg:'row', xl:'row'},
                  }}>
                <Typography
                  variant="h3"
                  fontWeight="600"
                  p= "0px 20px 0px 0px"
                >
                 Western Asia
                </Typography>
                <Typography fontSize={25} fontStyle='bold' color='#ffb733'>VS</Typography>
                <Typography
                  variant="h3"
                  fontWeight="600"
                  pt= "0px"
                  pr= "20px"
                  pb= "0px"
                  pl= {{xs:'0px',sm:'20px',md:'20px',lg:'20px',xl:'20px'}}
                >
                 Southern Asia
                </Typography>
                </Box> 
                <Box  p="0px 20px 0px 20px" >
                <Typography
                  variant="h4"
                  fontWeight="600"
                  color='#ffb733' 
                >
                 Sectors
                </Typography>
                </Box>
                <Box  sx={{ 
                  p: "0px 50px 0px 0px",
                  display: 'flex',
                  flexDirection:{xs:"column",sm:"column",md:"column",lg:"row",xl:'row'}
                  }}>
                    <Box sx={{display: 'flex',flexDirection:{xs:"column",sm:"row",md:"row",lg:"column",xl:'column'}}}>
                      <Box sx={{ 
                      display: 'flex',
                      flexDirection:"row"
                      }}>
                    <Typography
                     variant="h5"
                     fontWeight="600"
                     p= "2px 0px 2px 15px"
                     m='5px'
                     color={colors.grey[300]}
                    >Defence
                    </Typography>
                    <Typography 
                       variant="h6"
                       fontWeight="600"
                       p= "2px 20px 2px 15px"
                       m='5px'
                       color="#00cfe7"
                       bgcolor='#00cfe730'
                       border="1.2px solid #00cfe7"
                       borderRadius="6px"
                       >1 || 2
                    </Typography>
                    </Box>
                    <Box sx={{ 
                      display: 'flex',
                      flexDirection:"row"
                      }}>
                    <Typography
                       variant="h5"
                       fontWeight="600"
                       pt= "0px"
                       pr= "0px"
                       pb= "0px"
                       pl= {{xs:'15px',sm:'15px',md:'46px',lg:'15px',xl:'15px'}}
                       m='5px'
                       color={colors.grey[300]}
                       >Finance
                    </Typography>
                    <Typography 
                       variant="h6"
                       fontWeight="600"
                       p= "2px 20px 2px 15px"
                       m='5px'
                       color="#29c66f"
                       bgcolor='#29c66f30'
                       border="1.2px solid #29c66f"
                       borderRadius="6px"
                       >3 || 2
                    </Typography>
                    </Box>
                    </Box>
                    <Box sx={{display: 'flex',flexDirection:{xs:"column",sm:"row",md:"row",lg:"column",xl:'column'}}}>
                    <Box sx={{ 
                      display: 'flex',
                      flexDirection:"row"
                      }}>
                    <Typography
                     variant="h5"
                     fontWeight="600"
                     p= "2px 0px 2px 15px"
                     m='5px'
                     color={colors.grey[300]}
                    >Government
                    </Typography>
                    <Typography 
                       variant="h6"
                       fontWeight="600"
                       p= "2px 20px 2px 15px"
                       m='5px'
                       color="#884ff0"
                       bgcolor='#884ff030'
                       border="1.2px solid #884ff0"
                       borderRadius="6px"
                       >2 || 1
                    </Typography>
                    </Box>
                    <Box sx={{ 
                      display: 'flex',
                      flexDirection:"row"
                      }}>
                    <Typography
                       variant="h5"
                       fontWeight="600"
                       p= "2px 0px 2px 15px"
                       m='5px'
                       color={colors.grey[300]}
                       >Construction
                    </Typography>
                    <Typography 
                       variant="h6"
                       fontWeight="600"
                       p= "2px 20px 2px 15px"
                       m='5px'
                       color="#f279b6"
                       bgcolor='#f279b630'
                       border="1.2px solid #f279b6"
                       borderRadius="6px"
                       >1 || 1
                    </Typography>
                    </Box>
                    </Box>
                    <Box sx={{display: 'flex',flexDirection:{xs:"column",sm:"row",md:"row",lg:"column",xl:'column'}}}>
                      <Box sx={{ 
                      display: 'flex',
                      flexDirection:"row"
                      }}>
                    <Typography
                       variant="h5"
                       fontWeight="600"
                       p= "2px 9px 2px 15px"
                       m='5px'
                       color={colors.grey[300]}
                       >Retail
                    </Typography>
                    <Typography 
                       variant="h6"
                       fontWeight="600"
                       p= "2px 20px 2px 15px"
                       m='5px'
                       color="#FFA500"
                       bgcolor='#FFA50030'
                       border="1.2px solid #FFA500"
                       borderRadius="6px"
                       >3 || 2
                    </Typography>
                    </Box>
                    <Box sx={{ 
                      display: 'flex',
                      flexDirection:"row"
                      }}>
                    <Typography
                       variant="h5"
                       fontWeight="600"
                      //  p= "2px 0px 2px 15px"
                       pt= "2px"
                       pr= "0px"
                       pb= "0px"
                       pl= {{xs:'15px',sm:'15px',md:'52px',lg:'15px',xl:'15px'}}
                       m='5px'
                       color={colors.grey[300]}
                       >Energy
                    </Typography>
                    <Typography 
                       variant="h6"
                       fontWeight="600"
                       p= "2px 20px 2px 15px"
                       m='5px'
                       color="#ea5455"
                       bgcolor='#ea545530'
                       border="1.2px solid #ea5455"
                       borderRadius="6px"
                       >22 || 21
                    </Typography>
                    </Box>
                    </Box>
                    
                </Box>
                <Box height="260px" mt="10px" >
                  <Line5 />
                </Box>
              </Box>
              </Grid>
              <Grid item  xs={12} sm={12} md={6} lg={5} xl={5}>
              <Box
                bgcolor={colors.primary[400]}
                borderRadius= "10px"
                boxShadow= "0 0 10px #202020"  
                >
                <Box sx={{ p: "20px 20px 5px 20px" }}>
                <Typography
                  variant="h3"
                  fontWeight="600"
                >
                  India
                </Typography>
                <Typography
                  variant="h4"
                  fontWeight="600"
                  color="#ffb733"
                  p="8px 0px 0px 0px"
                >
                  Relevance
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight="600"
                  color={colors.grey[300]}
                >
                  Important dates for India
                </Typography>
                </Box>
                <Box height={{xs:'319px', sm:'319px', md:'352px', lg:'319px', xl:'319px'}}>
                  < BarChart7 />
                </Box>
               </Box>
              </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} lg={12} xl={12}>
        <Grid container
              direction="row"
              justifyContent="space-around"
              alignItems="center" 
              pr={2.4}  
              pl={2.4}  
              pt={2}  
              spacing={2}
              >
            <Grid item  xs={12} sm={12} md={6} lg={7} xl={7}>
               <Box
                  bgcolor={colors.primary[400]}
                  borderRadius= "10px"
                  boxShadow= "0 0 10px #202020"
                  >
                  <Typography
                    variant="h3"
                    fontWeight="600"
                    sx={{ padding: "20px 20px 0 20px" }}
                  >
                    China
                  </Typography>
                  <Typography
                  variant="h4"
                  fontWeight="600"
                  color="#ffb733"
                  p="8px 0px 0px 20px"
                >
                  Sectors
                </Typography>
                  <Typography
                    variant="h6"
                    fontWeight="600"
                    color={colors.grey[300]}
                    sx={{ padding: "5px 20px 0 20px" }}
                  >
                    Total Relevance | Total Likelihood | Total Intensity of the existing sectors 
                  </Typography>
                  <Box  sx={{ padding: "10px 20px 0 20px",
                              display: 'flex',
                              flexDirection:"row" }}>
                    <Avatar sx={{ 
                      bgcolor:"#00cfe740",
                      border: "1.7px solid #00cfe7",
                      m:"5px",
                      color:"#00cfe7"}}
                      >
                      <MilitaryTechOutlinedIcon/>
                    </Avatar>
                    <Avatar sx={{ 
                      bgcolor:"#884ff030",
                      border: "1.7px solid #884ff0",
                      m:"5px",
                      color:"#884ff0"}}
                      >
                       <AddBusinessIcon/>
                    </Avatar>
                    <Avatar sx={{ 
                      bgcolor:"#ffb73330",
                      border: "1.7px solid #ffb733",
                      m:"5px",
                      color:"#ffb733"}}
                      >
                     <AccountBalanceOutlinedIcon/>
                    </Avatar>
                    <Avatar sx={{ 
                      bgcolor:"#29c66f30",
                      border: "1.7px solid #29c66f",
                      m:"5px",
                      color:"#29c66f"}}
                      >
                      <HubOutlinedIcon/>
                    </Avatar>
                    <Avatar sx={{ 
                      bgcolor:"#ea545530",
                      border: "1.7px solid #ea5455",
                      m:"5px",
                      color:"#ea5455"}}
                      >
                      <LocalPoliceOutlinedIcon/>
                    </Avatar>
                  </Box>
                  <Box height="300px" >
                    <BarChart8 />
                  </Box>
                </Box>
            </Grid>
            <Grid item  xs={12} sm={12} md={6} lg={5} xl={5}>
              <Box
                bgcolor={colors.primary[400]}
                borderRadius= "10px"
                boxShadow= "0 0 10px #202020"
                >
                <Typography
                  variant="h3"
                  fontWeight="600"
                  sx={{ padding: "20px 20px 0 20px" }}
                >
                 United States of America
                </Typography> 
                <Typography
                  variant="h4"
                  fontWeight="600"
                  color="#ffb733"
                  p="8px 0px 0px 20px"
                >
                  Pestles
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight="600"
                  color={colors.grey[300]}
                  sx={{ padding: "5px 20px 0 20px" }}
                >
                 Number of Pestles in United States of America
                </Typography>
                <Box  height="360px">
                   <Pie />
                </Box>
                </Box> 
            </Grid>
        </Grid>
      </Grid>  
      <Grid item xs={12} sm={12} lg={12} xl={12}>
         <Grid container
              direction="row"
              justifyContent="space-around"
              alignItems="center" 
              pr={2.4}  
              pl={2.4}  
              pt={2}  
              spacing={2}
              >
              <Grid item  xs={12} sm={12} md={6} lg={4} xl={4}>
                  <Box m="1.6px" 
                       bgcolor={colors.primary[400]}
                       borderRadius= "10px"
                       boxShadow= "0 0 10px #202020"
                       overflow= "auto"
                       >
                      <Box  sx={{ p: "20px 20px 10px 15px"}}>
                          <Box display='flex' flexDirection='row'>
                            <Typography
                              variant="h3"
                              fontWeight="600"
                              >
                               Important dates for Asia
                            </Typography>
                          </Box>
                      </Box>
                      <Box m="1.6px" 
                       bgcolor={colors.primary[400]}
                       overflow= "auto"
                       sx={{
                            "&::-webkit-scrollbar-track":{
                                borderRadius:'5px',
                                bgcolor: colors.blueAccent[200],
                             },
                             "&::-webkit-scrollbar-thumb" :{
                                borderRadius:'5px',
                                bgcolor: colors.blueAccent[100],
                             }
                           }}
                       >
                    <Box
                       m="40px 1 10 0"
                       height={{xs:'48vh',sm:'55vh',md:'55vh',lg:'48vh'}}
                       overflow= "auto"
                       minWidth={{xs:'500px',sm:'300px',md:'300px',lg:'400px'}}
                        sx={{
                          "& .MuiDataGrid-root": {
                             border: "none",
                          },
                          "& .MuiDataGrid-cell": {
                            borderBottom: `1px solid ${colors.grey[300]}`,
                            color:colors.grey[300]
                           
                          },
                          "& .name-column--cell": {
                            color: "orange",
                            fontSize:16
                          },
                          "& .name-column--cell1": {
                            fontSize:16,
                          },
                          "& .name-column--cell2": {
                            fontSize:16,
                            color:colors.grey[100]
                          },
                          "& .MuiDataGrid-columnHeaders": {
                            borderTop: `1px solid ${colors.grey[300]}`,
                            borderBottom: `1px solid ${colors.grey[300]}`,
                            borderRadius: "10px 10px 0px 0px",
                            height:"30px",
                            fontSize:16,
                            
                          },
                          "& .MuiDataGrid-virtualScroller": {
                            bgcolor: colors.primary[400],
                          },
                          "& .MuiDataGrid-footerContainer": {
                            borderBottom: `1px solid ${colors.grey[300]}`,
                            borderTop: `1px solid ${colors.grey[300]}`,
                            borderRadius: "0px 0px 10px 10px",
                            fontSize:16,
                          },
                          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                            color: `${colors.grey[100]} !important`,
                            fontSize:14,
                          },
                          
                        }}
                      >
                        <DataGrid
                          rows={data1}
                          columns={columns2}
                          RowHeight="100px"
                          components={{ Toolbar: GridToolbar }}
                          pageSize={pageSize}
                          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                          rowsPerPageOptions={[10, 20, 30]}
                          pagination
                          {...formattedData}
                        />
                    </Box>
                  </Box>
                  </Box>
                  
                </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                <Box
                   bgcolor={colors.primary[400]}
                   borderRadius= "10px"
                   boxShadow= "0 0 10px #202020"
                   sx={{ pt: "20px",pr: "20px",pb: "20px",pl: "20px" }}
                   >
                  <Typography
                    variant="h3"
                    fontWeight="600"
                  >
                    Geography Chart
                  </Typography>
                  <Typography
                    variant="h4"
                    fontWeight="600"
                    color="#ffb733"
                    paddingTop= "9px"
                  >
                    Sectors
                  </Typography>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    paddingTop= "2px"
                    paddingBottom= "22px"
                    color={colors.grey[300]}
                   
                  >
                    Shows the sectors all over the world
                  </Typography>
                  <Box  height="255px" 
                        border="1px solid " 
                        borderColor = {colors.grey[300]}
                        
                  >
                   <GeographyChart isDashboard={true} />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                <Box
                  bgcolor={colors.primary[400]}
                  borderRadius= "10px"
                  boxShadow= "0 0 10px #202020"
                  overflow='hidden'
                  height="400px"
                  >
                <Typography
                  variant="h3"
                  fontWeight="600"
                  sx={{ padding: "20px 20px 0 20px" }}
                >
                  India
                </Typography> 
                <Typography
                  variant="h4"
                  fontWeight="600"
                  color="#ffb733"
                  sx={{ padding: "9px 20px 0 20px" }}
                >
                  Pestles
                </Typography> 
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.grey[300]}
                  sx={{ padding: "2px 20px 0 20px" }}
                >
                  All the pestles of India
                </Typography> 
                  <Line10 />
                </Box>
              </Grid>
           </Grid>
      </Grid>
      <Grid item xs={12} sm={12} lg={12} xl={12}>
        <Grid container
              direction="row"
              justifyContent="space-around"
              alignItems="center" 
              pr={2.4}  
              pl={2.4}  
              pt={2}  
              spacing={2}
              >
                <Grid item  xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Box m="1.6px" 
                       bgcolor={colors.primary[400]}
                       borderRadius= "10px"
                       boxShadow= "0 0 10px #202020"
                       >
                      <Box  sx={{ p: "20px 20px 0px 20px"}}>
                          <Box display='flex' flexDirection='row'>
                            <Typography
                              variant="h3"
                              fontWeight="600"
                              >
                               Start year
                            </Typography>
                            <Typography
                              variant="h2"
                              fontWeight="600"
                              p= "0px 10px 0px 10px"
                              color='#ffb733'
                              >
                               &
                            </Typography>
                            <Typography
                              variant="h3"
                              fontWeight="600"
                              >
                               End year
                            </Typography>
                          </Box>
                          <Typography
                            variant="h5"
                            fontWeight="600"
                            p= "3px 20px 20px 0px"
                            color={colors.grey[300]}
                          >
                           List of all countries and regions with thier respective sectors & pestles
                          </Typography>
                      </Box>
                      <Box m="1.6px" 
                       bgcolor={colors.primary[400]}
                       borderRadius= "10px"
                       overflow="auto" 
                       sx={{ 
                             "&::-webkit-scrollbar-track":{
                                  borderRadius:'5px',
                                  bgcolor: colors.blueAccent[200],
                              },
                              "&::-webkit-scrollbar-thumb" :{
                                 borderRadius:'5px',
                                 bgcolor: colors.blueAccent[100],
                              }
                           }}
                       >
                    <Box
                       m="40px 1 10 0"
                       height="87vh"
                       overflow= "auto"
                       minWidth= {{xs:'900px',sm:'900px',md:'900px',lg:'400px'}}
                       sx={{
                        "& .MuiDataGrid-root": {
                             border: "none",
                          },
                       }}
                      >
                        <DataGrid
                          sx={{
                          "& .MuiDataGrid-root": {
                             border: "none",
                          },
                          "& .MuiDataGrid-cell": {
                            borderBottom: `1px solid ${colors.grey[300]}`,
                            color:colors.grey[300]
                           
                          },
                          "& .name-column--cell": {
                            color: "orange",
                            fontSize:16
                          },
                          "& .name-column--cell1": {
                            fontSize:16,
                          },
                          "& .name-column--cell2": {
                            fontSize:16,
                            color:colors.grey[100]
                          },
                          "& .MuiDataGrid-columnHeaders": {
                            borderTop: `2px solid ${colors.grey[300]}`,
                            borderBottom: `2px solid ${colors.grey[300]}`,
                            borderRadius:"10px 10px 0px 0px",
                            height:"30px",
                            fontSize:16,
                          },
                          "& .MuiDataGrid-virtualScroller": {
                            bgcolor: colors.primary[400],
                          },
                          "& .MuiDataGrid-footerContainer": {
                            borderBottom: `2px solid ${colors.grey[300]}`,
                            borderTop: `2px solid ${colors.grey[300]}`,
                           borderRadius:"10px 10px 0px 0px",
                            fontSize:16,
                          },
                          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                            color: `${colors.grey[100]} !important`,
                            fontSize:14,
                          },
                        }}
                          rows={formattedData}
                          columns={columns1}
                          RowHeight="100px"
                          components={{ Toolbar: GridToolbar }}
                          pageSize={pageSize}
                          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                          rowsPerPageOptions={[10, 20, 30]}
                          pagination
                          {...formattedData}
                        />
                    </Box>
                  </Box>
                  </Box>
                  
                </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;

