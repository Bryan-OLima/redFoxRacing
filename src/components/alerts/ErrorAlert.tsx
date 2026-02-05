import { Alert } from "@mui/material";

interface ErrorAlertProps {
    message: string;
}

function ErrorAlert(e: ErrorAlertProps): any {
    return(
        <>
            <Alert 
                variant="filled" 
                severity="error"
            >
                {e.message}
            </Alert>
        </>
    );
}

export default ErrorAlert