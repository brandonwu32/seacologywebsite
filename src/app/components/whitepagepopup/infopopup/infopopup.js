import './infopopup.css'
import Image from "next/image";
import Table from '../../table/table';


export default function WhitePagePopUp(props) {
    return props.trigger ? (
        <div className="popup">
            <div className='rectangle'>
                <p className = 'name'>Name</p>
                <hr className="yellowline" />
                <Table project="Project A" status="In Progress" update="2024-11-03" />
            </div>
        </div>
    ) : "";
}

