import { styled, useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import {Divider} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Box, Slider, Switch } from '@mui/material';
import FormControlLabel from "@mui/material/FormControlLabel";
import { tokens } from "../../theme";
import React, { useState,useEffect } from 'react';
import Select from 'react-select';
import LineChart1 from "../../components/LineChart1";
import TuneIcon from '@mui/icons-material/Tune';
import ConstructionIcon from '@mui/icons-material/Construction';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';


const drawerWidth = 200;

const AppBar1 = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const AppBar2 = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    width:199,
    height:65,
    boxShadow:'none',
    transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width:199,
    height:65,
    boxShadow:'none',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight:0,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));


let enableArea;
let baseLinevalue;
let areaOpacity;
let lineWidth;
let pointSize;
let pointBorderWidth;
let enablePoints;
let enablePointslabel;
let enableGridX;
let enableGridY;
let toolTip;
const animationData = [
  { value: "default", label: "Default" },
  { value: "gentle", label: "Gentle" },
  { value: "wobbly", label: "Wobbly" },
  { value: "stiff", label: "Stiff" },
  { value: "slow", label: "Slow" },
  { value: "molasses", label: "Molasses" },
];
let aniMation;
const curveData = [
  { value: "basis", label: "Basis" },
  { value: "cardinal", label: "Cardinal" },
  { value: "catmullRom", label: "Catmull-Rom" },
  { value: "linear", label: "Linear" },
  { value: "monotoneX", label: "Monotone X" },
  { value: "monotoneY", label: "Monotone Y" },
  { value: "natural", label: "Natural" },
  { value: "step", label: "Step" },
  { value: "stepAfter", label: "Step After" }
];
let cuRve;
const colorData = [];
let coLor;

