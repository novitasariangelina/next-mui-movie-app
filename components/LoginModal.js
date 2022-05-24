import * as React from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import FormhHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import FormError from './Forms/Errors';
import { SignIn, GetSignInErrorMessage } from '../services/firebase'



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'common.white',
    boxShadow: 24,
    p: 4
}

const LoginModal = ({ open, CloseModal }) => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (values) => {
        const {email, password} = values;
        try {
            await SignIn(email, password);
        } catch (error) {
            const message = GetSignInErrorMessage(error.code);
            console.log(message);
        }
    }

    console.log({errors});

    return (
        <Modal
            open={open}
            onClose={CloseModal}
        >
            <Box sx={style}>
                <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
                    Sign in
                </Typography>
                <Grid sx={{ mb:2 }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl sx={{ mb: 2 }} fullWidth>
                            <TextField
                                id="email"
                                type="email"
                                name="email"
                                label="Email"
                                variant="filled"
                                {...register("email", { required: true })}
                            />
                            <FormError error={errors.email} />
                        </FormControl>
                        <FormControl sx={{ mb: 4 }} fullWidth>
                            <TextField
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                label="Password"
                                variant="filled"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Button onClick={() => setShowPassword(!showPassword)}>
                                                {showPassword ? 'HIDE' : 'SHOW'}
                                            </Button>
                                        </InputAdornment>
                                    )
                                }}
                                {...register("password", { required: true, minLength: 6 })}
                            />
                            <FormError error={errors.password} />
                        </FormControl>

                        <Button type="submit" variant="contained" fullWidth>Sign in</Button>
                    </form>
                </Grid>
                <Grid container alignItems="center">
                    <Box>
                        <Checkbox />
                        <Typography variant="caption">
                            Remember me
                        </Typography>
                    </Box>
                </Grid>
            </Box>
        </Modal>
    )
}

export default LoginModal