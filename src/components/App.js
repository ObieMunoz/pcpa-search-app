import { useState, useEffect } from 'react';
import TableContainer from './TableContainer';
import FetchData from './FetchData';
import SearchForm from './SearchForm';
import Header from './Header';

function App() {
  const [data, setData] = useState([])

  function handleSearch(e, searchTerm) {
    e.preventDefault();
    FetchData(searchTerm, setData)
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


// https://search.pascopa.com/default.aspx?mprs=2&src=Q&pid=add&key=LOD&add2=black+pepper&add=Submit&sf=3&so=1&recs=1000&ul=en-us&de=UTF-8&dt=Property Appraiser - Records Search Page&sd=24-bit&sr=1920x1080&vp=1139x943&je=0&_u=AACAAEABAAAAAC~&jid=&gjid=&cid=1720006859.1636864783&tid=UA-93384231-2&_gid=995784914.1636864783&_slc=1&z=1912693827
