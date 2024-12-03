import './geaddpopup.css'
import Button from '../../button/button';


export default function GEAddPopUp(props) {
    return props.trigger ? (
        <div className="gepopupOverlay">
            <div className="gepopup">
                <div className='gerectangle'>
                    <p className='gename'>Add Text</p>
                    <hr className="geyellowline" />
                    <div className = 'addcontainer'>
                        <div className = "geadd-fields">
                            {/* make a drop down for options and inputting text */}
                            <label>Add Text:<input id = "name" type="text" /></label>
                        </div>
                    </div>
                </div>
                    <div className = 'gebuttonz'>
                        <Button color="blue" size="large" text="Submit" onClick={props.close}/>
                        <Button color="blue" size="large" text="Close" onClick={props.close}/>
                </div>
        </div>
        </div>
    ) : null;
    }