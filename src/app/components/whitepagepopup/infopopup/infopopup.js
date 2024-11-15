import './infopopup.css';
import Table from '../../table/table';
import Button from '../../button/button';
import WhitePageBubble from '../../whitepagebubbles/popupbubble';

export default function WhitePagePopUp(props) {
    return props.trigger ? (
        <div className="popupOverlay">
            <div className="popup">
                <div className='rectangle'>
                    <p className='name'>{props.name}</p>
                    <hr className="yellowline" />
                    <div className="bubs">
                        <WhitePageBubble 
                            src="https://www.seacology.org/wp-content/uploads/2020/01/duane_snorkel_tonga-scaled-e1579722582118-478x549.jpg"
                            alt="CeoPic"
                            className="picturr"
                        />
                    </div>
                    {/* Pass the projects array to the Table component */}
                    <Table projects={props.projects} />
                </div>
                <div className="buttonz">
                    <Button color="blue" size="small" text="Close" onClick={props.close}/>
                </div>
            </div>
        </div>
    ) : null;
}
