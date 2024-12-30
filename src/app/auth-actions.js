'use server';

import { signIn } from './auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';
import { getUser } from './auth';

export async function authenticate(
    prevState,
    formData
) {
  try {
    const parsedFormData = Object.fromEntries(formData.entries());
    const result = await signIn('credentials', { ...parsedFormData, redirect: false });
    if (!result.error) {
      const user = await getUser(formData.get('email'))
      return redirect('/welcome?session=' + user.id);
    } else {
      // Handle errors or return a message
      return 'Invalid credentials.';
    }


  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}