import { createBrowserRouter } from "react-router-dom";
import CreateAccountPage from "./pages/createAccount/Index";
import LoginPage from "./pages/login/Index";
import SetupsPage from "./pages/setups/Index";
import { TimingsPage } from "./pages/timings/Index";
import App from "./App";


export const router = createBrowserRouter([
    {
        path:'/',
        // element:
        children: [
            {
                index: true,
                element: <App />
            },
        ]
    },
    {
        path:'/login',
        // element:
         children: [
            {
                index: true,
                element: <LoginPage />
            },
        ]
    },
    {
        path:'/createaccount',
        // element:
         children: [
            {
                index: true,
                element: <CreateAccountPage />
            },
        ]
    },
    {
        path:'/setups',
        // element:
         children: [
            {
                index: true,
                element: <SetupsPage />
            },
        ]
    },
    {
        path:'/timings',
        // element:
         children: [
            {
                index: true,
                element: <TimingsPage />
            },
        ]
    }

]);