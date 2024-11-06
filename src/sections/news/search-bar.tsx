import { Box, Button, TextField } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

type SearchBarProps = {
  query: string;
  onQueryChange: (query: string) => void;
  onFilterClick: () => void;
};

export const SearchBar = ({ query, onQueryChange, onFilterClick }: SearchBarProps) => (
  <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ mb: 5, gap: 2 }}>
    <TextField
      type="text"
      placeholder="Search news..."
      onChange={(e) => onQueryChange(e.target.value)}
      value={query}
      variant="outlined"
      sx={{ flexGrow: 1 }}
    />
    
    <Button
      variant="outlined"
      startIcon={<FilterListIcon />}
      onClick={onFilterClick}
      sx={{ minWidth: 100 }}
    >
      Filter
    </Button>
  </Box>
);
