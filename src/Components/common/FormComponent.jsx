import React from 'react'
import { TextField } from "@mui/material";
import { Theme } from "../Theme"

export default function RenderInputText({ name, label,onChange, multiline, rows, state}) {
    const{Data, errors} = state;
    return (
        <TextField
            InputLabelProps={{
                sx: {
                    color: Theme.colors.base2, // Change this to your desired color
                    "&.Mui-focused": {
                        color: Theme.colors.primary,
                    },
                }
            }}
            InputProps={{
                sx: {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: Theme.colors.primary, // Default border color
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: Theme.colors.primary, // Border color when focused
                    },
                    "&:focus": {
                        outline: Theme.colors.primary, // Focus color
                    },
                }
            }}
            variant="outlined"
            label={label}
            fullWidth={true}
            name={name}
            value={Data[name]}
            error={errors[name] ? true : false}
            helperText={errors[name] || ""}
            onChange={onChange}
            multiline={multiline}
            rows={rows}
        />
    )
}
