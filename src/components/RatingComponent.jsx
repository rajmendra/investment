import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { useContext } from 'react';
import { DarkModeContext } from '../context';
import { styled } from '@mui/material/styles';

const labels = {
  1: '(1)',
  2: '(2)',
  3: '(3)',
  4: '(4)',
  5: '(5)',
};

// Create a custom styled component for Rating
const StyledRating = styled(Rating)(({ theme, darkMode }) => ({
    '& .MuiRating-iconFilled':{
        color:darkMode ? "#3F9CFF" : "#968864"
    },
  '& .MuiRating-iconEmpty': {
    opacity: 0.55,
    color: darkMode ? "#3F9CFF" : "#968864",
  },
}));

export default function RatingComponent({value}) {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Use the custom styled component */}
      <StyledRating
        name="text-feedback"
        value={value}
        readOnly
        precision={1}
        darkMode={darkMode} // Pass darkMode as a prop
        emptyIcon={<StarIcon fontSize="inherit" />}
      />
      <Box sx={{ ml: 2, color: darkMode ? "#3F9CFF" : "#968864" }}>{labels[value]}</Box>
    </Box>
  );
}
