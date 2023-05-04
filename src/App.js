import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';

import Header from './Header';
import Content from './Content';
import { getLikedSubmissions } from './service/mockServer';

function App() {
  const [likedSubmissions, setLikedSubmissions] = useState([]);

  useEffect(() => {
    async function fetchLikedSubmissions() {
      const submissions = await getLikedSubmissions();
      setLikedSubmissions(submissions);
    }
    fetchLikedSubmissions();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Content likedSubmissions={likedSubmissions} />
      </Container>
    </>
  );
}

export default App;