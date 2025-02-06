'use client'

import './editpagepopup.css'
import Button from '../../button/button';
import { deleteMember } from '../../../lib/actions';

import { useEffect, useState, useActionState } from 'react';
import { updateMember } from '../../../lib/actions';

export default function EditPagePopUp(props) {

   const [errorMessage, formAction, isPending] = useActionState(
    deleteMember,
    undefined,
  );




      const [formData, setFormData] = useState({
        name: '',
        password: '',
        email: '',
        admin: '',
        position: '',
        image: 'https://media.licdn.com/dms/image/v2/C560BAQFGLEe_yK2JRw/company-logo_200_200/company-logo_200_200/0/1630601534327/seacology_logo?e=1746662400&v=beta&t=pG41ZFN10ckgCxb3Cu5RQiVv0Rbo9SGrcVF1rTf5PFo',
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
                formData.image
            );
            window.location.reload();
        } catch (error) {
          console.error("Error adding member:", error);
        }
      };



    async function handleSubmit() {
        try {



            update();

            // window.location.reload();
        } catch (error) {
            console.error("Error updating member:", error);
        }
    };


    return props.trigger ? (

        <form action={formAction}>
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
                                    Image:
                                    <input name="image" type="text"
                                    value={formData.image}
                                    onChange={handleInputChange}/>
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
            </form>
) : null;
}
