import './navbarpopup.css';
import Button from '../button/button';
import { fetchGuidelineSearch } from '../../lib/data';
import { useState, useEffect } from 'react';

export default function NavBarPopUp(props) {

    const [searchQuery, setSearchQuery] = useState(props.trigger);

    async function handleSearchSubmit() {
        console.log("Searched for:", searchQuery);
        let data = await fetchGuidelineSearch(searchQuery);

        data.map(row => {
            console.log(row.content)
        })

        // setSearchQuery("");  // Clear the input after submission
        // Implement functionality here, e.g., filtering items, redirecting, etc.
    };

    useEffect(() => {
        handleSearchSubmit();
    }, [searchQuery])



    return props.trigger ? (
        <div className="ippopupOverlay">
            <div className="ippopup">
                <div className='iprectangle'>
                    <p className='ipname'>{props.name}</p>
                    <hr className="ipyellowline" />
                    {/* Pass the projects array to the Table component */}
                </div>
                <div className="ipbuttonz">
                    <Button color="blue" size="small" text="Close" onClick={props.close}/>
                </div>
            </div>
        </div>
    ) : null;
}
