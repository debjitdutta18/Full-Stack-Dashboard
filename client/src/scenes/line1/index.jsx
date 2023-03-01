import { Box, Switch, Grid, Divider,Typography,Tooltip, Avatar} from "@mui/material";
import { tokens } from "../../theme";
import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState,useEffect } from 'react';
import Select from 'react-select';
import FormControlLabel from "@mui/material/FormControlLabel";
import {PersistentDrawerRight} from "./sidedrawer"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'; 

let selectedData; 
let seCtor;
let peStle;
let defaultdata;

const Line1 = () => {

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

  // Fetching api data
  const [data1, setData1] = useState([]); //country/sector
  useEffect(() => {
    fetch("https://13.127.29.150/line1")
      .then((res) => res.json())
      .then((data1) => setData1(data1))
      .catch((error) => console.log(error));
  }, []);

  const [data2, setData2] = useState([]); //region/sector
  useEffect(() => {
    fetch("https://13.127.29.150/line2")
    
      .then((res) => res.json())
      .then((data2) => setData2(data2))
      .catch((error) => console.log(error));
  }, []);

  const [data3, setData3] = useState([]); //country/pestle
  useEffect(() => {
    fetch("https://13.127.29.150/line3")
      .then((res) => res.json())
      .then((data3) => setData3(data3))
      .catch((error) => console.log(error));
  }, []);

  const [data4, setData4] = useState([]); //region/pestle
  useEffect(() => {
    fetch("https://13.127.29.150/line4")
      .then((res) => res.json())
      .then((data4) => setData4(data4))
      .catch((error) => console.log(error));
  }, []);

  const [data5, setData5] = useState([]); //For default line
  useEffect(() => {
    fetch("https://13.127.29.150/defaultline")
      .then((res) => res.json())
      .then((data5) => setData5(data5))
      .catch((error) => console.log(error));
  }, []);


  //For the switches
  const [country,setCountry] = useState(true);
  const [region,setRegion] = useState(false);
  const [sector,setSector] = useState(true);
  const [pestle,setPestle] = useState(false);

  let data;
  seCtor = sector;
  peStle = pestle; 
  defaultdata = data5;    
  
  //Switch conditions
  (country && sector) ? data = data1
                  : (region && sector) ? data = data2
                  : (country && pestle) ? data = data3
                  : (region && pestle) ? data = data4
                  :  data = []
  


  // React dropdown selector country/sector
  const options = data.map((item) => ({ value: item.id, label: item.id }));
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    selectedData = data.filter((item) =>
      selectedOption.map((opt) => opt.value).includes(item.id)
    );
  };
   
  
  return (
    <>
      <Grid container>
         <Grid item xs={12} sm={12} md={12} lg={12} >
          <Box pl='22px'>
            <Box display="flex" flexDirection="row">
            <Typography variant="h1" color={colors.grey[100]} fontWeight="bold">Line Chart</Typography>
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
                       3.Choosing many countries together will lead to truncation of legends and conjusted chart.
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
              Number of Sectors
              <span style={{color:colors.grey[100]}}> & </span>
              Pestles of each Country
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
              spacing={2}
              >
      <Grid item xs={12} sm={12} md={12} lg={8} sx={{
           color: 'black',
         }}>
        <Select
          value={selectedOption}
          onChange={handleChange}
          options={options}
          placeholder={  (country && sector) ? "-Countries-"
                         : (region && sector) ? "-Regions-"
                         : (country && pestle) ? "-Countries-"
                         : (region && pestle) ? "-Regions-"
                         :  "-Select a filter-"
                        }
          noOptionsMessage={() => "Null Data"}
          isSearchable={true}
          isMulti={true}
          styles={{
            placeholder: (baseStyles, state) => ({
              ...baseStyles,
              color: "black",
            }),
            input: (baseStyles, state) => ({
              ...baseStyles,
              color: "white",
            }),
            control: (baseStyles, state) => ({
              ...baseStyles,
              border:0,
              boxShadow:'none',
              borderRadius:5,
              maxHeight:"5vh",
              overflow:'auto',
              backgroundColor:'#00000050',
            }),
            dropdownIndicator: (baseStyles, state) => ({
              ...baseStyles,
              color: state.isFocused ? "grey" : "black",
            }),
            menu: (baseStyles,state) => ({
                    ...baseStyles,
                    maxWidth: '200px'
            })
          }}
        />
        <Divider/>
        <Divider/>
      </Grid>
      <ThemeProvider theme={theme1}>
         <Grid item xs={12} sm={12} md={12} lg={4} >
           <Grid container 
                     direction="row"
                     justifyContent="space-around"
                     alignItems="start" 
                     spacing={0} 
                     pl={{xs:'0vw',sm:'5vw',md:'80px',lg:'2vw'}}
                     pr={{xs:'0vw',sm:'4vw',md:'60px',lg:'0vw'}}
                     >
                <Grid item xs={6} sm={3} md={3} lg={6} >
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
                <Grid item xs={6} sm={3} md={3} lg={6} >
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
                   <Switch  ///Country switch
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
      <Grid height="82.5vh"  >
        <PersistentDrawerRight />
      </Grid>
      </Grid>
      </Grid>
    </>
  );
};


export{
  Line1,
  selectedData,
  seCtor,
  peStle,
  defaultdata
};

