'use client'

import './page.css';
import Button from '../components/button/button';
import { useActionState } from 'react';
import { authenticate } from '../actions.js';

export default function Login() {

    const [errorMessage, formAction, isPending] = useActionState(
        authenticate,
        undefined,
      );

    return (
        <form action={formAction}>
            <div className = 'login-container'>
                <div className="form-section">
                    <p className='form-title'>Email:</p>
                    <input
                        className="input-section"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        required
                    />
                </div>
                <div className="form-section">
                    <p className='form-title'>Password:</p>
                    <input
                        className="input-section"
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        required
                        minLength={6}
                    />
                </div>
                <Button id = 'large' color = "blue" text = "Sign In" aria-disabled={isPending}/>
                <div>
                    {errorMessage && (
                        <p className="text-sm text-red-500">{errorMessage}</p>
                    )}
                </div>
            </div>
        </form>
    )
}