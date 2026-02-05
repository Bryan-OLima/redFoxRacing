import { Alert } from "@mui/material";

interface SuccessAlertProps {
    message: string;
}

function SuccessAlert(e: SuccessAlertProps): any {
    return(
        <>
            <Alert 
                variant="filled" 
                severity="success"
            >
                {e.message}
            </Alert>
        </>
    );
}

export default SuccessAlert