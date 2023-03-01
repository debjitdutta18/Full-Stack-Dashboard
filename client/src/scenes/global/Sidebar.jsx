import {useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { tokens } from "../../theme";
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import TableChartIcon from '@mui/icons-material/TableChart';
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {useNavigate} from "react-router-dom"
import CloseIcon from '@mui/icons-material/Close';


const drawerWidth = 200;
let oPen;

const MiniDrawer = () => {
const theme = useTheme();
const colors = tokens(theme.palette.mode);


const openedMixin = (theme) => ({
  width:drawerWidth,
  backgroundColor:colors.primary[400],
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  [theme.breakpoints.down('lg')]: {
     display: 'none'
  },
});

const closedMixin = (theme) => ({
  backgroundColor:colors.primary[400],
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.down('lg')]: {
    width: `calc(${theme.spacing(0)} + 0px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(
  parseInt(localStorage.getItem("selectedItem")) || 0
);

const handleListItemClick = (index) => {
  setSelectedItem(index);
  localStorage.setItem("selectedItem", index);
};

  
  return (
    <div>
      <CssBaseline />
      <Drawer  variant="permanent" open={open}>
        <DrawerHeader  position="sticky"
          top={1}
          zIndex={1}
          opacity={1}>
          <IconButton sx={{marginLeft : " 4px","&:hover": { color: "orange" }}} onClick={()=>setOpen(!open)}>
            {theme.direction === 'rtl' ? open ? <MenuIcon /> : <CloseIcon/> : open ? <CloseIcon  /> : <MenuIcon  />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{fontWeight:"bold"}}>
            <ListItem  disablePadding sx={{ display: 'block' }} onClick = {() =>{navigate("/");handleListItemClick(0)} }>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: selectedItem === 0 ? 'orange' : 'inherit',
                  }}
                >
                   <HomeOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0,color: selectedItem === 0 ? 'orange' : 'inherit' }} />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider/>
        <Typography
              variant="h5"
              color={colors.blueAccent[400]}
              sx={{ m: "20px 0 10px 15px" }}
              fontWeight="bold"
              display={open ?' block' : 'none'}
            >
              Data
        </Typography>
        <List >
            <ListItem  disablePadding sx={{ display: 'block' }} onClick = {() =>{navigate("/table1");handleListItemClick(1)} }>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    //  "&:hover": { color: "orange" },
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: selectedItem === 1 ? 'orange' : 'inherit',
                  }}
                >
                   <TableChartIcon/>
                </ListItemIcon>
                <ListItemText primary="Table 1" sx={{ opacity: open ? 1 : 0,color: selectedItem === 1 ? 'orange' : 'inherit' }} />
              </ListItemButton>
            </ListItem>
        </List>
        <List >
            <ListItem  disablePadding sx={{ display: 'block' }} onClick = {() =>{navigate("/table2");handleListItemClick(2);} }>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: selectedItem === 2 ? 'orange' : 'inherit',
                  }}
                >
                   <TableChartIcon />
                </ListItemIcon>
                <ListItemText primary="Table 2" sx={{ opacity: open ? 1 : 0,color: selectedItem === 2 ? 'orange' : 'inherit' }} />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider/>
        <Typography
              variant="h5"
              color={colors.blueAccent[400]}
              sx={{ m: "20px 0 10px 15px" }}
              fontWeight="bold"
              display={open ?' block' : 'none'}
            >
              Charts
        </Typography> 
        <List >
            <ListItem  disablePadding sx={{ display: 'block' }} onClick = {() =>{navigate("/bar1");handleListItemClick(3)} }>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: selectedItem === 3 ? 'orange' : 'inherit',
                  }}
                >
                   <BarChartOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="BarChart 1" sx={{ opacity: open ? 1 : 0,color: selectedItem === 3 ? 'orange' : 'inherit', }} />
              </ListItemButton>
            </ListItem>
        </List>
        <List >
            <ListItem  disablePadding sx={{ display: 'block' }} onClick = {() =>{navigate("/bar2");handleListItemClick(4)}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: selectedItem === 4 ? 'orange' : 'inherit',
                  }}
                >
                   <BarChartOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="BarChart 2" sx={{ opacity: open ? 1 : 0,color: selectedItem === 4 ? 'orange' : 'inherit'}} />
              </ListItemButton>
            </ListItem>
        </List>
        <List >
            <ListItem  disablePadding sx={{ display: 'block' }} onClick = {() =>{navigate("/line1");handleListItemClick(5)} }>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: selectedItem === 5 ? 'orange' : 'inherit',
                  }}
                >
                   <TimelineOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="LineChart" sx={{ opacity: open ? 1 : 0,color: selectedItem === 5 ? 'orange' : 'inherit'}} />
              </ListItemButton>
            </ListItem>
        </List>
        <List >
            <ListItem  disablePadding sx={{ display: 'block' }} onClick = {() =>{navigate("/pie1");handleListItemClick(6)} }>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: selectedItem === 6 ? 'orange' : 'inherit',
                  }}
                >
                   <PieChartOutlineOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="PieChart" sx={{ opacity: open ? 1 : 0,color: selectedItem === 6 ? 'orange' : 'inherit'}} />
              </ListItemButton>
            </ListItem>
        </List>
        <List >
            <ListItem  disablePadding sx={{ display: 'block' }} onClick = {() =>{navigate("/geography");handleListItemClick(7)} }>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: selectedItem === 7 ? 'orange' : 'inherit',
                  }}
                >
                   <MapOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="GeographyChart" sx={{ opacity: open ? 1 : 0,color: selectedItem === 7 ? 'orange' : 'inherit' }} />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        
      </Drawer>
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
               
        
      </Box> */}
    </div>
  );
}

export  {MiniDrawer,oPen};