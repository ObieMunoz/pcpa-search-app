import { useState } from 'react';

function SearchForm({ handleSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    function handleChange(e) {
        setSearchTerm(e.target.value);
    }

    return (
        <div>
            <form>
                <div className="ui input">
                    <input type="text" name="street-name" placeholder="Street Name" onChange={e => handleChange(e)} value={searchTerm} />
                </div>
                <button className="ui button" type="submit" onClick={e => handleSearch(e, searchTerm)}>Search</button>
            </form>
        </div>
    )
}

export default SearchForm
