import React, { useEffect, useState } from 'react';
import axios from 'axios'

const App: React.FC = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api')
    .then((response) => {
      setMessage(response.data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default App;
