import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type Props = {
    title: string;
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function TrelloListMenuInput({ title, handleChange }: Props) {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-basic"
                label="List title"
                variant="outlined"
                size="small"
                placeholder={title}
                onChange={handleChange} />
        </Box>
    );
}