import React from 'react';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createMockFormSubmission } from './service/mockServer';

import Toast from './Toast';

export default function Header({ setLikedSubmissions }) {
  const [showToast, setShowToast] = React.useState(false);
  const [submission, setSubmission] = React.useState({});

  const handleCreateMockFormSubmission = () => {
    const newSubmission = createMockFormSubmission();
    setShowToast(true);
    setSubmission(newSubmission);
  };

  const handleLikeSubmission = () => {
    setLikedSubmissions((prevSubmissions) => [...prevSubmissions, submission]);
    setShowToast(false);
  };

  const handleDismissSubmission = () => {
    setShowToast(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Toast Exercise
          </Typography>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            onClick={handleCreateMockFormSubmission}
          >
            New Submission
          </Button>
        </Toolbar>
      </AppBar>
      <Toast
        open={showToast}
        onClose={handleDismissSubmission}
        message={`${submission.firstName} ${submission.lastName} (${submission.email})`}
        action={
          <Button color="secondary" size="small" onClick={handleLikeSubmission}>
            Like
          </Button>
        }
      />
    </Box>
  );
}
