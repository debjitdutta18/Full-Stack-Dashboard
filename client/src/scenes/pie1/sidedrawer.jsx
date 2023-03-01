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
import PieChart1 from "../../components/PieChart1";
import ConstructionIcon from '@mui/icons-material/Construction';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
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
let startAngle;
let endAngle;
let innerRadius;
let padAngle;
let cornerRadius;
let borderWidth;
let activeInnerRadiusOffset;
let activeOuterRadiusOffset;
let sortByValue;
let enableArclabels;
let enableArclinklabels;
let toolTip;
const animationData = [
  { value: "default", label: "Default" },
  { value: "gentle", label: "Gentle" },
  { value: "wobbly", label: "Wobbly" },
  { value: "stiff", label: "Stiff" },
  { value: "slow", label: "Slow" },
  { value: "molasses", label: "Molasses" },
];
const transitionModeData = [
  { value: "startAngle", label: "StartAngle" },
  { value: "middleAngle", label: "MiddleAngle" },
  { value: "endAngle", label: "EndAngle" },
  { value: "innerRadius", label: "InnerRadius" },
  { value:"outerRadius", label:"OuterRadius" },
  { value:"centerRadius", label:"CenterRadius" },
  { value: "pushIn", label: "Pushin" },
  { value: "pushOut", label: "PushOut" },
];
let aniMation;
let transitionMode;
const colorData = [];
let coLor;

const PersistentDrawerRight = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);

  //Inside the Drawer  
const [startangle, setStartangle] = useState(parseInt(localStorage.getItem('startangle')) || 0);
const [endangle, setEndangle] = useState(parseInt(localStorage.getItem('endangle')) || 360);
const [innerradius, setInnerradius] = useState(parseFloat(localStorage.getItem('innerradius')) || 0.5);
const [padangle, setPadangle] = useState(parseFloat(localStorage.getItem('padangle')) || 0.7);
const [cornerradius, setCornerradius] = useState(parseInt(localStorage.getItem('cornerradius')) || 3);
const [borderwidth, setBorderwidth] = useState(parseInt(localStorage.getItem('borderwidth')) || 0);
const [activeouterradiusoffset, setActiveouterradiusoffset] = useState(parseInt(localStorage.getItem('activeouterradiusoffset')) || 8);
const [activeinnerradiusoffset, setActiveinnerradiusoffset] = useState(parseInt(localStorage.getItem('activeinnerradiusoffset')) || 22);
const [sortbyvalue, setSortbyvalue] = useState(localStorage.getItem('sortbyvalue') === 'true' || false);
const [enablearclabels, setEnablearclabels] = useState(localStorage.getItem('enablearclabels') === 'true' || true);
const [enablearclinklabels, setEnablearclinklabels] = useState(localStorage.getItem('enablearclinklabels') === 'true' || true);
const [tooltip, setTooltip] = useState(localStorage.getItem('tooltip') === 'true' || true);
const [selectedAnimation, setSelectedAnimation] = useState(localStorage.getItem('selectedAnimation') || null);
const [selectedtransitionMode, setSelectedtransitionMode] = useState(localStorage.getItem('selectedtransitionMode') || null);
const [selectedColor, setSelectedColor] = useState(localStorage.getItem('selectedColor') || null);

