import './addpopup.css'
import Button from '@/app/components/button/button';

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
                    </div>
                </div>
                <div className = 'bttz'>
                    <Button color="yellow" size="large" text="Add Member" onClick={props.close}/>
                    <Button color="blue" size="large" text="Close" onClick={props.close}/>
                </div>
            </div>
        </div>
    ) : null;
}