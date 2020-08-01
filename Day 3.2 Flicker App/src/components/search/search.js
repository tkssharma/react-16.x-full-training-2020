import React from 'react';
import './search.scss';

export default function Search({ searchValue, searchTermChanged, search, engine, engineChanged}) {
    return (
        <div className="search">
            <label htmlFor="search-input">Search images:</label>
            <input
                id="search-input"
                type="text"
                placeholder="Enter search term (e.g. 'cats')"
                value={searchValue}
                onChange={searchTermChanged}
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                        search()
                    }
                }}
            />
            <select
                value={engine}
                onChange={engineChanged} >
                <option value="flicker">Flicker</option>
                <option value="giphy">Gighy</option>
            </select>
            <input onClick={search} type="submit" value="Search" />
        </div>
    )
}
