import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ThemeBtn from "./ThemeBtn";
import { useContext } from "react";
import { DarkModeContext } from "../context";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: theme.spacing(0, 2),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

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

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function DrawerComponent() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  const handleDrawerOpen = () => {
    setOpen((open) => (open === false ? true : false));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer
        variant="permanent"
        open={open}
        className={`${darkMode ? "drawer-dark" : "drawer-light"}`}
      >
        <DrawerHeader>
          <IconButton
            className="menu-icon"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuIcon sx={{ color: darkMode ? "#fff" : "#968864" }} />
          </IconButton>
        </DrawerHeader>
        {open && (
          <Box sx={{ padding: "20px" }}>
            <Box>
              <button
                className={`flex items-center w-full justify-center font-semibold rounded-md px-3 py-1.5 text-xs leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
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
        >
          {sidebarIcons.map((item) => (
            <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
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
