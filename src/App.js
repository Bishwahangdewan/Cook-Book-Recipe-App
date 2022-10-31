import React from 'react';
import SearchInput from './components/SearchInput';

function App() {
  return (
    <div className="App text-center">
      <h1 className="text-center">Cook Book</h1>
      <button className="btn">Add a new Recipe</button>

      <SearchInput />
    </div>
  );
}

export default App;
