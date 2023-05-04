import React, { useEffect, useState } from 'react';
import Header from './Header';
import Content from './Content';
import { getLikedSubmissions } from './service/mockServer';

function App() {
  const [likedSubmissions, setLikedSubmissions] = useState([]);

  useEffect(() => {
    const fetchLikedSubmissions = async () => {
      const submissions = await getLikedSubmissions();
      setLikedSubmissions(submissions);
    };
    fetchLikedSubmissions();
  }, []);

  return (
    <div>
      <Header />
      <Content likedSubmissions={likedSubmissions} />
    </div>
  );
}

export default App;