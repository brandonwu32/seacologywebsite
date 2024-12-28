import './navbarpopup.css';
import Button from '../button/button';
import { fetchGuidelineSearch } from '../../lib/data';
import { useState, useEffect } from 'react';
import SearchItem from './searchitem/searchitem'

export default function NavBarPopUp(props) {

    const [searchQuery, setSearchQuery] = useState("");
    const [results, setResults] = useState([])

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSearchSubmit();
        }
    };

    async function handleSearchSubmit() {
        console.log("Searched for:", searchQuery);
        let data = await fetchGuidelineSearch(searchQuery);
        console.log(data)
        setResults(data);

        // Implement functionality here, e.g., filtering items, redirecting, etc.
    };


    return props.trigger ? (
        <div className="ippopupOverlay">
            <div className="ippopup">
                <div className='iprectangle'>
                    <h1 className='search-popup-title'>Search for a keyword in Guidelines</h1>
                    <hr className="ipyellowline" />
                    {/* Pass the projects array to the Table component */}
                    <div className="search-container">
                            <span className="search-icon">🔍</span>
                            <input
                                type="text"
                                placeholder="Search..."
                                id="search-bar"
                                value={searchQuery}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown} // Capture Enter key
                            />
                    </div>
                    <div className = "results-container">
                        {results.map(item =>
                            <SearchItem key = {item.id} item = {item}/>
                        )}
                    </div>
                </div>

                <div className="ipbuttonz">
                    <Button color="blue" size="small" text="Close" onClick={props.close}/>
                </div>
            </div>
        </div>
    ) : null;
}
