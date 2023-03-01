import { Box, IconButton, useTheme,styled,Button } from "@mui/material";
import { useContext, useState,  useEffect } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import TableChartIcon from '@mui/icons-material/TableChart';
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import CloseIcon from '@mui/icons-material/Close';
import {useNavigate} from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';

 


const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(
  parseInt(localStorage.getItem("selectedItem")) || 0
);

const handleListItemClick = (index) => {
  setSelectedItem(index);
  localStorage.setItem("selectedItem", index);
};
  const [state, setState] = useState({
  left: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, left: open });
  };

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    backgroundColor:colors.primary[400]
  }));
  
 const [isSticky, setIsSticky] = useState(() => {
    const stickyState = localStorage.getItem('isSticky');
    return stickyState !== null ? JSON.parse(stickyState) : true;
  });

  useEffect(() => {
    localStorage.setItem('isSticky', JSON.stringify(isSticky));
  }, [isSticky]);

  const handleButtonClick = () => {
    setIsSticky((prevIsSticky) => !prevIsSticky);
  };


  return (
    <Box  display="flex" 
          justifyContent="space-between" 
          p={2}  
          m="7px 20px 15px 20px " 
          bgcolor={colors.primary[400]}
          boxShadow= "0 0 10px #202020"
          borderRadius= "10px"
          position={isSticky ? 'sticky' : 'static'}
          top={1}
          zIndex={1}
          opacity={1}
          backdropfilter="blur(10px)"
          >
      <Box display="flex" >
        <IconButton sx={{display:{xs:'block',sm:'block',md:'block',lg:'none',xl:'none'},ml : " 4px",mt : " 9px","&:hover": { color: "orange" }}} onClick={toggleDrawer(true)}><MenuIcon /></IconButton>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
         <Button
             sx={{
              bgcolor:colors.primary[400],
              color:colors.grey[100],
              borderRadius:"5px",
              border:`1px solid ${colors.grey[100]}`
            }}
            
            onClick={handleButtonClick}
          >
            {isSticky ? 'Non-sticky' : 'Sticky'}
          </Button>
      </Box>
      <Box> 
        <Drawer open={state.left} onClose={toggleDrawer(false)}>
            <DrawerHeader >
               <IconButton sx={{marginLeft : " 4px","&:hover": { color: "orange" }}} onClick={toggleDrawer(false)}>
                 <CloseIcon />
               </IconButton>
            </DrawerHeader>
        <Divider />  
        <Box sx={{width:200, bgcolor:colors.primary[400]}}>
        <List sx={{fontWeight:"bold"}}>
            <ListItem  disablePadding sx={{ display: 'block' }} onClick = {() =>{navigate("/");handleListItemClick(0)} }>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent:'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr:  3,
                    justifyContent: 'center',
                    color: selectedItem === 0 ? 'orange' : 'inherit',
                  }}
                >
                   <HomeOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" sx={{ opacity:  1,color: selectedItem === 0 ? 'orange' : 'inherit' }} />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider/>
        <Typography
              variant="h5"
              color={colors.blueAccent[400]}
              sx={{ m: "20px 0 10px 15px" }}
              display='block'
            >
              Data
        </Typography>
        <List >
            <ListItem  disablePadding sx={{ display: 'block' }} onClick = {() =>{navigate("/table1");handleListItemClick(1)} }>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent:'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    //  "&:hover": { color: "orange" },
                    minWidth: 0,
                    mr:  3,
                    justifyContent: 'center',
                    color: selectedItem === 1 ? 'orange' : 'inherit',
                  }}
                >
                   <TableChartIcon/>
                </ListItemIcon>
                <ListItemText primary="Table 1" sx={{ opacity:  1,color: selectedItem === 1 ? 'orange' : 'inherit' }} />
              </ListItemButton>
            </ListItem>
        </List>
        <List >
            <ListItem  disablePadding sx={{ display: 'block' }} onClick = {() =>{navigate("/table2");handleListItemClick(2);} }>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent:'center',
                  px: 2.5,
                  
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr:  3,
                    justifyContent: 'center',
                    color: selectedItem === 2 ? 'orange' : 'inherit',
                  }}
                >
                   <TableChartIcon />
                </ListItemIcon>
                <ListItemText primary="Table 2" sx={{ opacity:  1,color: selectedItem === 2 ? 'orange' : 'inherit' }} />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider/>
        <Typography
              variant="h5"
              color={colors.blueAccent[400]}
              sx={{ m: "20px 0 10px 15px" }}
              display='block'
            >
              Charts
        </Typography>
        <List >
            <ListItem  disablePadding sx={{ display: 'block' }} onClick = {() =>{navigate("/bar1");handleListItemClick(3)} }>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent:'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr:  3,
                    justifyContent: 'center',
                    color: selectedItem === 3 ? 'orange' : 'inherit',
                  }}
                >
                   <BarChartOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="BarChart 1" sx={{ opacity:  1,color: selectedItem === 3 ? 'orange' : 'inherit', }} />
              </ListItemButton>
            </ListItem>
        </List>
        <List >
            <ListItem  disablePadding sx={{ display: 'block' }} onClick = {() =>{navigate("/bar2");handleListItemClick(4)}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent:'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr:  3,
                    justifyContent: 'center',
                    color: selectedItem === 4 ? 'orange' : 'inherit',
                  }}
                >
                   <BarChartOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="BarChart 2" sx={{ opacity:  1,color: selectedItem === 4 ? 'orange' : 'inherit'}} />
              </ListItemButton>
            </ListItem>
        </List>
        <List >
            <ListItem  disablePadding sx={{ display: 'block' }} onClick = {() =>{navigate("/line1");handleListItemClick(5)} }>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent:'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr:  3,
                    justifyContent: 'center',
                    color: selectedItem === 5 ? 'orange' : 'inherit',
                  }}
                >
                   <TimelineOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="LineChart" sx={{ opacity:  1,color: selectedItem === 5 ? 'orange' : 'inherit'}} />
              </ListItemButton>
            </ListItem>
        </List>
        <List >
            <ListItem  disablePadding sx={{ display: 'block' }} onClick = {() =>{navigate("/pie1");handleListItemClick(6)} }>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent:'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr:  3,
                    justifyContent: 'center',
                    color: selectedItem === 6 ? 'orange' : 'inherit',
                  }}
                >
                   <PieChartOutlineOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="PieChart" sx={{ opacity:  1,color: selectedItem === 6 ? 'orange' : 'inherit'}} />
              </ListItemButton>
            </ListItem>
        </List>
        <List >
            <ListItem  disablePadding sx={{ display: 'block' }} onClick = {() =>{navigate("/geography");handleListItemClick(7)} }>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent:'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr:  3,
                    justifyContent: 'center',
                    color: selectedItem === 7 ? 'orange' : 'inherit',
                  }}
                >
                   <MapOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="GeographyChart" sx={{ opacity:  1,color: selectedItem === 7 ? 'orange' : 'inherit' }} />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        </Box>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Topbar;


