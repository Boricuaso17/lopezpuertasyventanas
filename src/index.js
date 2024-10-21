import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import { Home } from '../src/components/Home/Home'

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

// Use createRoot instead of render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
