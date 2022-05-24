import FormHelperText from "@mui/material/FormHelperText";
import { red } from "@mui/material/colors";

const GetErrorMessage = (type) => {
    switch (type) {
        case 'minLength':
            return 'Password must be at least 6 characters'
        
        default:
            return 'Please fill out this field.'
    }
}

const FormError = ({error}) => {
    if(!error) {
        return <></>
    }

    const {type} = error;
    const message = GetErrorMessage(type);

    return (
        <FormHelperText sx={{ color: red[500], m: 0 }}>
            {message}
        </FormHelperText>
    )
}

export default FormError;