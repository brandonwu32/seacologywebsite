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
            <div className = "login-wrapper">
                <h1 className = "login-header-1" id = "big-title-for-login"> Welcome to Seacology!</h1>
                <p>Please login to access the portal.</p>
                <h2 className = "login-header-1">Email:</h2>
                <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                />
                <h2 className = "login-header-1">Password:</h2>
                <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    required
                    minLength={6}
                />
                <Button id = 'large' color = "blue" text = "Enter" aria-disabled={isPending}/>

                <div>
                    {errorMessage && (
                        <p className="text-sm text-red-500">{errorMessage}</p>
                    )}
                </div>
            </div>
        </form>
    )
}