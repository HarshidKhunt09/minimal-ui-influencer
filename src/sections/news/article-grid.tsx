import { Box, Grid, Skeleton, Typography } from '@mui/material';

import { ArticleItem } from './article-item';

import type { Article } from './view/types';

type ArticleGridProps = {
  articles: Article[];
  loading: boolean;
  error: string | null;
};

export const ArticleGrid = ({ articles, loading, error }: ArticleGridProps) => {
  if (loading) {
    return (
      <Grid container spacing={3}>
        {Array.from({ length: 6 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ padding: 2 }}>
              <Skeleton variant="rectangular" height={200} />
              <Skeleton variant="text" sx={{ mt: 2 }} />
              <Skeleton variant="text" sx={{ mt: 1 }} />
              <Skeleton variant="text" sx={{ mt: 1 }} width="60%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    );
  }

  if (error || articles.length === 0) {
    return <Typography variant="body1" color="error">Data not found</Typography>;
  }

  return (
    <Grid container spacing={3}>
      {articles.map((article, index) => {
        const latestArticleLarge = index === 0;
        const latestArticle = index === 1 || index === 2;

        return (
          <Grid key={article.id} item xs={12} sm={latestArticleLarge ? 12 : 6} md={latestArticleLarge ? 6 : 3}>
            <ArticleItem article={article} latestArticle={latestArticle} latestArticleLarge={latestArticleLarge} />
          </Grid>
        );
      })}
    </Grid>
  );
};
