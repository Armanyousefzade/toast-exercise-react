import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Content({ likedSubmissions }) {
  return (
    <Box sx={{ marginTop: 3 }}>
      <Typography variant="h4">Liked Form Submissions</Typography>

      {likedSubmissions.map((submission) => (
        <Typography key={submission.timestamp} variant="body1" sx={{ fontStyle: 'italic', marginTop: 1 }}>
          {submission.text}
        </Typography>
      ))}
    </Box>
  );
}