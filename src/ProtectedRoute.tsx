import { Navigate } from "react-router-dom";
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../firebaseConfig.ts';
import type { JSX } from "react";

export const ProtectedRoute = ({ children }: {children: JSX.Element}) => {
    const [user, loading] = useAuthState(auth);

    if(loading) return <div>Loading protected page...</div>

    if(!user) {
        return <Navigate to="/login" replace />
    }

    return children;
}