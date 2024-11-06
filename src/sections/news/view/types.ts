import type { Dayjs } from 'dayjs';

export type Article = {
  id: string;
  title: string;
  description: string;
  coverUrl: string;
  totalViews: number;
  totalComments: number;
  totalShares: number;
  totalFavorites: number;
  postedAt: string;
  author: {
    name: string;
    avatarUrl: string;
  };
};

export type FilterParams = {
  query: string;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
};