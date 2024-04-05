import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useContext } from 'react';
import { DarkModeContext } from '../context';
import { useState } from 'react';



export default function OptionMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'left',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 8,
      marginLeft: theme.spacing(3),
      minWidth: 160,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow: darkMode ? "0px 4px 24px 0px rgba(63, 156, 255, 0.50)" :
        '0px 4px 20px 0px rgba(0, 0, 0, 0.25)',
        backgroundColor: darkMode ? "#091B25" : "#FFF",
      '& .MuiMenu-list': {
        padding: '15px 15px',
       
        
      },
      '& .MuiMenuItem-root': {
          borderRadius:"10px",
          fontSize:"16px",
          color: darkMode ? "#fff" : "#918461",
          
          '&:hover':{
              backgroundColor: darkMode ? "#3F9CFF" : "#918461",
              color:"#fff"
          },
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          marginRight: theme.spacing(1.5),
          '&:hover':{
            color:"#fff"
        },
        },
       
        '&:active': {
          backgroundColor: "green"
        },
      },
    },
  }));

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <MoreVertIcon
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        className={`cursor-pointer ${darkMode ? "text-[#3F9CFF]" : "text-[#968864]"}`}
      />
       
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <EditIcon className={`${darkMode ? "text-[#fff]" : "text-[#968864]"}`} />
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <ContentCopyRoundedIcon  className={`${darkMode ? "text-[#fff]" : "text-[#968864]"}`}/>
          Copy
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <FileDownloadOutlinedIcon className={`${darkMode ? "text-[#fff]" : "text-[#968864]"}`} />
          Download
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <DeleteOutlineOutlinedIcon className={`${darkMode ? "text-[#fff]" : "text-[#968864]"}`} />
          Delete
        </MenuItem>
      </StyledMenu>
    </div>
  );
}