import './infopopup.css'
import Image from "next/image";
import Table from '../../table/table';
import Button from '../../button/button'
import WhitePageBubble from '../../whitepagebubbles/popupbubble'


export default function WhitePagePopUp(props) {
    return props.trigger ? (
        <div className="popupOverlay">
            <div className="popup">
                <div className='rectangle'>
                    <p className='name'>{props.name}</p>
                    <hr className="yellowline" />
                    <div class="bubs">
                    <WhitePageBubble 
                    src="https://www.seacology.org/wp-content/uploads/2020/01/duane_snorkel_tonga-scaled-e1579722582118-478x549.jpg"
                    alt="CeoPic"
                    className = 'picturr'>
                    </WhitePageBubble>
                    </div>
                    <Table project="Project A" status="In Progress" update="2024-11-03" />
                </div>
                <div className = 'buttonz'>
                <Button className="blue" id="small" onClick={props.close}>Close</Button>
                </div>
            </div>
        </div>
    ) : null;
}