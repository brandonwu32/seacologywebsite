'use client'

import './editpagepopup.css'
import Button from '../../button/button';
import { useEffect, useState } from 'react';
import { updateMember } from '../../../lib/actions';

export default function EditPagePopUp(props) {

    console.log(props)


      const [formData, setFormData] = useState({
        name: '',
        password: '',
        email: '',
        admin: '',
        position: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const update = async () => {
        try {
            const result = await updateMember(
                props.user_id,
                formData.name,
                formData.position,
                formData.email,
                formData.region
            );
            console.log("after updateMember");
            console.log(result);
        } catch (error) {
          console.error("Error adding member:", error);
        }
      };

   

    async function handleSubmit() {
        try {
            console.log("BEFORE UPDATEMEMBER");
            console.log(props.user_id);
            console.log(formData.name);
            console.log(formData.position);
            console.log(formData.email);
            console.log(formData.region);

            updateMember();

            // console.log("Member updated successfully:", result.data);
            // window.location.reload();
        } catch (error) {
            console.error("Error updating member:", error);
        }
    };


    return props.trigger ? (
        <div>
            <input id = "name" name="user_id" type="hidden" value={props.user_id}/>
            <div className="eppopupOverlay">
                <div className="eppopup">
                    <div className='eprectangle'>
                        <p className='epname'>Edit Member Information</p>
                        <hr className="epyellowline" />
                        <div className = 'epaddcontainer'>
                            <div className = "epadd-fields">

                            <label>
                                    Full Name:
                                    <input
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <label>
                                    Position:
                                    <input
                                        name="position"
                                        type="text"
                                        value={formData.position}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <label>
                                    Email:
                                    <input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <label>
                                    Region:
                                    <input
                                        name="region"
                                        type="text"
                                        value={formData.region}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <label>
                                    Image:
                                    <input name="image" type="file" />
                                </label>
                            </div>
                        </div>
                    </div>
                        <div className = 'epbuttonz'>
                            <Button color="red" size="large" text="Remove"/>
                            <Button color="blue" size="large" text="Submit" onClick = {handleSubmit}/>
                            <Button color="blue" size="large" text="Close" onClick={props.close}/>
                    </div>
                </div>
            </div>
        </div>
) : null;
}