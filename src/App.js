import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';
import axios from 'axios';

function App() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        await axios.get(`${process.env.API_HOST}/db.json`).then(({ data }) => {
          setMovie(data.cart);
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