const PersistentDrawerRight = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);

  //Inside the Drawer  
  const [enablearea, setEnablearea] = useState(false);
  const [baselinevalue, setBaselinevalue] = useState(0);
  const [areaopacity, setAreaopacity] = useState(0.2);
  const [linewidth, setLinewidth] = useState(2);
  const [pointsize, setPointsize] = useState(10);
  const [pointborderwidth, setPointborderwidth] = useState(1);
  const [enablepoints, setEnablepoints] = useState(true);
  const [enablepointslabel, setEnablepointslabel] = useState(true);
  const [enablegridX, setEnablegridX] = useState(false);
  const [enablegridY, setEnablegridY] = useState(false);
  const [tooltip, setTooltip] = useState(true);
  const [selectedAnimation, setSelectedAnimation] = useState(null);
  const [selectedCurve, setSelectedCurve] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    localStorage.setItem('enablearea', enablearea);
    localStorage.setItem('baselinevalue', baselinevalue);
    localStorage.setItem('areaopacity', areaopacity);
    localStorage.setItem('linewidth', linewidth);
    localStorage.setItem('pointsize', pointsize);
    localStorage.setItem('pointborderwidth', pointborderwidth);
    localStorage.setItem('enablepoints', enablepoints);
    localStorage.setItem('enablepointslabel', enablepointslabel);
    localStorage.setItem('enablegridX', enablegridX);
    localStorage.setItem('enablegridY', enablegridY);
    localStorage.setItem('tooltip', tooltip);
    localStorage.setItem('selectedAnimation', selectedAnimation);
    localStorage.setItem('selectedCurve', selectedCurve);
    localStorage.setItem('selectedColor', selectedColor);
  }, [
    enablearea,
    baselinevalue,
    areaopacity,
    linewidth,
    pointsize,
    pointborderwidth,
    enablepoints,
    enablepointslabel,
    enablegridX,
    enablegridY,
    tooltip,
    selectedAnimation,
    selectedCurve,
    selectedColor,
  ]);
  
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
 const handleChange = (selectedAnimation) => {  /// Animation
    setSelectedAnimation(selectedAnimation);
  };
 const handleChange1 = (selectedColor) => {  /// Color
    setSelectedColor(selectedColor);
  };
 const handleChange2 = (selectedCurve) => {  /// Curve
    setSelectedCurve(selectedCurve);
  };
  
  
  enableArea = enablearea;
  baseLinevalue = baselinevalue;
  areaOpacity = areaopacity;
  lineWidth = linewidth;
  pointSize = pointsize;
  pointBorderWidth = pointborderwidth;
  enablePoints = enablepoints;
  enablePointslabel = enablepointslabel;
  enableGridX = enablegridX;
  enableGridY = enablegridY;
  toolTip = tooltip;
  aniMation=selectedAnimation?.value || "wobbly";
  cuRve=selectedCurve?.value || "catmullRom";
  coLor=selectedColor?.value || "nivo";
   
  
  return (
    <>
    <LineChart1 />
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box>
       <AppBar1 sx={{
              width:50,
              height:60,
              borderRadius: "20px 0px 0px 20px",
              marginTop:{xs:37,sm:37,md:37,lg:27},
              bgcolor:colors.grey[800]
            }} open={open}>
      
            <Box 
                color="inherit"
                aria-label="open drawer"
                pt='12px'
                pb='1px'
                pl='10px'
            >
              <IconButton 
                   sx={{color:'orange'}} 
                   onClick={()=>setOpen(!open)}>
                   {theme.direction === 'ltr' ?
               <TuneIcon />
                : 
               <TuneIcon />
               }
              </IconButton>
            </Box>  
        
      </AppBar1>
      </Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            bgcolor: colors.primary[400],
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
       <DrawerHeader >
          <AppBar2  sx={{bgcolor:colors.primary[900]}} >
             <Box 
                 sx={{
                   fontSize:'20px',
                   display:'flex',
                   justifyContent:'flex-start',
                   fontWeight:"bold",
                   margin:"auto", 
                   color:colors.grey[100]
                 }}>
                  Customize 
             </Box> 
             <Divider />
          </AppBar2>
        </DrawerHeader>
       <Box sx={{
          marginTop:1.5,
          marginBottom:2,
          marginLeft:2,
          color:colors.blueAccent[400],
          fontSize: "20px",
          fontWeight: "bold",
          }}>
             Layout <ViewWeekIcon />
        </Box>
          <List>
            <ThemeProvider theme={theme1}>
              <Box sx={{
                display: 'flex',
                flexDirection:'column',
                marginLeft:2,
                marginBottom:1
              }}>
                <Typography 
                 sx={{fontSize:'17px',
                      display:'flex',
                      justifyContent:'flex-start',
                    }}>
                  Curve : 
                </Typography>
                <Box display='flex' justifyContent='flex-start' color='black'>
                  <Select
                   options={curveData}
                   onChange={handleChange2}
                   value={selectedCurve}
                   placeholder="-Curve-"
                   styles={{
                      placeholder: (baseStyles,state) =>({
                        ...baseStyles,
                        color:"black"
                      }),
                      control: (baseStyles,state) =>({
                        ...baseStyles,
                        borderRadius:5,
                        width:150
                        // borderColor:colors.grey[100]
                      }),
                      dropdownIndicator: (baseStyles,state) =>({
                        ...baseStyles,
                        color: state.isFocused ? "grey" : "black",
                      })
                    }}
                  />
                </Box>
                <Box display='flex' justifyContent='flex-start' marginLeft="-16px" pt='5px'>
                  <FormControlLabel
                   control={
                     <Switch  ///Reverse switch
                     checked={enablearea}
                     onChange={(event) => setEnablearea(event.target.checked)}
                     />
                   }
                   label="Enable Area :"
                   labelPlacement="start"
                  />
                </Box>
                <Typography 
                  sx={{fontSize:'17px',
                        display:'flex',
                        justifyContent:'flex-start'
                      }}>
                   Baseline Value : 
                </Typography>
                <Box display='flex' justifyContent='flex-start'>
                  <Slider
                    sx={{
                    width: '100px',
                    marginLeft:1,
                    display: 'block', 
                  }}   
                    value={baselinevalue}
                    onChange={(e, val) => setBaselinevalue(val)}  //// if you increase the country no them nincrease this please
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"  
                    min={0}
                    max={10}
                    step={1}
                    style={{ color: colors.greenAccent[500] }}      
                  />
                </Box>
                <Typography 
                 sx={{fontSize:'17px',
                      display:'flex',
                      justifyContent:'flex-start'
                    }}>
                 Area Opacity : 
                </Typography>
                <Box display='flex' justifyContent='flex-start'> 
                  <Slider
                    sx={{
                      width: '100px',
                      marginLeft:1,
                      
                      display: 'block',
                    }}
                    value={areaopacity}
                    onChange={(event, value) => setAreaopacity(value)}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"  
                    min={0}
                    max={1}
                    step={0.1}
                    style={{ color: colors.greenAccent[500] }}  
                  />
                </Box>
                <Box display='flex' justifyContent='flex-start'></Box>
              </Box>
            </ThemeProvider>
          </List>
        <Divider></Divider>
        <Divider />
        <List>
        <ThemeProvider theme={theme1}>
          <Box sx={{
            display: 'flex',
            flexDirection:'column' 
          }}>
           <Box sx={{
                color: colors.blueAccent[400],
                fontSize: "20px",
                fontWeight: "bold",
                marginLeft:2,
                marginBottom:2,
                }}>
              Tools <ConstructionIcon />
           </Box>
           <Box display='flex' justifyContent='flex-start' >
            <FormControlLabel
             sx={{labelSize: "20px"}}
             control={
               <Switch  ///Enable switch
                checked={enablepointslabel}
                onChange={(event) => setEnablepointslabel(event.target.checked)}
                />
              }
              label="EnableLabel:"
              labelPlacement="start"
            />
           </Box>
           <Box display='flex' justifyContent='flex-start'>
            <FormControlLabel
              control={
                <Switch  ///Enable switch
                checked={enablepoints}
                onChange={(event) => setEnablepoints(event.target.checked)}
                />
              }
              label="EnablePoints:"
              labelPlacement="start"
            />
           </Box>
           <Box display='flex' justifyContent='flex-start'>
            <FormControlLabel
              control={
               <Switch  ///Enable gridx switch
                checked={enablegridX}
                onChange={(event) => setEnablegridX(event.target.checked)}
                />
              }
              label=" EnableGrid X:"
              labelPlacement="start"
            />
           </Box>
           <Box display='flex' justifyContent='flex-start'>
            <FormControlLabel
              control={
                <Switch  ///Enable gridy switch
                checked={enableGridY}
                onChange={(event) => setEnablegridY(event.target.checked)}
                />
              }
              label="EnableGrid Y:"
              labelPlacement="start"
            />
           </Box>
           <Box display='flex' justifyContent='flex-start'>
            <FormControlLabel
              control={
                <Switch  ///Enable tooltip switch
                checked={tooltip}
                onChange={(event) => setTooltip(event.target.checked)}
                />
              }
              label="Tooltip:"
              labelPlacement="start"
            />
           </Box> 
          </Box>
        </ThemeProvider>
        </List>
        <Divider></Divider>
         <Box sx={{
                color: colors.blueAccent[400],
                fontSize: "20px",
                fontWeight: "bold",
                marginLeft:2,
                marginBottom:2,
                marginTop:1
                }}>
             Styles < FormatPaintIcon/> 
        </Box>
        {/* <Divider>  */}
          <List>
            <ThemeProvider theme={theme1}>
              <Box sx={{
                display: 'flex',
                flexDirection:'column',
                marginLeft:2,
                marginBottom:2
              }}>
                 
                <Typography 
                 sx={{fontSize:'17px',
                      display:'flex',
                      justifyContent:'flex-start'
                    }}>
                  Line Width : 
                </Typography>
                <Box display='flex' justifyContent='flex-start'> 
                  <Slider
                    sx={{
                      width: '100px',
                      marginLeft:1,
                      
                      display: 'block',
                    }}
                    value={linewidth}
                    onChange={(event, value) => setLinewidth(value)}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"  
                    min={0}
                    max={20}
                    step={1}
                    style={{ color: colors.greenAccent[500] }}  
                  />
                </Box>
                <Typography 
                 sx={{fontSize:'17px',
                      display:'flex',
                      justifyContent:'flex-start',
                      pt:'5px'
                    }}>
                  Color : 
                </Typography>
                <Box display='flex' justifyContent='flex-start' color='black'>
                  <Select
                   options={colorData}
                   onChange={handleChange1}
                   value={selectedColor}
                   placeholder="-Color-"
                   styles={{
                      placeholder: (baseStyles,state) =>({
                        ...baseStyles,
                        color:"black"
                      }),
                      control: (baseStyles,state) =>({
                        ...baseStyles,
                        borderRadius:5,
                        width:150
                        // borderColor:colors.grey[100]
                      }),
                      dropdownIndicator: (baseStyles,state) =>({
                        ...baseStyles,
                        color: state.isFocused ? "grey" : "black",
                      })
                    }}
                  />
                </Box>
                <Typography 
                  sx={{fontSize:'17px',
                        display:'flex',
                        justifyContent:'flex-start',
                        pt:'10px'
                      }}>
                  Point Size : 
                </Typography>
                <Box display='flex' justifyContent='flex-start'>
                  <Slider
                    sx={{
                    
                       width: '100px',
                      marginLeft:1,
                    
                    display: 'block', 
                  }}   
                    value={pointsize}
                    onChange={(e, val) => setPointsize(val)}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"  
                    min={2}
                    max={20}
                    step={1}
                    style={{ color: colors.greenAccent[500] }}      
                  />
                </Box>
                <Typography 
                 sx={{fontSize:'17px',
                      display:'flex',
                      justifyContent:'flex-start',
                      pt:'5px'
                    }}>
                  Point Border : 
                </Typography>
                <Box display='flex' justifyContent='flex-start'> 
                  <Slider
                    sx={{
                      width: '100px',
                      marginLeft:1,
                      
                      display: 'block',
                    }}
                    value={pointborderwidth}
                    onChange={(event, value) => setPointborderwidth(value)}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"  
                    min={0}
                    max={20}
                    step={1}
                    style={{ color: colors.greenAccent[500] }}  
                  />
                </Box>
                <Typography 
                 sx={{fontSize:'17px',
                      display:'flex',
                      justifyContent:'flex-start',
                      pt:'5px'
                    }}>
                  Animation : 
                </Typography>
                <Box display='flex' justifyContent='flex-start' color='black'>
                  <Select
                   options={animationData}
                   onChange={handleChange}
                   value={selectedAnimation}
                   placeholder="-Animate-"
                   styles={{
                      placeholder: (baseStyles,state) =>({
                        ...baseStyles,
                        color:"black"
                      }),
                      control: (baseStyles,state) =>({
                        ...baseStyles,
                        borderRadius:5,
                        width:150
                        // borderColor:colors.grey[100]
                      }),
                      dropdownIndicator: (baseStyles,state) =>({
                        ...baseStyles,
                        color: state.isFocused ? "grey" : "black",
                      })
                    }}
                  />
                </Box>
                <Box display='flex' justifyContent='flex-start'></Box>
              </Box>
            </ThemeProvider>
          </List>
        <Divider></Divider>
      </Drawer>
    </Box>
    </>
  );
}

export {
  PersistentDrawerRight,
  enableArea,
  baseLinevalue,
  areaOpacity,
  lineWidth,
  pointSize,
  pointBorderWidth,
  enablePoints,
  enablePointslabel,
  enableGridX,
  enableGridY,
  toolTip,
  aniMation,
  cuRve,
  coLor
};

