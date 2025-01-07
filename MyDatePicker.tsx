import React, { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { PickersActionBar } from '@mui/x-date-pickers/internals';
import { TextField } from '@mui/material';
import moment, { Moment } from 'moment';

const MyDatePicker = () => {
  // Typing the date as a moment object
  const [selectedDate, setSelectedDate] = useState<Moment | null>(null);

  const handleCancel = () => {
    setSelectedDate(null); // Handle cancel logic
  };

  const handleDone = (date: Moment | null) => {
    setSelectedDate(date); // Handle the selected date logic
  };

  return (
    <DatePicker
      label="Select Date"
      value={selectedDate}
      onChange={(newDate: Moment | null) => setSelectedDate(newDate)}
      renderInput={(params) => <TextField {...params} />}
      components={{
        ActionBar: () => (
          <PickersActionBar
            onCancel={handleCancel}
            onAccept={() => handleDone(selectedDate)}
          />
        ),
      }}
    />
  );
};

export default MyDatePicker;
