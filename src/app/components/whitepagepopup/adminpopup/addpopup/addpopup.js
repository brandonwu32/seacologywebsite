import './addpopup.css'
import Button from '../../../button/button';

export default function AddPopUp(props) {
    return props.trigger ? (
        <div className="popupOverlay">
            <div className="popup">
                <div className='rectangle'>
                    <p className='name'>Add Member</p>
                    <hr className="yellowline" />
                    <div className = 'addcontainer'>
                        <div className = "add-fields">
                            <label>Full Name:<input id = "name" type="text" /></label>
                            <label>Position:<input id = "position" type="text" /></label>
                            <label>Email:<input id = "email" type="text" /></label>
                            <label>Region:<input id = "region" type="text" /></label>
                            <label>Image:<input id = "image-upload" type="file" /></label>
                        </div>
                        {/* i'd recommend using some variables to try and keep track of the values in each input field (text). 
                        if someone clicks on the add button, for now just have its onClick console.log the values in each box! */}
                    </div>
                </div>
                <div className = 'btttz'>
                    <Button color="yellow" size="large" text="Add Member" onClick={props.close}/>
                    <Button color="blue" size="large" text="Close" onClick={props.close}/>
                </div>
            </div>
        </div>
    ) : null;
}