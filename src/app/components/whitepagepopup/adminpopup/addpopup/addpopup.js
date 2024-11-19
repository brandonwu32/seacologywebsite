import './addpopup.css'
import Button from '../../../button/button';

export default function AddPopUp(props) {
    return props.trigger ? (
        <div className="appopupOverlay">
            <div className="appopup">
                <div className='aprectangle'>
                    <p className='apname'>Add Member</p>
                    <hr className="apyellowline" />
                    <div className = 'addcontainer'>
                        <div className = "apadd-fields">
                            {/* figure out how to make thse prefilled */}
                            <label>Full Name:<input id = "name" type="text" /></label>
                            <label>Position:<input id = "position" type="text" /></label>
                            <label>Email:<input id = "email" type="text" /></label>
                            <label>Region:<input id = "region" type="text" /></label>
                            <label>Image:<input id = "image-upload" type="file" /></label>
                        </div>
                    </div>
                </div>
                    <div className = 'apbuttonz'>
                        <Button color="blue" size="large" text="Submit" onClick={props.close}/>
                        <Button color="blue" size="large" text="Close" onClick={props.close}/>
                </div>
        </div>
        </div>
    ) : null;
    }