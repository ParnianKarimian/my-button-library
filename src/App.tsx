import React from 'react';
import Button from './components/Button';

function App() {
  return (
    <div>
      <h2>Main</h2>
      <Button label='click' onClick={() => alert('clicked from inside')} />
    </div>
  );
};

export default App;
