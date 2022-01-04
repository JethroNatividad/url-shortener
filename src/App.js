import React from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
function App() {
  return (
    <div className="App h-screen bg-gray-100">
      <Header />
      <Content />
    </div>
  );
}

export default App;
