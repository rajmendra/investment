import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
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
import Header from './Header';
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CloseIcon from '@mui/icons-material/Close';
import ThemeBtn from './ThemeBtn';
import { useContext } from 'react';
import { DarkModeContext } from '../context';

const drawerWidth = 240;
const sidebarIcons = [
    {
      id: 1,
      text: "Theme",
      icon: <ThemeBtn />,
    },
    {
      id: 2,
      text: "Settings",
      icon: <SettingsOutlinedIcon sx={{ width: "1.2em", height: "1.2em" }} />,
    },
    {
      id: 3,
      text: "Help",
      icon: <HelpOutlineIcon sx={{ width: "1.2em", height: "1.2em" }} />,
    },
  ];
  
  const topicList = [
    {
      id: 1,
      topicDate: "3 March 2024",
      topicListItem: [
        {
          id: 1,
          text: "What is ESG",
        },
        {
          id: 2,
          text: "How ESG Works",
        },
        {
          id: 3,
          text: "How ESG impact us",
        },
        {
          id: 4,
          text: "Wealth Management",
        },
        {
          id: 5,
          text: "Articles about wealth",
        },
        {
          id: 6,
          text: "Start my Wealth Management",
        },
      ],
    },
    {
      id: 2,
      topicDate: "2 March 2024",
      topicListItem: [
        {
          id: 1,
          text: "What is ESG",
        },
        {
          id: 2,
          text: "How ESG Works",
        },
        {
          id: 3,
          text: "How ESG impact us",
        },
        {
          id: 4,
          text: "Wealth Management",
        },
        {
          id: 5,
          text: "Articles about wealth",
        },
        {
          id: 6,
          text: "Start my Wealth Management",
        },
        {
          id: 7,
          text: "Tools that helps in wealth ..",
        },
        {
          id: 8,
          text: "How I can use YNAB",
        },
        {
          id: 9,
          text: "Suggest me planning options",
        },
        {
          id: 10,
          text: "How can I Contribute in ESG",
        },
        {
          id: 11,
          text: "How my contribution impact ...",
        },
      ],
    },
  ];




const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function MobileDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    background:darkMode ? "#091B25" : "#fff",

      boxShadow:"none",
      color:"black",
      display:"none",
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.between('sm', 'md')]: {
      display:"none"
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      display:"flex"
    },
    ...(open && {
        
      width: `calc(100% - ${drawerWidth}px)`,
     
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        
      }),
    }),
  }));
 

  return (
    
    <Box sx={{ display: 'flex' }} className="mobile-drawer">
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon className={`${darkMode ? "text-[#3F9CFF]" : "text-[#968864]"}`} />
          </IconButton>
          <Header />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background:darkMode ? "#091B25" : "#F6F4F1",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon className={`${darkMode ? "text-[#3F9CFF]" : "text-[#968864]"}`} />
          </IconButton>
        </DrawerHeader>
        {open && (
          <Box sx={{ padding: "20px" }}>
            <Box>
              <button
                className={`flex items-center w-[70%] justify-center font-semibold rounded-md px-3 py-1.5 text-xs leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                  darkMode
                    ? "bg-transparent text-[#3F9CFF] border  border-[#3F9CFF] "
                    : "bg-transparent text-[#968864] border border-[#968864]"
                }`}
              >
                {" "}
                <AddOutlinedIcon />
                Add Activity
              </button>
            </Box>
            {topicList.map((topic) => (
              <Box key={topic.id} sx={{ padding: "20px 10px 0px 10px" }}>
                <h3
                  className={`pb-4 font-bold ${
                    darkMode ? "text-[#3F9CFF]" : "text-[#968864]"
                  }`}
                >
                  {topic.topicDate}
                </h3>
                {topic.topicListItem.map((item) => (
                  <ul key={item.id}>
                    <li
                      className={`pb-4 ${
                        darkMode ? "text-[#fff]" : "text-[#5D5D5D]"
                      }`}
                    >
                      {item.text}
                    </li>
                  </ul>
                ))}
              </Box>
            ))}
          </Box>
        )}

        {open && (
          <Divider sx={{ borderColor: darkMode ? "#fff" : "#968864" }} />
        )}
        <List
          sx={{
            position: !open ? "absolute" : "relative",
            bottom: !open ? "20px" : "",
          }}
          className={`${!open ? "hidden md:inline" : "inline md:inline"}`}
        >
          {sidebarIcons.map((item) => (
            <ListItem key={item.id} disablePadding sx={{ display: "block" }} onClick={() => open && item.text==="Theme" ? setDarkMode(darkMode => darkMode===true ? false : true) : ""}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: darkMode ? "#fff" : "#968864",
                    width: "25px",
                    height: "25px",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    opacity: open ? 1 : 0,
                    color: darkMode ? "#fff" : "#424241",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      
    </Box>
  );
}