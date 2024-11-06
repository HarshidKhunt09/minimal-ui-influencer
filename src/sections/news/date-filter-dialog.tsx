import type { Dayjs } from 'dayjs';

import * as yup from 'yup';
import { useState } from 'react';

import { DatePicker } from '@mui/x-date-pickers';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Dialog,
  Button,
  Typography,
  IconButton,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

const dateFilterSchema = yup.object().shape({
  startDate: yup.date().nullable(),
  endDate: yup
    .date()
    .nullable()
    .when('startDate', (startDate, schema) => {
      if (startDate) {
        return schema.min(startDate, 'End date must be after start date');
      }
      return schema;
    }),
});

type DateFilterDialogProps = {
  open: boolean;
  onClose: () => void;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  onApply: (startDate: Dayjs | null, endDate: Dayjs | null) => void;
  onClear: () => void;
};

export const DateFilterDialog = ({
  open,
  onClose,
  startDate: initialStartDate,
  endDate: initialEndDate,
  onApply,
  onClear,
}: DateFilterDialogProps) => {
  const [startDate, setStartDate] = useState<Dayjs | null>(initialStartDate);
  const [endDate, setEndDate] = useState<Dayjs | null>(initialEndDate);
  const [error, setError] = useState<string | null>(null);

  const handleApply = async () => {
    try {
      await dateFilterSchema.validate({ startDate, endDate });
      onApply(startDate, endDate);
      setError(null);
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        setError(err.message);
      }
    }
  };

  const handleClose = () => {
    setStartDate(initialStartDate);
    setEndDate(initialEndDate);
    setError(null);
    onClose();
  };

  const handleClear = () => {
    setStartDate(null);
    setEndDate(null);
    setError(null);
    onClear();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
        },
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <DialogTitle>
          Date Filter
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
      </Box>
      
      <DialogContent>
        <Box 
          display="flex" 
          flexDirection="column" 
          gap={3} 
          sx={{ pt: 1 }}
        >
          <DatePicker
            label="Start Date"
            value={startDate}
            onChange={(newValue) => {
              setStartDate(newValue);
              setError(null);
            }}
            slotProps={{
              textField: {
                fullWidth: true,
                error: !!error && error.includes('start'),
                size: "medium",
              },
            }}
          />
          
          <DatePicker
            label="End Date"
            value={endDate}
            onChange={(newValue) => {
              setEndDate(newValue);
              setError(null);
            }}
            slotProps={{
              textField: {
                fullWidth: true,
                error: !!error && error.includes('end'),
                size: "medium",
              },
            }}
          />

          {error && (
            <Typography 
              color="error" 
              variant="caption" 
              sx={{ mt: 1 }}
            >
              {error}
            </Typography>
          )}
        </Box>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button 
          variant="outlined" 
          onClick={handleClear}
          color="inherit"
        >
          Clear
        </Button>
        <Button 
          variant="contained" 
          onClick={handleApply}
          color="primary"
        >
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
};