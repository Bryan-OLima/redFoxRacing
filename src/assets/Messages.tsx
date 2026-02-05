import type { FirebaseError } from "firebase/app";
import msg from './defaultMessages.json';

 const getErrorMessage = (e: FirebaseError): string => {
    const errorCode =  e.code;
    
    switch(errorCode) {
        case 'auth/invalid-email':
            return msg.createAccount.error.invalidEmail;
        case 'auth/weak-password':
            return msg.createAccount.error.weakPassword;
        case 'auth/email-already-in-use':
            return msg.createAccount.error.emailAlreadyInUse;
        default:
            return msg.createAccount.error.unknownError;
    }
}

export function ErrorMessage(e: FirebaseError): string {
   return getErrorMessage(e);
}

export function SuccessMessage(): string {
    return msg.createAccount.success.accountCreated;
}