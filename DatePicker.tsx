import React from 'react';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import InputAdornment from '@mui/material/InputAdornment';

export default function CustomDatePicker() {
  const [selectedDate, setSelectedDate] = React.useState<null | moment.Moment>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        label="Select Date"
        value={selectedDate}
        onChange={(newValue) => setSelectedDate(newValue)}
        slotProps={{
          textField: {
            variant: "standard", // Removes borders
            InputLabelProps: {
              shrink: true, // Ensures the label stays on top
            },
            InputProps: {
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarTodayIcon />
                </InputAdornment>
              ),
              disableUnderline: true, // Removes underline
            },
            fullWidth: true,
            sx: {
              "& .MuiInput-underline:before": {
                borderBottom: "none", // Removes default underline
              },
              "& .MuiInput-underline:after": {
                borderBottom: "none", // Removes focus underline
              },
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottom: "none", // Removes hover underline
              },
            },
          },
          },
        }}
      />
    </LocalizationProvider>
  );
}
