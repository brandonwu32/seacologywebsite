import './gedeletepopup.css'
import Button from '../../button/button';
import { DELETE } from '../../../seed/route'

export default function GEDeletePopUp(props) {
    return props.trigger ? (
        <div className="gedpopupOverlay">
            <div className="gedpopup">
                <div className='gedrectangle'>
                    <p className='gedname'>Edit Text</p>
                    <hr className="gedyellowline" />
                    <div className = 'deletecontainer'>
                        <p className = "deletequestion"> Are you sure you want to delete this text?</p>
                            <p className = "deletingwords">{props.deletingwords}</p>
                    </div>
                </div>
                    <div className = 'gedbuttonz'>
                        <Button color="red" size="large" text="REMOVE" onClick={DELETE(props.deletingwords)}/>
                        <Button color="blue" size="large" text="Close" onClick={props.close}/>
                </div>
        </div>
        </div>
    ) : null;
    }