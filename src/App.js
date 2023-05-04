import React, { useState } from 'react';
import Container from '@mui/material/Container';

import Header from './Header';
import Content from './Content';

function App() {
  const [likedSubmissions, setLikedSubmissions] = useState([]);

  return (
    <>
      <Header setLikedSubmissions={setLikedSubmissions} />
      <Container>
        <Content likedSubmissions={likedSubmissions} />
      </Container>
    </>
  );
}

export default App;
