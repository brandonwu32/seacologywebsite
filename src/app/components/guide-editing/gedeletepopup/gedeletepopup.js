import './addpopup.css'
import Button from '../../../button/button';

export default function GEDeletePopUp(props) {
    return props.trigger ? (
        <div className="gedpopupOverlay">
            <div className="gedpopup">
                <div className='gedrectangle'>
                    <p className='gedname'>Add Member</p>
                    <hr className="gedyellowline" />
                    <div className = 'deletecontainer'>
                        
                    </div>
                </div>
                    <div className = 'gedbuttonz'>
                        <Button color="blue" size="large" text="Submit" onClick={props.close}/>
                        <Button color="blue" size="large" text="Close" onClick={props.close}/>
                </div>
        </div>
        </div>
    ) : null;
    }