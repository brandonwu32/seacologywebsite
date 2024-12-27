'use client'

import './editpagepopup.css'
import Button from '../../button/button';
import { deleteMember } from '../../../lib/actions';
import { useEffect, useState, useActionState } from 'react';

export default function EditPagePopUp(props) {

    console.log(props)

    const [errorMessage, formAction, isPending] = useActionState(
        deleteMember,
        undefined,
      );


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
                                {/* figure out how to make thse prefilled */}

                                <label>Full Name:<input name = "name" type="text"/></label>
                                <label>Position:<input name = "position" type="text"/></label>
                                <label>Email:<input name = "email" type="text"/></label>
                                <label>Region:<input name = "region" type="text"/></label>
                                <label>Image:<input name = "image-upload" type="file"/></label>
                            </div>
                        </div>
                    </div>
                        <div className = 'epbuttonz'>
                            <Button color="red" size="large" text="Remove"/>
                            <Button color="blue" size="large" text="Submit" onClick={props.close}/>
                            <Button color="blue" size="large" text="Close" onClick={props.close}/>
                    </div>
                </div>
            </div>
        </form>
) : null;
}