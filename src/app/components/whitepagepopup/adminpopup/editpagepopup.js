import './editpagepopup.css'
import Button from '../../button/button';

export default function EditPagePopUp(props) {
    return props.trigger ? (
    <div className="popupOverlay">
        <div className="popup">
            <div className='eprectangle'>
                <p className='name'>Edit Member Information</p>
                <hr className="yellowline" />
                <div className = 'addcontainer'>
                    <div className = "add-fields">
                        {/* figure out how to make thse prefilled */}
                        <label>Full Name:<input id = "name" type="text" /></label>
                        <label>Position:<input id = "position" type="text" /></label>
                        <label>Email:<input id = "email" type="text" /></label>
                        <label>Region:<input id = "region" type="text" /></label>
                        <label>Image:<input id = "image-upload" type="file" /></label>
                    </div>
                </div>
            </div>
                <div className = 'epbuttonz'>
                    <Button color="red" size="large" text="Remove" onClick={props.close}/>
                    <Button color="blue" size="large" text="Submit" onClick={props.close}/>
                    <Button color="blue" size="large" text="Close" onClick={props.close}/>
            </div>
    </div>
    </div>
) : null;
}