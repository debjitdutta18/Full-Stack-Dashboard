import { styled, useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import {Divider} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Box, Slider, Button, Switch } from '@mui/material';
import FormControlLabel from "@mui/material/FormControlLabel";
import { tokens } from "../../theme";
import React, { useState,useEffect } from 'react';
import Select from 'react-select';
import BarChart2 from "../../components/BarChart2";
import ConstructionIcon from '@mui/icons-material/Construction';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import TuneIcon from '@mui/icons-material/Tune';

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

let layOut;
let groupMode;
let revErse;
let enableLabel;
let enableGridX;
let enableGridY;
let toolTip;
let minValue;
let sliderminValue;
let maxValue;
let slidermaxValue;
let padDing;
let innerpadDing;
let borderRadius;
const animationData = [
  { value: "default", label: "Default" },
  { value: "gentle", label: "Gentle" },
  { value: "wobbly", label: "Wobbly" },
  { value: "stiff", label: "Stiff" },
  { value: "slow", label: "Slow" },
  { value: "molasses", label: "Molasses" },
];
let aniMation;
const colorData = [];
let coLor;

const PersistentDrawerRight = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = React.useState(false);
  


  //Inside the Drawer  
  const [layout, setLayout] = useState(localStorage.getItem('layout') || 'vertical');
  const [groupmode, setGroupmode] = useState(localStorage.getItem('groupmode') || 'stacked');
  const [reverse, setReverse] = useState(localStorage.getItem('reverse') === 'true' || false);
  const [enablelabel, setEnablelabel] = useState(localStorage.getItem('enablelabel') === 'true' || true);
  const [enablegridX, setEnablegridX] = useState(localStorage.getItem('enablegridX') === 'true' || false);
  const [enablegridY, setEnablegridY] = useState(localStorage.getItem('enablegridY') === 'true' || true);
  const [tooltip, setTooltip] = useState(localStorage.getItem('tooltip') === 'true' || true);
  const [minvalue, setMinvalue] = useState(localStorage.getItem('minvalue') === 'true' || true);
  const [maxvalue, setMaxvalue] = useState(localStorage.getItem('maxvalue') === 'true' || true);
  const [sliderminvalue, setSliderminvalue] = useState(Number(localStorage.getItem('sliderminvalue')) || 0);
  const [slidermaxvalue, setSlidermaxvalue] = useState(Number(localStorage.getItem('slidermaxvalue')) || 0);
  const [padding, setPadding] = useState(Number(localStorage.getItem('padding')) || 0.6);
  const [innerpadding, setInnerpadding] = useState(Number(localStorage.getItem('innerpadding')) || 3);
  const [borderradius, setBorderradius] = useState(Number(localStorage.getItem('borderradius')) || 6);
  const [selectedAnimation, setSelectedAnimation] = useState(localStorage.getItem('selectedAnimation'));
  const [selectedColor, setSelectedColor] = useState(localStorage.getItem('selectedColor'));

  useEffect(() => {
    localStorage.setItem('layout', layout);
    localStorage.setItem('groupmode', groupmode);
    localStorage.setItem('reverse', reverse);
    localStorage.setItem('enablelabel', enablelabel);
    localStorage.setItem('enablegridX', enablegridX);
    localStorage.setItem('enablegridY', enablegridY);
    localStorage.setItem('tooltip', tooltip);
    localStorage.setItem('minvalue', minvalue);
    localStorage.setItem('sliderminvalue', sliderminvalue);
    localStorage.setItem('maxvalue', maxvalue);
    localStorage.setItem('slidermaxvalue', slidermaxvalue);
    localStorage.setItem('padding', padding);
    localStorage.setItem('innerpadding', innerpadding);
    localStorage.setItem('borderradius', borderradius);
    localStorage.setItem('selectedAnimation', selectedAnimation);
    localStorage.setItem('selectedColor', selectedColor);
  }, );
  
  
  
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
            // bgcolor:"black",
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

 const handleSwitchChangemin = () => { //// min value
    setMinvalue(!minvalue);
    if (minvalue) setSliderminvalue(0);
  };
 const handleSwitchChangemax = () => {  //// max value
    setMaxvalue(!maxvalue);
    if (maxvalue) setSlidermaxvalue(0);
  };
 const handleChange = (selectedAnimation) => {  /// animation
    setSelectedAnimation(selectedAnimation);
  };
 
 const handleChange1 = (selectedColor) => {  /// Color
    setSelectedColor(selectedColor);
  };
 
  
  layOut = layout;
  groupMode = groupmode;
  revErse = reverse;
  enableLabel = enablelabel;
  enableGridX = enablegridX;
  enableGridY = enablegridY;
  toolTip = tooltip;
  sliderminValue = sliderminvalue;
  minValue = minvalue ? "auto" : sliderminValue;
  slidermaxValue = slidermaxvalue;
  maxValue = maxvalue ? "auto" : slidermaxValue;
  padDing=padding;
  innerpadDing=innerpadding;
  borderRadius=borderradius;
  aniMation=selectedAnimation?.value || "wobbly";
  coLor=selectedColor?.value || "nivo";
  

  
  return (
    <>
    <BarChart2 />
    <Box sx={{ display: 'flex' }} overfolow='auto'>
      <CssBaseline />
      <Box >
        <AppBar1 sx={{
              width:50,
              height:60,
              borderRadius: "20px 0px 0px 20px",
              marginTop:{xs:37,sm:37,md:37,lg:27},
              bgcolor:colors.grey[800],
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
          bgcolor:colors.primary[400]
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
       >
        <DrawerHeader  >
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
        <List>
        <Box sx={{
            display:'flex', 
            flexDirection:'column',
            marginLeft:2,
            marginRight:4,
            marginBottom:1
        }}
        >
        <Box sx={{
          marginTop:1,
          marginBottom:2,
          color:colors.blueAccent[400],
          fontSize: "20px",
          fontWeight: "bold",
          }}>
             Layout <ViewWeekIcon/>
        </Box>
          <Typography 
             sx={{fontSize:'17px',
                   display:'flex',
                   justifyContent:'flex-start'
                 }}>
               Horizantal : 
          </Typography>
          <Button    ///Layout button horizantal
          sx={{
              bgcolor:colors.greenAccent[500],
              margin: theme.spacing(1),
              color:colors.grey[100],
              borderRadius:"5px"
              
          }}
          size = "medium"
          onClick={() => setLayout('horizontal')}
          >
            Horizontal
          </Button>
          <Typography 
             sx={{fontSize:'17px',
                   display:'flex',
                   justifyContent:'flex-start'
                 }}>
               Vertical : 
          </Typography>
          <Button      ///Layout button vertical
          sx={{
              bgcolor:colors.greenAccent[500],
              margin: theme.spacing(1),
              color:colors.grey[100],
              borderRadius:"5px"
            }}
          size = "medium"
          onClick={() => setLayout('vertical')}
          >
            Vertical
          </Button>
          <Typography 
             sx={{fontSize:'17px',
                   display:'flex',
                   justifyContent:'flex-start'
                 }}>
               Stacked : 
          </Typography>
          <Button 
          sx={{
              bgcolor:colors.greenAccent[500],
              margin: theme.spacing(1),
              color:colors.grey[100],
              borderRadius:"5px"
            }}     ///Groupmode button stacked
          size = "medium"
          onClick={() => setGroupmode('stacked')}
          >
          Stacked
          </Button> 
          <Typography 
             sx={{fontSize:'17px',
                   display:'flex',
                   justifyContent:'flex-start'
                 }}>
               Grouped : 
          </Typography>
          <Button 
          sx={{
              bgcolor:colors.greenAccent[500],
              margin: theme.spacing(1),
              color:colors.grey[100],
              borderRadius:"5px"
            }}       ///Groupmode button grouped
          size = "medium" 
          onClick={() => setGroupmode('grouped')}
        >
          Grouped
          </Button>
        </Box> 
        </List>
        <Divider />
        <List>
        <ThemeProvider theme={theme1}>
          <Box sx={{
            display: 'flex',
            flexDirection:'column' 
          }}>
           <Box sx={{
                color:colors.blueAccent[400],
                fontSize: "20px",
                fontWeight: "bold",
                marginLeft:2,
                marginBottom:2,
                }}>
              Tools <ConstructionIcon /> 
           </Box>
           <Box display='flex' justifyContent='flex-start'>
            <FormControlLabel
             control={
               <Switch  ///Reverse switch
               checked={reverse}
               onChange={(event) => setReverse(event.target.checked)}
               />
             }
             label="Reverse:"
             labelPlacement="start"
           />
           </Box>
           <Box display='flex' justifyContent='flex-start'>
            <FormControlLabel
              control={
                <Switch  ///Enable switch
                checked={enablelabel}
                onChange={(event) => setEnablelabel(event.target.checked)}
                />
              }
              label="EnableLabel:"
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
                color:colors.blueAccent[400],
                fontSize: "20px",
                fontWeight: "bold",
                marginLeft:2,
                marginBottom:2,
                marginTop:1
                }}>
             Styles < FormatPaintIcon/> 
        </Box>
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
                  Border Radius : 
                </Typography>
                <Box display='flex' justifyContent='flex-start'> 
                  <Slider
                    sx={{
                      width: '100px',
                      marginLeft:1,
                      color: 'teal',
                      display: 'block',
                    }}
                    value={borderradius}
                    onChange={(event, value) => setBorderradius(value)}
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
                        pt:'17px',
                        display:'flex',
                        justifyContent:'flex-start'
                      }}>
                  Padding : 
                </Typography>
                <Box display='flex' justifyContent='flex-start'>
                  <Slider
                    sx={{
                    width: '100px',
                    marginLeft:'1',
                    color: 'teal',
                    // display: 'block', 
                  }}   
                    value={padding}
                    onChange={(event, value) => setPadding(value)}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"  
                    min={0}
                    max={0.9}
                    step={0.01}
                    style={{ color: colors.greenAccent[500] }}    
                  />
                </Box>
                <Typography 
                 sx={{fontSize:'17px',
                      display:'flex',
                      justifyContent:'flex-start'
                    }}>
                  Inner Padding : 
                </Typography>
                <Box display='flex' justifyContent='flex-start'> 
                  <Slider
                    sx={{
                      width: '100px',
                      marginLeft:1,
                      color: 'teal',
                      display: 'block',
                    }}
                    value={innerpadding}
                    onChange={(event, value) => setInnerpadding(value)}
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
                  Animation : 
                </Typography>
                <Box display='flex' justifyContent='flex-start' color='black'>
                  <Select
                   options={animationData}
                   onChange={handleChange}
                   value={selectedAnimation}
                   placeholder="-Animation-"
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
        {/* </Divider> */}
        <Divider></Divider>
        <List>
        <ThemeProvider theme={theme1}>
          <Box sx={{
            display: 'flex',
            flexDirection:'column' 
          }}>
            <Box sx={{ 
                color:colors.blueAccent[400],
                fontSize: "20px",
                fontWeight: "bold",
                marginLeft:2,
                marginBottom:2
                }}>
              Misc <MiscellaneousServicesIcon/>
            </Box>
            <Box display='flex' justifyContent='flex-start'>
              <FormControlLabel
              control={
                  <Switch 
                  checked={maxvalue} 
                  onChange={handleSwitchChangemax} />
              }
              label="MaxValue:"
              labelPlacement="start"
              />
            </Box>
            <Typography 
               sx={{fontSize:'17px',
                     margin: '0 15px',
                   }}>
               Custom Max Value : 
            </Typography>  
            <Box display='flex' justifyContent='flex-start' >
              <Slider sx={{
                width: '100px',
                margin: '0 25px',
                color: colors.greenAccent[500],
                display: 'block',
              }}
              value={slidermaxvalue}
              onChange={(event, value) => setSlidermaxvalue(value)}
              disabled={maxvalue}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto" 
              min={10}
              max={300}
              step={10}
           
              />
            </Box>
            <Box display='flex' justifyContent='flex-start'>
              <FormControlLabel
              control={
                  <Switch 
                  checked={minvalue} 
                  onChange={handleSwitchChangemin} />
              }
              label="MinValue:"
              labelPlacement="start"
              />
            </Box>
            <Typography 
              sx={{fontSize:'17px',
                  margin: '0 15px',
                }}>
              Custom Min Value : 
            </Typography>
            <Box display='flex' justifyContent='flex-start'>
              <Slider sx={{
                width: '100px',
                margin: '0 25px',
                color: colors.greenAccent[500],
                display: 'block',
              }}
              value={sliderminvalue}
              onChange={(event, value) => setSliderminvalue(value)}
              disabled={minvalue}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto" 
              min={-10}
              max={300}
              step={10}
              
              />
            </Box>
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
  layOut,
  groupMode,
  revErse,
  enableLabel,
  enableGridX,
  enableGridY,
  toolTip,
  minValue,
  maxValue,
  padDing,
  innerpadDing,
  borderRadius,
  aniMation,
  coLor
};

