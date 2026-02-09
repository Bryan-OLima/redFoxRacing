import { createBrowserRouter } from "react-router-dom";
import CreateAccountPage from "./pages/createAccount/Index";
import LoginPage from "./pages/login/Index";
import SetupsPage from "./pages/setups/Index";
import { TimingsPage } from "./pages/timings/Index";
import App from "./App";
import { ProtectedRoute } from "./ProtectedRoute";


export const router = createBrowserRouter([
    {
        path:'/',
        // element:
        children: [
            {
                index: true,
                element: (
                    <ProtectedRoute>
                        <App />
                    </ProtectedRoute>
            ),
            },
        ]
    },
    {
        path:'/login',
        // element:
         children: [
            {
                element: (
                    <ProtectedRoute>
                        <LoginPage />
                    </ProtectedRoute>
                ),
            },
        ]
    },
    {
        path:'/createaccount',
        // element:
         children: [
            {
                element: (
                    <ProtectedRoute>
                        <CreateAccountPage />
                    </ProtectedRoute>
                ),
            },
        ]
    },
    {
        path:'/setups',
        // element:
         children: [
            {
                element:(
                    <ProtectedRoute>
                        <SetupsPage />
                    </ProtectedRoute>
                ),
            },
        ]
    },
    {
        path:'/timings',
        // element:
         children: [
            {
                element:(
                    <ProtectedRoute>
                        <TimingsPage />
                    </ProtectedRoute>
                ),
            },
        ]
    }

]);