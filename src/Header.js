import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { getFormSubmissions } from './service/mockServer';

export default function Header() {
  const [likedSubmissions, setLikedSubmissions] = useState([]);

  useEffect(() => {
    getFormSubmissions()
      .then(submissions => {
        const likedSubmissions = submissions.filter(submission => submission.liked);
        setLikedSubmissions(likedSubmissions);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{marginRight: 2}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{flexGrow: 1}}>
            Toast Exercise
          </Typography>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            onClick={() => getFormSubmissions().then(submissions => {
              const likedSubmissions = submissions.filter(submission => submission.liked);
              setLikedSubmissions(likedSubmissions);
            }).catch(error => console.error(error))}
          >
            New Submission
          </Button>
          <Typography variant="body1" sx={{marginLeft: 2}}>
            Liked: {likedSubmissions.length}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}