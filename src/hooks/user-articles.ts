import type { Dayjs } from 'dayjs';

import dayjs from 'dayjs';
import { debounce } from 'lodash';
import { useState, useEffect } from 'react';

import api from 'src/utils/axios';

import type { Article, FilterParams } from '../sections/news/view/types';

type NYTArticle = {
  _id: string;
  headline: { main: string };
  abstract: string;
  multimedia?: Array<{ url: string }>;
  pub_date: string;
  byline?: { original?: string };
};

type NYTResponse = {
  response: {
    docs: NYTArticle[];
  };
};

const transformArticleData = (nytArticle: NYTArticle): Article => ({
  id: nytArticle._id,
  title: nytArticle.headline.main,
  description: nytArticle.abstract,
  coverUrl: `https://www.nytimes.com/${nytArticle?.multimedia?.[0]?.url}`,
  totalViews: Math.floor(Math.random() * 10000),
  totalComments: Math.floor(Math.random() * 5000),
  totalShares: Math.floor(Math.random() * 3000),
  totalFavorites: Math.floor(Math.random() * 2000),
  postedAt: dayjs(nytArticle.pub_date).format('MM/DD/YYYY'),
  author: {
    name: nytArticle.byline?.original?.replace('By ', '') || 'NYT Staff',
    avatarUrl: "",
  },
});

export function useArticles(filterParams: FilterParams) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const formatDate = (date: Dayjs | null): string => date ? date.format('YYYYMMDD') : '';

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      setError(null);

      try {
        const apiParams: { q: string; begin_date?: string; end_date?: string } = {
          q: filterParams.query || 'news',
        };

        if (filterParams.startDate) {
          apiParams.begin_date = formatDate(filterParams.startDate);
        }
        if (filterParams.endDate) {
          apiParams.end_date = formatDate(filterParams.endDate);
        }

        const { data } = await api.get<NYTResponse>('/search/v2/articlesearch.json', { params: apiParams });
        setArticles(data.response.docs.map(transformArticleData));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred while fetching articles');
        console.error('Error fetching articles:', err);
      } finally {
        setLoading(false);
      }
    };

    const debouncedFetch = debounce(fetchArticles, 500);
    debouncedFetch();

    return () => {
      debouncedFetch.cancel();
    };
  }, [filterParams]);

  return { articles, loading, error };
};