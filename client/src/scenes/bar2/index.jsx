import { Box, Switch, Grid, Stack, Divider, Typography, Tooltip, Avatar} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { tokens } from "../../theme";
import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import {PersistentDrawerRight} from "./sidedrawer"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'; 



let selectedData;
let selectedData1;
let mainData;
let defaultdata;


const Bar2 = () => {

const theme = useTheme();
const colors = tokens(theme.palette.mode);
const theme1 = createTheme({   ////  making theme for switch
    components: {
      MuiSwitch: {
        styleOverrides: {
          switchBase: {
            // Controls default (unchecked) color for the thumb
            color: "#fff"
          },
          colorPrimary: {
            "&.Mui-checked": {
              // Controls checked color for the thumb
              color: colors.greenAccent[500]
            }
          },
          track: {
            // Controls default (unchecked) color for the track
            opacity: 0.5,
            bgcolor:"black",
            ".Mui-checked.Mui-checked + &": {
              // Controls checked color for the track
              opacity: 0.7,
              backgroundColor:colors.greenAccent[200]
            },
          },
        },
      }
    }
  });


//Fetching the API //country/pestle/sector
const [dataapi1, setDataapi1] = useState([]); 
useEffect(() => {
  fetch('https://13.127.29.150/bar5')
    .then(res => res.json())
    .then(dataapi1 => setDataapi1(dataapi1))
    .catch(error => console.log(error));
}, []);

//formatting the data for graph country/pestle/sector
const data = dataapi1.map(item => {
  let newData = {};
    newData["country"] = item.country;
    newData["data"] = item.data.map(innerItem => {
      let newInnerData = {};
      newInnerData["pestle"] = innerItem.pestle;
      newInnerData["country"] = item.country;
      innerItem.data.forEach(sector => {
        newInnerData[sector.sector] = sector.sector_count;
      });
      return newInnerData;
    });
    return newData;
  });  



//Fetching the API //region/pestle/sector
const [dataapi2, setDataapi2] = useState([]);
useEffect(() => {
  fetch('https://13.127.29.150/bar6')
    .then(res => res.json())
    .then(dataapi2 => setDataapi2(dataapi2))
    .catch(error => console.log(error));
}, []);

//formatting the data for graph region/pestle/sector
const data1 = dataapi2.map(item => {
  let newData1 = {};
    newData1["region"] = item.region;
    newData1["data"] = item.data.map(innerItem => {
      let newInnerData = {};
      newInnerData["pestle"] = innerItem.pestle;
      newInnerData["region"] = item.region;
      innerItem.data.forEach(sector => {
        newInnerData[sector.sector] = sector.sector_count;
      });
      return newInnerData;
    });
    return newData1;
  });  


  const [dataapi3, setDataapi3] = useState([]);///For defult bar2
  useEffect(() => {
    fetch('https://13.127.29.150/defaultbar2')
      .then(res => res.json())
      .then(dataapi3 => setDataapi3(dataapi3))
      .catch(error => console.log(error));
  }, []);


  
//Select dropdown Filter menu for country/pestle/sector
const [selectedCountries, setSelectedCountries] = useState([]);
const [selectedPestles, setSelectedPestles] = useState([]);
const [filteredData, setFilteredData] = useState([]);

const countryOptions = data.map(item => ({ value: item.country, label: item.country })); 
let pestleOptions = [];

if (selectedCountries.length > 0) {
  let pestleData = [];
  selectedCountries.forEach(selectedCountry => {
    const countryData = data.find(item => item.country === selectedCountry.value);
    pestleData = pestleData.concat(countryData.data);
  });
  pestleOptions = pestleData
    .filter(item => item.pestle !== null)
    .map(item => ({ value: item.pestle, label: `${item.pestle}` }));
}

function handleCountryChange(selectedOptions) {
  setSelectedCountries(selectedOptions);
  setSelectedPestles([]);
  setFilteredData([]);
}

function handlePestleChange(selectedOptions) {
  setSelectedPestles(selectedOptions);
  if (selectedCountries.length > 0 && selectedOptions.length > 0) {
    let filteredData = [];
    selectedCountries.forEach(selectedCountry => {
      const countryData = data.find(item => item.country === selectedCountry.value);
      selectedOptions.forEach(selectedOption => {
        filteredData = filteredData.concat(
          countryData.data.filter(item => item.pestle === selectedOption.value)
        );
      });
    });
    setFilteredData(filteredData);
  }
}


//Select dropdown Filter menu for region/pestle/sector
const [selectedRegions1, setSelectedRegions1] = useState([]);
const [selectedPestles1, setSelectedPestles1] = useState([]);
const [filteredData1, setFilteredData1] = useState([]);

const regionOptions1 = data1.map(item => ({ value: item.region, label: item.region })); 
let pestleOptions1 = [];

if (selectedRegions1.length > 0) {
  let pestleData = [];
  selectedRegions1.forEach(selectedRegion => {
    const regionData = data1.find(item => item.region === selectedRegion.value);
    pestleData = pestleData.concat(regionData.data);
  });
  pestleOptions1 = pestleData
    .filter(item => item.pestle !== null)
    .map(item => ({ value: item.pestle, label: `${item.pestle}` }));
}

function handleRegionChange1(selectedOptions) {
  setSelectedRegions1(selectedOptions);
  setSelectedPestles1([]);
  setFilteredData1([]);
}

function handlePestleChange1(selectedOptions) {
  setSelectedPestles1(selectedOptions);
  if (selectedRegions1.length > 0 && selectedOptions.length > 0) {
    let filteredData1 = [];
    selectedRegions1.forEach(selectedRegion => {
      const regionData = data1.find(item => item.region === selectedRegion.value);
      selectedOptions.forEach(selectedOption => {
        filteredData1 = filteredData1.concat(
          regionData.data.filter(item => item.pestle === selectedOption.value)
        );
      });
    });
    setFilteredData1(filteredData1);
  }
}

const [country,setCountry] = useState(true);
const [region,setRegion] = useState(false);

//to export
selectedData = filteredData;
selectedData1 = filteredData1;
defaultdata = dataapi3;



country ? mainData = selectedData : region ? mainData = selectedData1 : mainData =  null;


  return (
  <>
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} >
        <Box pl='22px'>
          <Box display="flex" flexDirection="row">
            <Typography variant="h1" color={colors.grey[100]} fontWeight="bold">Bar Chart</Typography>
            <Tooltip
                title={
                  <Box>
                    <Typography variant="h6" color="#ffff">
                      Note!!
                    </Typography>
                    <Typography variant="h6" color="#ffff">
                      1.The user can chosen onl one option(using the buttons) at a time to filter the options.
                    </Typography>
                    <Typography variant="h6" color="#ffff">
                       2.Use the right sidedrawer to customize your Chart. 
                    </Typography>
                    <Typography variant="h6" color="#ffff">
                       3.During horizantal chart please hover the mouse on the left axis labels to view them.
                    </Typography>
                    </Box>
                }
                placement="right"
            >
               <Avatar sx={{ 
                bgcolor:colors.primary[900],
                // border: "1.7px solid #ffb733",
                color:"red"}}
                >
                  <InfoOutlinedIcon />
              </Avatar>
            </Tooltip>
          </Box>
          <Typography variant="h4" color={colors.grey[300]} fontWeight="bold">Pest Analysis</Typography>
          <Typography variant="h5" color='orange'>
            Number of Sectors per Pestle of each Country
            <span style={{color:colors.grey[100]}}> & </span>
            Region
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} 
            // m="3vh 1.4vw 5vh 1.4vw" 
            m="25px 22px 50px 22px" 
            bgcolor={colors.primary[400]}
            boxShadow= "0 0 10px #202020"
            borderRadius= "5px"
            overflow="hidden"
            >
        <Grid item xs={12} sm={12} md={12} lg={12} bgcolor={colors.blueAccent[400]}
               borderRadius= "5px 5px 0px 0px"
               >
        <Grid container 
              direction="row"
              justifyContent="space-around"
              alignItems="center" 
              p={2}  
              spacing={2.5}
              >
        <Grid item xs={12} sm={12} md={8} lg={8} sx={{
              color: 'black',
            }}>  
         <Select 
           options={ country ? countryOptions : region ? regionOptions1 : null} 
           onChange={ country ? handleCountryChange : region ? handleRegionChange1 : null}
           value={ country ? selectedCountries : region ? selectedRegions1 : null }
           placeholder={ country ? "-Countries-" : region ? "-Regions-" : "-Select a filter-"}
           noOptionsMessage={()=> "Null data"}
           isSearchable
           isMulti
           styles={{
            placeholder: (baseStyles,state) =>({
              ...baseStyles,
              color:"black"
            }),
            input: (baseStyles,state) =>({
              ...baseStyles,
              color:"white"
            }),
            control: (baseStyles,state) =>({
              ...baseStyles,
              border:0,
              boxShadow:'none',
              borderRadius:5,
              maxHeight:"5vh",
              overflow:'auto',
              backgroundColor:'#00000050',
            }),
            dropdownIndicator: (baseStyles,state) =>({
              ...baseStyles,
              color: state.isFocused ? "grey" : "black",
            }),
             menu: (baseStyles,state) => ({
          ...baseStyles,
          // width: 'auto',
          maxWidth: '200px'
          })
          }}
          />
          <Divider/>
          <Divider/>
         <Select 
           options={ country ? pestleOptions : region ? pestleOptions1 : null} 
           onChange={ country ? handlePestleChange : region ? handlePestleChange1 : null}
           value={ country ? selectedPestles : region ? selectedPestles1 : null}
           placeholder={ country ? "-Pestles-" : region ? "-Pestles-" : "-Select a filter-"}
           noOptionsMessage={()=> "Null data"}
           isSearchable
           isMulti
           styles={{
            placeholder: (baseStyles,state) =>({
              ...baseStyles,
              color:"black"
            }),
            input: (baseStyles,state) =>({
              ...baseStyles,
              color:"white"
            }),
            control: (baseStyles,state) =>({
              ...baseStyles,
              border:0,
              boxShadow:'none',
              borderRadius:5,
              maxHeight:"5vh",
              overflow:'auto',
              backgroundColor:'#00000050',
            }),
            dropdownIndicator: (baseStyles,state) =>({
              ...baseStyles,
              color: state.isFocused ? "grey" : "black",
            }),
             menu: (baseStyles,state) => ({
          ...baseStyles,
          // width: 'auto',
          maxWidth: '200px'
          })
          }}
         />
        </Grid>
        <ThemeProvider theme={theme1}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
        <Grid container 
                      direction="row"
                      justifyContent="space-around"
                      alignItems="center" 
                      spacing={0.0}
                      pl={{xs:'0px',sm:'3vw',md:'0px',lg:'2vw'}}
                      pr={{xs:'0vw',sm:'6vw',md:'0px',lg:'0vw'}}
                      >
          <Grid  item xs={6} sm={3} md={12} lg={12} >
            <FormControlLabel
           control={
             <Switch  ///Country switch
             checked={country}
             onChange={(event) => setCountry(event.target.checked)}
             disabled = { region ? true : false }
             />
           }
           label="Country:"
           labelPlacement="start"
          />
          </Grid> 
           <Grid item xs={6} sm={3} md={12} lg={12} justifyContent="flex-end" >
            <FormControlLabel
           control={
             <Switch  ///Region switch
             checked={region}
             onChange={(event) => setRegion(event.target.checked)}
             disabled = { country ? true : false }
             />
           }
           label="Region:"
           labelPlacement="start"
          />
           </Grid>           
        </Grid>
        </Grid>
        </ThemeProvider>
        </Grid>
        </Grid>
        <Grid height="72vh" >
          <PersistentDrawerRight />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} sx={{display: (!country && !region)? 'none' :'block'}} >
         <Stack
            direction={{ xs:'row', sm:'column', md: 'row', lg: 'column' }}
            spacing={{ xs:1, sm:2, md: 2, lg: 2 }}
            justifyContent="center"
            alignItems="center"
            pr={{xs:50,sm:20,md:40,lg:50}}  
            pl={{xs:20,sm:20,md:40,lg:47}} 
            pt={0}  
            pb={5} 
            >
                  <Stack
                    direction={{ xs:'column', sm:'column', md: 'column', lg: 'row' }}
                    spacing={{ xs:1, sm:2, md: 2, lg: 2 }}
                    >
                      <Stack
                          direction={{ xs:'column', sm:'column', md: 'column', lg: 'row' }}
                          spacing={{ xs:1, sm:2, md: 2, lg: 2 }}
                           >
                          <Stack
                             direction={{ xs:'column', sm:'row', md: 'row', lg: 'row' }}
                             spacing={{ xs:1, sm:2, md: 2, lg: 2 }}
                          >
                            <Stack
                                direction={{ xs:'row', sm:'row', md: 'row', lg: 'row' }}
                                spacing={{ xs:0.5, sm:0.5, md: 0.5, lg: 0.5 }}
                                sx={{'&:hover': {opacity:0.7}}} 
                              >
                                <Box width={17} height={17} 
                                     borderRadius='50%'  
                                     bgcolor='#e28ef0' 
                                     >
                                </Box>
                                <Box fontSize='13px'>Healthcare</Box>
                            </Stack>
                            <Stack
                                direction={{ xs:'row', sm:'row', md: 'row', lg: 'row' }}
                                spacing={{ xs:0.5, sm:0.5, md: 0.5, lg: 0.5 }}
                                sx={{'&:hover': {opacity:0.7}}}
                              >
                                <Box width={17} height={17} 
                                     borderRadius='50%'  
                                     bgcolor='#ce43e6' 
                                     >
                                </Box>
                                <Box fontSize='13px'>Aerospace</Box>
                            </Stack>
                            <Stack
                                direction={{ xs:'row', sm:'row', md: 'row', lg: 'row' }}
                                spacing={{ xs:0.5, sm:0.5, md: 0.5, lg: 0.5 }}
                                sx={{'&:hover': {opacity:0.7}}}
                              >
                                <Box width={17} height={17} 
                                     borderRadius='50%'  
                                     bgcolor='#902fa1' 
                                     >
                                </Box>
                                <Box fontSize='13px'>Manufacturing</Box>
                            </Stack>
                          </Stack>
                      </Stack>
                      <Stack
                          direction={{ xs:'column', sm:'column', md: 'column', lg: 'row' }}
                          spacing={{ xs:1, sm:2, md: 2, lg: 2 }}
                           >
                          <Stack
                             direction={{ xs:'column', sm:'row', md: 'row', lg: 'row' }}
                             spacing={{ xs:1, sm:2, md: 2, lg: 2 }}
                          >
                            <Stack
                                direction={{ xs:'row', sm:'row', md: 'row', lg: 'row' }}
                                spacing={{ xs:0.5, sm:0.5, md: 0.5, lg: 0.5 }}
                                sx={{'&:hover': {opacity:0.7}}}
                              >
                                <Box width={17} height={17} 
                                     borderRadius='50%'  
                                     bgcolor='#ffc04d' 
                                     >
                                </Box>
                                <Box fontSize='13px'>Automotive</Box>
                            </Stack>
                            <Stack
                                direction={{ xs:'row', sm:'row', md: 'row', lg: 'row' }}
                                spacing={{ xs:0.5, sm:0.5, md: 0.5, lg: 0.5 }}
                                sx={{'&:hover': {opacity:0.7}}}
                              >
                                <Box width={17} 
                                     height={17} 
                                     borderRadius='50%' 
                                     bgcolor='#ffa500' >
                                </Box>
                                <Box fontSize='13px'>Agriculture</Box>
                            </Stack>
                            <Stack
                                direction={{ xs:'row', sm:'row', md: 'row', lg: 'row' }}
                                spacing={{ xs:0.5, sm:0.5, md: 0.5, lg: 0.5 }}
                                sx={{'&:hover': {opacity:0.7}}}
                              >
                                <Box width={17} height={17} 
                                     borderRadius='50%'  
                                     bgcolor='#cc8400' 
                                    
                                     >
                                </Box>
                                <Box fontSize='13px'>Government</Box>
                            </Stack>
                          </Stack>
                      </Stack>
                      <Stack
                          direction={{ xs:'column', sm:'column', md: 'column', lg: 'row' }}
                          spacing={{ xs:1, sm:2, md: 2, lg: 2 }}
                           >
                          <Stack
                             direction={{ xs:'column', sm:'row', md: 'row', lg: 'row' }}
                             spacing={{ xs:1, sm:2, md: 2, lg: 2 }}
                          >
                            <Stack
                                direction={{ xs:'row', sm:'row', md: 'row', lg: 'row' }}
                                spacing={{ xs:0.5, sm:0.5, md: 0.5, lg: 0.5 }}
                                 sx={{'&:hover': {opacity:0.7}}}
                              >
                                <Box width={17} height={17} 
                                     borderRadius='50%'  
                                     bgcolor='#b44949' 
                                    
                                     >
                                </Box>
                                <Box fontSize='13px'>Environment</Box>
                            </Stack>
                            <Stack
                                direction={{ xs:'row', sm:'row', md: 'row', lg: 'row' }}
                                spacing={{ xs:0.5, sm:0.5, md: 0.5, lg: 0.5 }}
                                sx={{'&:hover': {opacity:0.7}}}
                              >
                                <Box width={17} 
                                     height={17} 
                                     borderRadius='50%' 
                                     bgcolor='#a11b1b' >                                     
                                </Box>
                                <Box fontSize='13px'>Construction</Box>
                            </Stack>
                            <Stack
                                direction={{ xs:'row', sm:'row', md: 'row', lg: 'row' }}
                                spacing={{ xs:0.5, sm:0.5, md: 0.5, lg: 0.5 }}
                                sx={{'&:hover': {opacity:0.7}}}
                              >
                                <Box width={17} height={17} 
                                     borderRadius='50%'  
                                     bgcolor='#611010' 
                                    
                                     >
                                </Box>
                                <Box fontSize='13px'>Security</Box>
                            </Stack>
                          </Stack>
                      </Stack>
                  </Stack>
                  <Stack
                    direction={{ xs:'column', sm:'column', md: 'column', lg: 'row' }}
                    spacing={{ xs:1, sm:2, md: 2, lg: 2 }}
                    >
                      <Stack
                          direction={{ xs:'column', sm:'column', md: 'column', lg: 'row' }}
                          spacing={{ xs:1, sm:2, md: 2, lg: 2 }}
                           >
                          <Stack
                             direction={{ xs:'column', sm:'row', md: 'row', lg: 'row' }}
                             spacing={{ xs:1, sm:2, md: 2, lg: 2 }}
                          >
                            <Stack
                                direction={{ xs:'row', sm:'row', md: 'row', lg: 'row' }}
                                spacing={{ xs:0.5, sm:0.5, md: 0.5, lg: 0.5 }}
                                sx={{'&:hover': {opacity:0.7}}}
                              >
                                <Box width={17} height={17} 
                                     borderRadius='50%'  
                                     bgcolor='#66b3b3' 
                                    
                                     >
                                </Box>
                                <Box fontSize='13px'>Energy</Box>
                            </Stack>
                            <Stack
                                direction={{ xs:'row', sm:'row', md: 'row', lg: 'row' }}
                                spacing={{ xs:0.5, sm:0.5, md: 0.5, lg: 0.5 }}
                                sx={{'&:hover': {opacity:0.7}}}
                              >
                                <Box width={17} height={17} 
                                     borderRadius='50%' 
                                     bgcolor='#008080' >
                                </Box>
                                <Box fontSize='13px'>Finance</Box>
                            </Stack>
                            <Stack
                                direction={{ xs:'row', sm:'row', md: 'row', lg: 'row' }}
                                spacing={{ xs:0.5, sm:0.5, md: 0.5, lg: 0.5 }}
                                sx={{'&:hover': {opacity:0.7}}}
                              >
                                <Box width={17} height={17} 
                                     borderRadius='50%'  
                                     bgcolor='#006666' 
                                    
                                     >
                                </Box>
                                <Box fontSize='13px'>Support</Box>
                            </Stack>
                          </Stack>
                      </Stack>
                      <Stack
                          direction={{ xs:'column', sm:'column', md: 'column', lg: 'row' }}
                          spacing={{ xs:1, sm:2, md: 2, lg: 2 }}
                           >
                          <Stack
                             direction={{ xs:'column', sm:'row', md: 'row', lg: 'row' }}
                             spacing={{ xs:1, sm:2, md: 2, lg: 2 }}
                          >
                            <Stack
                                direction={{ xs:'row', sm:'row', md: 'row', lg: 'row' }}
                                spacing={{ xs:0.5, sm:0.5, md: 0.5, lg: 0.5 }}
                                sx={{'&:hover': {opacity:0.7}}}
                              >
                                <Box width={17} height={17} 
                                     borderRadius='50%'  
                                     bgcolor='#9ed1af' 
                                    
                                     >
                                </Box>
                                <Box fontSize='13px'>Tourism</Box>
                            </Stack>
                            <Stack
                                direction={{ xs:'row', sm:'row', md: 'row', lg: 'row' }}
                                spacing={{ xs:0.5, sm:0.5, md: 0.5, lg: 0.5 }}
                                sx={{'&:hover': {opacity:0.7}}}
                              >
                                <Box width={17} height={17} 
                                     borderRadius='50%' 
                                     bgcolor='#5db379' ></Box>
                                <Box fontSize='13px'>Retail</Box>
                            </Stack>
                            <Stack
                                direction={{ xs:'row', sm:'row', md: 'row', lg: 'row' }}
                                spacing={{ xs:0.5, sm:0.5, md: 0.5, lg: 0.5 }}
                                sx={{'&:hover': {opacity:0.7}}}
                              >
                                <Box width={17} height={17} 
                                     borderRadius='50%'  
                                     bgcolor='#4a8f61' 
                                    
                                     >
                                </Box>
                                <Box fontSize='13px'>Water</Box>
                            </Stack>
                          </Stack>
                      </Stack>
                      <Stack
                          direction={{ xs:'column', sm:'column', md: 'column', lg: 'row' }}
                          spacing={{ xs:1, sm:2, md: 2, lg: 2 }}
                           >
                          <Stack
                             direction={{ xs:'column', sm:'row', md: 'row', lg: 'row' }}
                             spacing={{ xs:1, sm:2, md: 2, lg: 2 }}
                          >
                            <Stack
                                direction={{ xs:'row', sm:'row', md: 'row', lg: 'row' }}
                                spacing={{ xs:0.5, sm:0.5, md: 0.5, lg: 0.5 }}
                                sx={{'&:hover': {opacity:0.7}}}
                              >
                                <Box width={17} height={17} 
                                     borderRadius='50%'  
                                     bgcolor='#9ea5d8' 
                                    
                                     >
                                </Box>
                                <Box fontSize='13px'>Transport</Box>
                            </Stack>
                            <Stack
                                direction={{ xs:'row', sm:'row', md: 'row', lg: 'row' }}
                                spacing={{ xs:0.5, sm:0.5, md: 0.5, lg: 0.5 }}
                                sx={{'&:hover': {opacity:0.7}}}
                              >
                                <Box width={17} height={17} 
                                     borderRadius='50%' 
                                     bgcolor='#757ec7' ></Box>
                                <Box fontSize='13px'>Media</Box>
                            </Stack>
                            <Stack
                                direction={{ xs:'row', sm:'row', md: 'row', lg: 'row' }}
                                spacing={{ xs:0.5, sm:0.5, md: 0.5, lg: 0.5 }}
                                sx={{'&:hover': {opacity:0.7}}}
                              >
                                <Box width={17} height={17} 
                                     borderRadius='50%'  
                                     bgcolor='#5e659f' 
                                    
                                     >
                                </Box>
                                <Box fontSize='13px'>IT</Box>
                            </Stack>
                          </Stack>
                      </Stack>
                  </Stack>
         </Stack>
        </Grid>
      </Grid>
      </Grid> 
   </>
    
  );
};


export {
  Bar2,
  mainData,
  defaultdata
};