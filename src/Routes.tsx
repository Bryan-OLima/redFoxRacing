import { createBrowserRouter } from "react-router-dom";
import CreateAccountPage from "./pages/createAccount/Index";
import LoginPage from "./pages/login/Index";
import SetupsPage from "./pages/setups/Index";
import { TimingsPage } from "./pages/timings/Index";
import App from "./App";
import { ProtectedRoute } from "./ProtectedRoute";
import SettingsPage from "./pages/settings/SettingsPage";


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
                index: true,
                element:  <LoginPage />
            },
        ]
    },
    {
        path:'/createaccount',
        // element:
         children: [
            {
                index: true,
                element:    <CreateAccountPage />
            },
        ]
    },
    {
        path:'/setups',
        // element:
         children: [
            {
                index: true,
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
                index: true,
                element:(
                    <ProtectedRoute>
                        <TimingsPage />
                    </ProtectedRoute>
                ),
            },
        ]
    },
    {
        path:'/settings',
        // element:
         children: [
            {
                index: true,
                element:(
                    <ProtectedRoute>
                        <SettingsPage />
                    </ProtectedRoute>
                ),
            },
        ]
    }

]);