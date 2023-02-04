import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ru';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

type Props = {
    handleDeadline: (newValue: Dayjs | null) => void
}

export default function DatePicker({ handleDeadline }: Props) {
    const [value, setValue] = React.useState<Dayjs | null>(
        dayjs(),
    );

    const handleChange = (newValue: Dayjs | null) => {
        handleDeadline(newValue);
        setValue(newValue);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
                <MobileDatePicker
                    label="Deadline"
                    inputFormat="DD/MM/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </Stack>
        </LocalizationProvider>
    );
}