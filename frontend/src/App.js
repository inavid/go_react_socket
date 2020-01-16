import React, { useState } from 'react';
import { subscribeToTimer } from './api';

function App() {
  const [message, setMessage] = useState('');

  subscribeToTimer((newMessage) => setMessage(newMessage));

  return (
    <div className="App">
      <p className="App-intro">
        This is the timer value: {message}
      </p>
    </div>
  );

}

export default App;