useEffect(() => {
  localStorage.setItem('startangle', startangle);
  localStorage.setItem('endangle', endangle);
  localStorage.setItem('innerradius', innerradius);
  localStorage.setItem('padangle', padangle);
  localStorage.setItem('cornerradius', cornerradius);
  localStorage.setItem('borderwidth', borderwidth);
  localStorage.setItem('activeouterradiusoffset', activeouterradiusoffset);
  localStorage.setItem('activeinnerradiusoffset', activeinnerradiusoffset);
  localStorage.setItem('sortbyvalue', sortbyvalue);
  localStorage.setItem('enablearclabels', enablearclabels);
  localStorage.setItem('enablearclinklabels', enablearclinklabels);
  localStorage.setItem('tooltip', tooltip);
  localStorage.setItem('selectedAnimation', selectedAnimation);
  localStorage.setItem('selectedtransitionMode', selectedtransitionMode);
  localStorage.setItem('selectedColor', selectedColor);
}, [
     startangle, 
     endangle, 
     innerradius, 
     padangle, 
     cornerradius, 
     borderwidth, 
     activeouterradiusoffset, 
     activeinnerradiusoffset, 
     sortbyvalue, 
     enablearclabels, 
     enablearclinklabels, 
     tooltip, 
     selectedAnimation, 
     selectedtransitionMode, 
     selectedColor
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
 const handleChange2 = (selectedtransitionMode) => {  /// transitionMode
    setSelectedtransitionMode(selectedtransitionMode);
  };

  
  
  
  startAngle = startangle;
  endAngle = endangle;
  innerRadius  = innerradius;
  padAngle = padangle;
  cornerRadius = cornerradius;
  borderWidth = borderwidth;
  activeOuterRadiusOffset = activeouterradiusoffset;
  activeInnerRadiusOffset = activeinnerradiusoffset;
  sortByValue = sortbyvalue;
  enableArclabels = enablearclabels;
  enableArclinklabels = enablearclinklabels;
  toolTip = tooltip;
  transitionMode = selectedtransitionMode?.value || "endAngle";
  aniMation=selectedAnimation?.value || "wobbly";
  coLor=selectedColor?.value || "nivo";
   
  
  
  return (
    <>
    <PieChart1 />
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
                color:colors.blueAccent[400],
                fontSize: "20px",
                fontWeight: "bold",
                marginLeft:2,
                marginBottom:1,
                marginTop:1
                }}>
              Layout <ViewWeekIcon/>
        </Box>
          <List>
            <ThemeProvider theme={theme1}>
              <Box sx={{
                display: 'flex',
                flexDirection:'column',
                marginLeft:2,
                marginBottom:1,
                marginTop:1.5,
              }}>
                <Typography 
                  sx={{fontSize:'17px',
                      display:'flex',
                      justifyContent:'flex-start',
                      pt:'5px'
                    }}>
                   Start Angle : 
                </Typography>
                <Box display='flex' justifyContent='flex-start'>
                  <Slider
                    sx={{
                    width: '100px',
                    marginLeft:1,
                   
                    display: 'block', 
                  }}   
                    value={startangle}
                    onChange={(e, val) => setStartangle(val)}  //// if you increase the country no them nincrease this please
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"  
                    min={-180}
                    max={360}
                    step={2}
                    style={{ color: colors.greenAccent[500] }}  
                  />
                </Box>
                <Typography 
                  sx={{fontSize:'17px',
                        display:'flex',
                        justifyContent:'flex-start'
                      }}>
                   End Angle : 
                </Typography>
                <Box display='flex' justifyContent='flex-start'>
                  <Slider
                    sx={{
                    width: '100px',
                    marginLeft:1,
                   
                    display: 'block', 
                  }}   
                    value={endangle}
                    onChange={(e, val) => setEndangle(val)}  //// if you increase the country no them nincrease this please
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"  
                    min={-343}
                    max={360}
                    step={2}
                    style={{ color: colors.greenAccent[500] }}  
                  />
                </Box>
                <Typography 
                 sx={{fontSize:'17px',
                      display:'flex',
                      justifyContent:'flex-start',
                      pt:'5px'
                    }}>
                 Inner Radius : 
                </Typography>
                <Box display='flex' justifyContent='flex-start'> 
                  <Slider
                    sx={{
                      width: '100px',
                      marginLeft:1,
                     
                      display: 'block',
                    }}
                    value={innerradius}
                    onChange={(event, value) => setInnerradius(value)}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"  
                    min={0}
                    max={0.95}
                    step={0.05}
                    style={{ color: colors.greenAccent[500] }}
                  />
                </Box>
                <Typography 
                  sx={{fontSize:'17px',
                        display:'flex',
                        justifyContent:'flex-start'
                      }}>
                   Pad Angle : 
                </Typography>
                <Box display='flex' justifyContent='flex-start'>
                  <Slider
                    sx={{
                    width: '100px',
                    marginLeft:1,
                   
                    display: 'block', 
                  }}   
                    value={padangle}
                    onChange={(e, val) => setPadangle(val)}  //// if you increase the country no them nincrease this please
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"  
                    min={0}
                    max={45}
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
                 Corner Radius: 
                </Typography>
                <Box display='flex' justifyContent='flex-start'> 
                  <Slider
                    sx={{
                      width: '100px',
                      marginLeft:1,
                     
                      display: 'block',
                    }}
                    value={cornerradius}
                    onChange={(event, value) => setCornerradius(value)}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"  
                    min={0}
                    max={45}
                    step={1}
                    style={{ color: colors.greenAccent[500] }}
                  />
                </Box>
                <Box display='flex' justifyContent='flex-start'></Box>
              </Box>
            </ThemeProvider>
          </List>
        {/* </Divider> */}
        <Divider></Divider>
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
                marginBottom:2.5,
                }}>
              Tools <ConstructionIcon /> 
           </Box>
           <Box display='flex' justifyContent='flex-start'>
            <FormControlLabel
              control={
                <Switch  ///Enable switch
                checked={sortbyvalue}
                onChange={(event) => setSortbyvalue(event.target.checked)}
                />
              }
              label="Sort By Value:"
              labelPlacement="start"
            />
           </Box>
           <Box display='flex' justifyContent='flex-start'>
            <FormControlLabel
              control={
                <Switch  ///Enable switch
                checked={enablearclabels}
                onChange={(event) => setEnablearclabels(event.target.checked)}
                />
              }
              label="Arc Labels:"
              labelPlacement="start"
            />
           </Box>
           <Box display='flex' justifyContent='flex-start'>
            <FormControlLabel
              control={
                <Switch  ///Enable gridx switch
                checked={enablearclinklabels}
                onChange={(event) => setEnablearclinklabels(event.target.checked)}
                />
              }
              label=" Arc Link Labels:"
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
                marginBottom:1,
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
                      justifyContent:'flex-start',
                    }}>
                  Border Width : 
                </Typography>
                <Box display='flex' justifyContent='flex-start'> 
                  <Slider
                    sx={{
                      width: '100px',
                      marginLeft:1,
                      display: 'block',
                    }}
                    value={borderwidth}
                    onChange={(event, value) => setBorderwidth(value)}
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
                  ActiveOuterRadius : 
                </Typography>
                <Box display='flex' justifyContent='flex-start'>
                  <Slider
                    sx={{
                      width: '100px',
                      marginLeft:1,
                      display: 'block', 
                  }}   
                    value={activeouterradiusoffset}
                    onChange={(e, val) => setActiveouterradiusoffset(val)}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"  
                    min={0}
                    max={50}
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
                  ActiveInnerRadius : 
                </Typography>
                <Box display='flex' justifyContent='flex-start'> 
                  <Slider
                    sx={{
                       width: '100px',
                       marginLeft:1,
                       display: 'block',
                    }}
                    value={activeinnerradiusoffset}
                    onChange={(event, value) => setActiveinnerradiusoffset(value)}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"  
                    min={0}
                    max={50}
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
                <Typography 
                 sx={{fontSize:'17px',
                      display:'flex',
                      justifyContent:'flex-start',
                      pt:'10px'
                    }}>
                  Transition Mode : 
                </Typography>
                <Box display='flex' justifyContent='flex-start' color='black'>
                  <Select
                   options={transitionModeData}
                   onChange={handleChange2}
                   value={selectedtransitionMode}
                   placeholder="-Transition-"
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
        
        <List>
        <ThemeProvider theme={theme1}>
          <Box sx={{
            display: 'flex',
            flexDirection:'column' 
          }}>
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
  
  startAngle,
  endAngle,
  innerRadius,
  padAngle,
  cornerRadius,
  borderWidth,
  activeOuterRadiusOffset,
  activeInnerRadiusOffset,
  sortByValue,
  enableArclabels,
  enableArclinklabels,
  toolTip,
  aniMation,
  transitionMode,
  coLor
};

