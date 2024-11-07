import './adminpopup.css'
import Table from '../../table/table'
import WhitePageBubble from '../../whitepagebubble/whitepagebubble';


export default function AdminPopUp(props) {
    return props.trigger ? (
        <div className="popupOverlay">
            <div className="popup">
                <div className='rectangle'>
                    <p className='name'>Editing Member Information</p>
                    <hr className="yellowline" />
                    <div class="bubble popup-bubble">
                    <WhitePageBubble 
                    src="https://www.seacology.org/wp-content/uploads/2020/01/duane_snorkel_tonga-scaled-e1579722582118-478x549.jpg"
                    alt="CeoPic"
                    className = 'picturr'>
                    </WhitePageBubble>
                    </div>
                    <Table project="Project A" status="In Progress" update="2024-11-03" />
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