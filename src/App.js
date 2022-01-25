import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';
import axios from 'axios';

function App() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        await axios.get(`http://localhost:3001/cart`).then(({ data }) => {
          setMovie(data);
        });
      } catch (e) {
        console.error('Error', e);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <Movie items={movie} />
    </div>
  );
}

export default App;
