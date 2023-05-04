import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Content({likedSubmissions}) {
  return (
    <Box sx={{marginTop: 3}}>
      <Typography variant="h4">Liked Form Submissions</Typography>
      {likedSubmissions.length > 0 ? (
        likedSubmissions.map((submission) => (
          <Box
            key={submission.id}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#f0f0f0',
              borderRadius: 5,
              padding: 2,
              marginTop: 1,
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="body1">{`${submission.firstName} ${submission.lastName} - ${submission.email}`}</Typography>
            </Box>
          </Box>
        ))
      ) : (
        <Typography variant="body1" sx={{ fontStyle: 'italic', marginTop: 1 }}>
          No liked submissions
        </Typography>
      )}
    </Box>
  );
}
