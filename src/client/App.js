import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './app.scss';
import ReactImage from './react.png';

function App() {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const { data: user } = await axios.get('/api/getUsername');
        setUserName(user.userName);
      } catch (err) {
        console.log('Something went wrong', err);
      }
    };
    fetchUserName();
  }, []);

  return (
    <div>
      <h1>{userName ? `Hello ${userName}` : 'Loading..'}</h1>
      <img src={ReactImage} alt="react" />
    </div>
  );
}

export default App;
