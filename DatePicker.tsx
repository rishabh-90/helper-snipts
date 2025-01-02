import React, { useState, FC } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DateRangePicker, SingleInputDateRangeField } from "@mui/x-date-pickers-pro";
import { IconButton, Typography, Box } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ClearIcon from "@mui/icons-material/Clear";
import moment, { Moment } from "moment";

interface DateRangePickerProps {
  startDate?: Moment | null; // Optional start date
  endDate?: Moment | null;   // Optional end date
  onChange: (dates: [Moment | null, Moment | null]) => void; // Change handler
}

const DateRangePickerWithTitle: FC<DateRangePickerProps> = ({
  startDate,
  endDate,
  onChange,
}) => {
  const [value, setValue] = useState<[Moment | null, Moment | null]>([
    startDate || moment().startOf("day"),
    endDate || moment().add(7, "day").endOf("day"),
  ]);

  const handleClear = () => setValue([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Box mb={2}>
        <Typography variant="h6">Select Date Range</Typography>
      </Box>
      <DateRangePicker
        slots={{ field: SingleInputDateRangeField }}
        slotProps={{
          field: {
            InputProps: {
              disableUnderline: true,
              startAdornment: (
                <IconButton size="small">
                  <CalendarTodayIcon fontSize="small" />
                </IconButton>
              ),
              endAdornment: (
                <IconButton onClick={handleClear} size="small">
                  <ClearIcon fontSize="small" />
                </IconButton>
              ),
            },
            sx: {
              width: "250px",
              "& .MuiInputBase-root": {
                border: "none",
                boxShadow: "none",
                padding: "4px 8px",
                backgroundColor: "transparent",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            },
          },
          actionBar: {
            actions: ["cancel", "accept"],
          },
        }}
        closeOnSelect={false}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          onChange(newValue); // Call the provided onChange prop
        }}
      />
    </LocalizationProvider>
  );
};

export default DateRangePickerWithTitle;
