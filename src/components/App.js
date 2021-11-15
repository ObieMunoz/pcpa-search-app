import { useState } from 'react';
import TableContainer from './TableContainer';
import FetchData from './FetchData';
import SearchForm from './SearchForm';
import Header from './Header';
import StreetList from './StreetList';

function App() {
  const [data, setData] = useState([])
  const [streets, setStreets] = useState([])

  function handleSearch(e) {
    e.preventDefault();
    if (streets.length === 0) return;
    streets.map(street => {
      FetchData(street, setData)
      return setStreets(streets => streets.filter(street => street !== street))
    })
  }

  function handleReset() {
    console.log("reset")
    setStreets(streets => [])
    setData(data => [])
  }

  return (
    <div className="App">
      <Header />
      <SearchForm handleSearch={handleSearch} setStreets={setStreets} handleReset={handleReset} />
      <StreetList streets={streets} />
      {data.length > 0 ? <TableContainer setData={setData} data={data} /> : null}
    </div>
  );
}

export default App;