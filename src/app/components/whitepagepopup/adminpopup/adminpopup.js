import './adminpopup.css'
import Table from '../../table/table';


export default function AdminPopUp(props) {
    return props.trigger ? (
        <div className="popupOverlay">
            <div className="popup">
                <div className='rectangle'>
                    <p className='name'>Edit Member Information</p>
                    <hr className="blueline" />
                    <hr className="yellowline" />
                    <Table project="Project A" status="In Progress" update="2024-11-03" />
                </div>
            </div>
        </div>
    ) : null;
}