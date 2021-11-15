import { useState } from 'react';

function SearchForm({ handleSearch, setStreets, handleReset }) {
    const [searchTerm, setSearchTerm] = useState('');

    function handleChange(e) {
        setSearchTerm(e.target.value);
    }

    function addToSearch(e) {
        setStreets(streets => [...streets, searchTerm]);
    }

    return (
        <div>
            <form>
                <div className="ui input">
                    <input type="text" name="street-name" placeholder="Street Name" onChange={e => handleChange(e)} value={searchTerm} />
                </div>
                <button className="ui primary button" type="button" onClick={e => addToSearch(e)}>Add to Street List</button>
                <button className="ui primary button" type="submit" onClick={e => handleSearch(e)}>Search</button>
                <button className="ui primary button" type="button" onClick={() => handleReset()}>Reset</button>
            </form>
        </div>
    )
}

export default SearchForm
