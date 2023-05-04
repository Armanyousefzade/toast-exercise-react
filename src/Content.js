import React from 'react';
import { Typography } from '@material-ui/core';

function Content(props) {
  return (
    <div>
      {props.likedSubmissions.map((submission) => (
        <Typography key={submission.timestamp}>{submission.text}</Typography>
      ))}
    </div>
  );
}

export default Content;