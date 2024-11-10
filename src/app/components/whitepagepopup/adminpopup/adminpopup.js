import './adminpopup.css'
import Table from '../../table/table'
import WhitePageBubble from '../../whitepagebubble/whitepagebubble';


export default function AdminPopUp(props) {
    return props.trigger ? (
    <div className="popupOverlay">
        <div className="popup">
            <div className='rectangle'>
                <p className='name'>Edit Member Information</p>
                <hr className="yellowline" />
                <div className = 'addcontainer'>
                    <div className = "add-fields">
                        {/* figure out how to make thse prefilled */}
                        <label>Full Name:<input id = "name" type="text" /></label>
                        <label>Position:<input id = "position" type="text" /></label>
                        <label>Email:<input id = "email" type="text" /></label>
                        <label>Region:<input id = "region" type="text" /></label>
                        <label>Image:<input id = "image-upload" type="file" /></label>
                    </div>
                </div>
            </div>
                <div className = 'buttonz'>
                <button class="red" id="large" onClick={props.close}>Remove Member</button>
                <button class="blue" id="large" onClick={props.close}>Submit Changes</button>
                <button class="blue" id="large" onClick={props.close}>Close</button>
            </div>
    </div>
    </div>
) : null;
}