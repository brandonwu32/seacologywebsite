import './addpopup.css'

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
                <div className = 'buttonz'>
                    <button class="blue" id="small" onClick={props.close}>Add Member</button>
                </div>
            </div>
        </div>
    ) : null;
}