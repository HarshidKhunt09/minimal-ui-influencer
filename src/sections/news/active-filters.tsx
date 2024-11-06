import type { Dayjs } from 'dayjs';

import ClearIcon from '@mui/icons-material/Clear';
import { Box, Typography, IconButton } from '@mui/material';

type ActiveFiltersProps = {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  onClear: () => void;
};

export const ActiveFilters = ({ startDate, endDate, onClear }: ActiveFiltersProps) => {
  if (!startDate && !endDate) return null;

  return (
    <Box mb={3} display="flex" alignItems="center" gap={1}>
      <Typography variant="body2" color="text.secondary">
        Active filters:
      </Typography>
      {startDate && (
        <Typography variant="body2">
          From: {startDate.format('MM/DD/YYYY')}
        </Typography>
      )}
      {endDate && (
        <Typography variant="body2">
          To: {endDate.format('MM/DD/YYYY')}
        </Typography>
      )}
      <IconButton size="small" onClick={onClear}>
        <ClearIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};