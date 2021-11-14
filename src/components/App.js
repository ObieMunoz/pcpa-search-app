import { useState } from 'react';
import TableContainer from './TableContainer';
import FetchData from './FetchData';
import SearchForm from './SearchForm';
import Header from './Header';

function App() {
  const [data, setData] = useState([])

  function handleSearch(e, searchTerm) {
    e.preventDefault();
    FetchData(searchTerm, data, setData)
  }

  return (
    <div className="App">
      <Header />
      <SearchForm handleSearch={handleSearch} />
      <TableContainer setData={setData} data={data} />
    </div>
  );
}

export default App;