import type { Dayjs } from 'dayjs';

import { useState } from 'react';

import { Box, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { DashboardContent } from 'src/layouts/dashboard';

import { SearchBar } from '../search-bar';
import { ArticleGrid } from '../article-grid';
import { ActiveFilters } from '../active-filters';
import { DateFilterDialog } from '../date-filter-dialog';
import { useArticles } from '../../../hooks/user-articles';

import type { FilterParams } from './types';

export function ArticleView() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterParams, setFilterParams] = useState<FilterParams>({
    query: '',
    startDate: null,
    endDate: null
  });

  const { articles, loading, error } = useArticles(filterParams);

  const handleSearchInput = (query: string) => {
    setFilterParams(prev => ({ ...prev, query }));
  };

  const handleApplyFilter = (startDate: Dayjs | null, endDate: Dayjs | null) => {
    setFilterParams(prev => ({ ...prev, startDate, endDate }));
    setIsModalOpen(false);
  };

  const handleClearFilter = () => {
    setFilterParams(prev => ({
      ...prev,
      startDate: null,
      endDate: null
    }));
    setIsModalOpen(false);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DashboardContent>
        <Box display="flex" alignItems="center" mb={5}>
          <Typography variant="h4" flexGrow={1}>
            News
          </Typography>
        </Box>

        <SearchBar
          query={filterParams.query}
          onQueryChange={handleSearchInput}
          onFilterClick={() => setIsModalOpen(true)}
        />

        <DateFilterDialog
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          startDate={filterParams.startDate}
          endDate={filterParams.endDate}
          onApply={handleApplyFilter}
          onClear={handleClearFilter}
        />

        <ActiveFilters
          startDate={filterParams.startDate}
          endDate={filterParams.endDate}
          onClear={handleClearFilter}
        />

        <ArticleGrid
          articles={articles}
          loading={loading}
          error={error}
        />
      </DashboardContent>
    </LocalizationProvider>
  );
}