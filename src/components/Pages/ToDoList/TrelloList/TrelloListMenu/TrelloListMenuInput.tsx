import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type Props = {
    title: string;
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    type: string;
};

export default function TrelloListMenuInput({ title, handleChange, type }: Props) {
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
                label={type === 'list' ? 'List title' : 'Card text'}
                variant="outlined"
                size="small"
                placeholder={title}
                onChange={handleChange} />
        </Box>
    );
}