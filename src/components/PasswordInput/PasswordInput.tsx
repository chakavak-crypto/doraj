import React, {useEffect, useState} from 'react';
import {IconButton, InputAdornment, OutlinedInput, OutlinedInputProps} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';

export interface PasswordInputProps extends OutlinedInputProps{

}
export default function PasswordInput(props: PasswordInputProps){
    const [showPassword, setShowPassword] = React.useState(false);
    const [showReset, setShowReset] = useState(false);
    const [value, setValue] = useState('123');


    useEffect(() => {
        if(!!value){
            setShowReset(true)
        }else{
            setShowReset(false)
        }
    }, [value])


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleClear = () => {
        setValue('')
    }

    return (
        <OutlinedInput
            type={showPassword ? 'text' : 'password'}
            value={value}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setValue(event.target.value);
            }}
            endAdornment={
                <>
                    {
                        showReset && (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClear}
                                    onMouseDown={handleMouseEvent}
                                    onMouseUp={handleMouseEvent}
                                    edge="end"
                                >
                                    <CloseIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseEvent}
                            onMouseUp={handleMouseEvent}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                </>
            }
            {...props}
        />
    );
}