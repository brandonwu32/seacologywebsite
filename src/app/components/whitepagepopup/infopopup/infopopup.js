import './infopopup.css'
import Image from "next/image";
import Table from '../../table/table';
import Button from '../../button/button'


export default function WhitePagePopUp(props) {
    return props.trigger ? (
        <div className="popupOverlay">
            <div className="popup">
                <div className='rectangle'>
                    <p className='name'>Name</p>
                    <hr className="yellowline" />
                    <Table project="Project A" status="In Progress" update="2024-11-03" />
                </div>
                <div className = 'buttonz'>
                <button class="blue" id="small" onClick={props.close}>Close</button>
                </div>
            </div>
        </div>
    ) : null;
}