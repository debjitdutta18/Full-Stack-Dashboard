import { tokens } from "../../theme";
import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Switch, Grid, Stack, Divider,Typography, Tooltip, Avatar } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import {PersistentDrawerRight} from "./sidedrawer"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'; 

let selectedData1;
let selectedData2;
let selectedData3;
let selectedData4;
let mainData;
let seCtor;
let peStle;
let defaultdata;


const Bar1 = () => {

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

//Fetching the API
const [data1, setData1] = useState([]); //For country/sector
useEffect(() => {
  fetch('https://13.127.29.150/bar1')
    .then(res => res.json())
    .then(data1 => setData1(data1))
    .catch(error => console.log(error));
}, []);

const [data2, setData2] = useState([]);//For region/sector
useEffect(() => {
  fetch('https://13.127.29.150/bar2')
    .then(res => res.json())
    .then(data2 => setData2(data2))
    .catch(error => console.log(error));
}, []);

const [data3, setData3] = useState([]); //For country/pestle
useEffect(() => {
  fetch('https://13.127.29.150/bar3')
    .then(res => res.json())
    .then(data3 => setData3(data3))
    .catch(error => console.log(error));
}, []);

const [data4, setData4] = useState([]); //For region/pestle
useEffect(() => {
  fetch('https://13.127.29.150/bar4')
    .then(res => res.json())
    .then(data4 => setData4(data4))
    .catch(error => console.log(error));
}, []);

const [data5, setData5] = useState([]); //For default bar1
useEffect(() => {
  fetch('https://13.127.29.150/defaultbar1')
    .then(res => res.json())
    .then(data5 => setData5(data5))
    .catch(error => console.log(error));
}, []);

//Select dropdown Filter menu for country/sector
const [selectedCountries1, setSelectedCountries1] = useState([]);
const [selectedSectors1, setSelectedSectors1] = useState([]);
const [filteredData1, setFilteredData1] = useState([]);

const countryOptions1 = data1.map(item => ({ value: item.country, label: item.country })); 
let sectorOptions1 = [];

if (selectedCountries1.length > 0) {
  let sectorData = [];
  selectedCountries1.forEach(selectedCountry => {
    const countryData = data1.find(item => item.country === selectedCountry.value);
    sectorData = sectorData.concat(countryData.data);
  });
  sectorOptions1 = sectorData
    .filter(item => item.sector !== null)
    .map(item => ({ value: item.sector, label: `${item.sector}` }));
}

function handleCountryChange1(selectedOptions) {
  setSelectedCountries1(selectedOptions);
  setSelectedSectors1([]);
  setFilteredData1([]);
}

function handleSectorChange1(selectedOptions) {
  setSelectedSectors1(selectedOptions);
  if (selectedCountries1.length > 0 && selectedOptions.length > 0) {
    let filteredData1 = [];
    selectedCountries1.forEach(selectedCountry => {
      const countryData = data1.find(item => item.country === selectedCountry.value);
      selectedOptions.forEach(selectedOption => {
        filteredData1 = filteredData1.concat(
          countryData.data.filter(item => item.sector === selectedOption.value)
        );
      });
    });
    setFilteredData1(filteredData1);
  }
}


 
//Select dropdown Filter menu for region/sector
const [selectedRegions2, setSelectedRegions2] = useState([]);
const [selectedSectors2, setSelectedSectors2] = useState([]);
const [filteredData2, setFilteredData2] = useState([]);

const regionOptions2 = data2.map(item => ({ value: item.region, label: item.region }));
let sectorOptions2 = [];

if (selectedRegions2.length > 0) {
  let sectorData = [];
  selectedRegions2.forEach(selectedRegion => {
    const regionData = data2.find(item => item.region === selectedRegion.value);
    sectorData = sectorData.concat(regionData.data);
  });
  sectorOptions2 = sectorData
    .filter(item => item.sector !== null)
    .map(item => ({ value: item.sector, label: `${item.sector}` }));
}

function handleRegionChange2(selectedOptions) {
  setSelectedRegions2(selectedOptions);
  setSelectedSectors2([]);
  setFilteredData2([]);
}

function handleSectorChange2(selectedOptions) {
  setSelectedSectors2(selectedOptions);
  if (selectedRegions2.length > 0 && selectedOptions.length > 0) {
    let filteredData2 = [];
    selectedRegions2.forEach(selectedRegion => {
      const regionData = data2.find(item => item.region === selectedRegion.value);
      selectedOptions.forEach(selectedOption => {
        filteredData2 = filteredData2.concat(
          regionData.data.filter(item => item.sector === selectedOption.value)
        );
      });
    });
    setFilteredData2(filteredData2);
  }
}


//Select dropdown Filter menu for country/pestle
const [selectedCountries3, setSelectedCountries3] = useState([]);
const [selectedPestles3, setSelectedPestles3] = useState([]);
const [filteredData3, setFilteredData3] = useState([]);

const countryOptions3 = data3.map(item => ({ value: item.country, label: item.country })); 
let pestleOptions3 = [];

if (selectedCountries3.length > 0) {
  let pestleData = [];
  selectedCountries3.forEach(selectedCountry => {
    const countryData = data3.find(item => item.country === selectedCountry.value);
    pestleData = pestleData.concat(countryData.data);
  });
  pestleOptions3 = pestleData
    .filter(item => item.pestle !== null)
    .map(item => ({ value: item.pestle, label: `${item.pestle}` }));
}

function handleCountryChange3(selectedOptions) {
  setSelectedCountries3(selectedOptions);
  setSelectedPestles3([]);
  setFilteredData3([]);
}

function handlePestleChange3(selectedOptions) {
  setSelectedPestles3(selectedOptions);
  if (selectedCountries3.length > 0 && selectedOptions.length > 0) {
    let filteredData3 = [];
    selectedCountries3.forEach(selectedCountry => {
      const countryData = data3.find(item => item.country === selectedCountry.value);
      selectedOptions.forEach(selectedOption => {
        filteredData3 = filteredData3.concat(
          countryData.data.filter(item => item.pestle === selectedOption.value)
        );
      });
    });
    setFilteredData3(filteredData3);
  }
}


//Select dropdown Filter menu for region/pestle
const [selectedRegions4, setSelectedRegions4] = useState([]);
const [selectedPestles4, setSelectedPestles4] = useState([]);
const [filteredData4, setFilteredData4] = useState([]);

const regionOptions4 = data4.map(item => ({ value: item.region, label: item.region }));
let pestleOptions4 = [];

if (selectedRegions4.length > 0) {
  let pestleData = [];
  selectedRegions4.forEach(selectedRegion => {
    const regionData = data4.find(item => item.region === selectedRegion.value);
    pestleData = pestleData.concat(regionData.data);
  });
  pestleOptions4 = pestleData
    .filter(item => item.pestle !== null)
    .map(item => ({ value: item.pestle, label: `${item.pestle}` }));
}

function handleRegionChange4(selectedOptions) {
  setSelectedRegions4(selectedOptions);
  setSelectedPestles4([]);
  setFilteredData4([]);
}

function handlePestleChange4(selectedOptions) {
  setSelectedPestles4(selectedOptions);
  if (selectedRegions4.length > 0 && selectedOptions.length > 0) {
    let filteredData4 = [];
    selectedRegions4.forEach(selectedRegion => {
      const regionData = data4.find(item => item.region === selectedRegion.value);
      selectedOptions.forEach(selectedOption => {
        filteredData4 = filteredData4.concat(
          regionData.data.filter(item => item.pestle === selectedOption.value)
        );
      });
    });
    setFilteredData4(filteredData4);
  }
}

//For the switches
const [country,setCountry] = useState(true);
const [region,setRegion] = useState(false);
const [sector,setSector] = useState(true);
const [pestle,setPestle] = useState(false);

//to export 
selectedData1 = filteredData1; //country/sector
selectedData2 = filteredData2; //region/sector
selectedData3 = filteredData3; //country/pestle
selectedData4 = filteredData4; //region/pestle
seCtor = sector;
peStle = pestle;
defaultdata = data5;

//setting the switch case for the mainData
(country && sector) ? mainData = selectedData1
                  : (region && sector) ? mainData = selectedData2
                  : (country && pestle) ? mainData = selectedData3
                  : (region && pestle) ? mainData = selectedData4
                  :  mainData = []                  

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
                      1.The user can chosen only two options(using the buttons) at a time to filter the options.
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
          <Typography variant="h5" color='orange'>
            TotalIntensity
            <span style={{color:colors.grey[100]}}> | </span>
            TotalRelevance
            <span style={{color:colors.grey[100]}}> | </span>
            TotalLikelihood
            <span style={{color:colors.grey[100]}}> | </span>
            TotalImpact for each Sector
            <span style={{color:colors.grey[100]}}> & </span>
            Pestle of each Country
            <span style={{color:colors.grey[100]}}> & </span>
            Region
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} 
            m="25px 22px 50px 22px" 
            bgcolor={colors.primary[400]}
            boxShadow= "0 0 10px #202020"
            borderRadius= "5px"
            overflow="hidden"
            >
    <Grid  item xs={12} sm={12} md={12} lg={12} bgcolor={colors.blueAccent[400]}
               borderRadius= "5px 5px 0px 0px"
               >
    <Grid container 
              direction="row"
              justifyContent="space-around"
              alignItems="center" 
              p={2}  
              spacing={2.5}
              >
    <Grid item xs={12} sm={12} md={12} lg={8} sx={{
              color: 'black',
              
            }}>     
      <Select 
      options={   (country && sector) ? countryOptions1 
                : (region && sector) ? regionOptions2 
                : (country && pestle) ? countryOptions3 
                : (region && pestle) ? regionOptions4 
                :  []
                } 
      onChange={  (country && sector) ? handleCountryChange1
                : (region && sector) ? handleRegionChange2 
                : (country && pestle) ? handleCountryChange3
                : (region && pestle) ? handleRegionChange4 
                :  null }
      value=   {  (country && sector) ? selectedCountries1
                : (region && sector) ? selectedRegions2
                : (country && pestle) ? selectedCountries3
                : (region && pestle) ? selectedRegions4
                : [] 
                 }
      placeholder={    (country && sector) ?  "-Countries-"
                    :  (region && sector) ?  "-Regions-"
                    :  (country && pestle) ?  "-Countries-"
                    :  (region && pestle) ?  "-Regions-"
                    :  "-Select a filter-"  
                  }
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
          boxShadow: 'none',
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
        maxWidth: '200px'
        }),
      }}
      />
      <Divider/>
      <Divider/>
      <Select 
      options={   (country && sector) ? sectorOptions1
                : (region && sector) ? sectorOptions2
                : (country && pestle) ? pestleOptions3
                : (region && pestle) ? pestleOptions4
                :  []  
              } 
      onChange={  (country && sector) ? handleSectorChange1
                : (region && sector) ? handleSectorChange2
                : (country && pestle) ? handlePestleChange3
                : (region && pestle) ? handlePestleChange4
                :  [] 
               }
      value= {    (country && sector) ? selectedSectors1
                : (region && sector) ? selectedSectors2 
                : (country && pestle) ? selectedPestles3
                : (region && pestle) ? selectedPestles4 
                :  []
              }
      placeholder={  (country && sector) ? "-Sectors-"
                   : (region && sector) ? "-Sectors-"
                   : (country && pestle) ? "-Pestles-"
                   : (region && pestle) ? "-Pestles-" 
                   :  "-Select a filter-" 
                  }
      noOptionsMessage={()=> "Null data"}
      isSearchable
      isMulti
      styles={{
        placeholder: (baseStyles,state) =>({
          ...baseStyles,
          color:"black",
        }),
        input: (baseStyles,state) =>({
          ...baseStyles,
          color:"white",
        }),
        control: (baseStyles,state) =>({
          ...baseStyles,
          border:0,
          boxShadow: 'none',
          borderRadius:5,
          maxHeight:"5vh",
          overflow:'auto',
          backgroundColor:'#00000050',
        }),
        dropdownIndicator: (baseStyles,state) =>({
          ...baseStyles,
          color: state.isFocused ? "grey" : "black"
        }),
        menu: (baseStyles,state) => ({
         ...baseStyles,
         // width: 'auto',
         maxWidth: '200px'
        }),
      }}
      />
    </Grid>
    <ThemeProvider theme={theme1}>
        <Grid item xs={12} sm={12} md={12} lg={4}>
        <Grid container 
                      direction="row"
                      justifyContent="space-around"
                      alignItems="start" 
                      spacing={0}
                      pl={{xs:'0vw',sm:'5vw',md:'80px',lg:'2vw'}}
                      pr={{xs:'0vw',sm:'4vw',md:'60px',lg:'0vw'}}
                      >
          <Grid  item xs={6} sm={3} md={3} lg={6} >
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
        <Grid item xs={6} sm={3} md={3} lg={6}>
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
        <Grid item xs={6} sm={3} md={3} lg={6} >
           <FormControlLabel
           control={
             <Switch  ///Sector switch
             checked={sector}
             onChange={(event) => setSector(event.target.checked)}
             disabled = { pestle ? true : false }
          
             />
           }
           label="Sector:"
           labelPlacement="start"
          />
        </Grid>
        <Grid item xs={6} sm={3} md={3} lg={6} >
          <FormControlLabel
           control={
             <Switch  ///Pestle switch
             checked={pestle}
             onChange={(event) => setPestle(event.target.checked)}
             disabled = { sector ? true : false }
          
             />
           }
           label="Pestle:"
           labelPlacement="start"
          />
        </Grid>        
        </Grid>
        </Grid>
    </ThemeProvider>
    </Grid>           
    </Grid>
    <Grid item xs={12} sm={12} md={12} lg={12} height="75vh">
        <PersistentDrawerRight />
    </Grid>
    <Grid item xs={12} sm={12} md={12} lg={12} sx={{display: (!country && !sector && !region && !pestle)? 'none' :'block'}}>
      <Stack
            direction={{ xs:'row', sm:'row', md: 'row', lg: 'row' }}
            spacing={{ xs:1, sm:2, md: 2, lg: 2 }}
            justifyContent="center"
            alignItems="center"
            pr={{xs:22,sm:20,md:40,lg:50}}  
            pl={{xs:18,sm:25,md:40,lg:47}} 
            pt={0}  
            pb={5} 
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
                      bgcolor='#4da6a6' 
                      >
                 </Box>
                 <Box fontSize='13px'>TotalIntensity</Box>
               </Stack>
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
                 <Box fontSize='13px'>TotalRelevance</Box>
               </Stack>
              </Stack>
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
                      bgcolor='#008080' 
                      >
                 </Box>
                 <Box fontSize='13px'>TotalLikelihood</Box>
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
                 <Box fontSize='13px'>TotalImpact</Box>
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
         Bar1,
         mainData,
         seCtor,
         peStle,
         defaultdata
        };




