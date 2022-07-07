import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ListAltIcon from "@mui/icons-material/ListAlt";
import QueuePlayNextIcon from "@mui/icons-material/QueuePlayNext";
import AddCardIcon from "@mui/icons-material/AddCard";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import { UserLogin } from "./UserLogin";
import { Requirements } from "./Requirements";
import { Applications } from "./Applications";
import { InterviewTask } from "./InterviewTask";
import { LeaveApplication } from "./LeaveApplication";
import { MockInterview } from "./MockInterview";
import { Certificate } from "./Certificate";
import { Class } from "./Class";
import { Dashboard } from "./Dashboard";
import { Tasks } from "./Tasks";
import { Hackathon } from "./Hackathon";
import { Capstone } from "./Capstone";
import { Queries } from "./Queries";
import { Button } from '@mui/material';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
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

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <AccountCircleIcon className="toolbarButtons" />
          
          <Button variant="text"  color="error">profile</Button>
          <Button variant="text"  color="error">logout</Button>
         
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        <Link to="/class">
            <ListItemButton>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Class" />
            </ListItemButton>
          </Link>

          <Link to="/dashboard">
            <ListItemButton>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </Link>

          <Link to="/tasks">
            <ListItemButton>
              <ListItemIcon>
                <ListAltIcon />
              </ListItemIcon>
              <ListItemText primary="Tasks" />
            </ListItemButton>
          </Link>

          <Link to="/hackathon">
          <ListItemButton>
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="Hackathon" />
          </ListItemButton>
          </Link>

          <Link to="/capstone">
          <ListItemButton>
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="Capstone" />
          </ListItemButton>
          </Link>

          <Link to="/queries">
          <ListItemButton>
            <ListItemIcon>
              <QueuePlayNextIcon />
            </ListItemIcon>
            <ListItemText primary="Queries" />
          </ListItemButton>
          </Link>

          <Link to="/requirements">
          <ListItemButton>
            <ListItemIcon>
              <AddCardIcon />
            </ListItemIcon>
            <ListItemText primary="Requirements" />
          </ListItemButton>
          </Link>

          <Link to="/application">
          <ListItemButton>
            <ListItemIcon>
              <FactCheckIcon />
            </ListItemIcon>
            <ListItemText primary="Applications" />
          </ListItemButton>
          </Link>

          <Link to="/interviewTask">
          <ListItemButton>
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="InterviewTask" />
          </ListItemButton>
          </Link>

          <Link to="/leaveApplication">
          <ListItemButton>
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="Leave-Applications" />
          </ListItemButton>
          </Link>

              <Link to="/mockInterview">
          <ListItemButton>
            <ListItemIcon>
              <FeaturedPlayListIcon />
            </ListItemIcon>
            <ListItemText primary="Mock-interview" />
          </ListItemButton>
          </Link>

              <Link to="/certificate">
          <ListItemButton>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Certificate" />
          </ListItemButton>
          </Link>
        </List>
        <Divider />
     
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <div>
          <Routes>
            <Route path="/" element={<UserLogin />} />
            <Route path="/login" element={<UserLogin />} />

            <Route path="/class" element={<Class />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/hackathon" element={<Hackathon />} />
            <Route path="/capstone" element={<Capstone />} />
            <Route path="/queries" element={<Queries />} />
            <Route path="/requirements" element={<Requirements />} />
            <Route path="/application" element={<Applications />} />
            <Route path="/interviewTask" element={<InterviewTask />} />
            <Route path="/leaveApplication" element={<LeaveApplication />} />
            <Route path="/mockInterview" element={<MockInterview />} />
            <Route path="/certificate" element={<Certificate />} />
          </Routes>
        </div>
      </Box>
    </Box>
  );
}
