import type { CardProps } from '@mui/material/Card';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { fDate } from 'src/utils/format-time';
import { fShortenNumber } from 'src/utils/format-number';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

export type ArticleItemProps = {
  id: string;
  title: string;
  coverUrl: string;
  totalViews: number;
  description: string;
  totalShares: number;
  totalComments: number;
  totalFavorites: number;
  postedAt: string | number | null;
  author: {
    name: string;
    avatarUrl: string;
  };
};

export function ArticleItem({
  sx,
  article,
  latestArticle,
  latestArticleLarge,
  ...other
}: CardProps & {
  article: ArticleItemProps;
  latestArticle: boolean;
  latestArticleLarge: boolean;
}) {
  const renderAvatar = (
    <Avatar
      alt={article.author.name}
      src={article.author.avatarUrl}
      sx={{
        left: 24,
        zIndex: 9,
        bottom: -24,
        position: 'absolute',
        ...((latestArticleLarge || latestArticle) && {
          top: 24,
        }),
      }}
    />
  );

  const renderTitle = (
    <Link
      color="inherit"
      variant="subtitle2"
      underline="hover"
      sx={{
        height: 44,
        overflow: 'hidden',
        WebkitLineClamp: 2,
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        ...(latestArticleLarge && { typography: 'h5', height: 60 }),
        ...((latestArticleLarge || latestArticle) && {
          color: 'common.white',
        }),
      }}
    >
      {article.title}
    </Link>
  );

  const renderInfo = (
    <Box
      gap={1.5}
      display="flex"
      flexWrap="wrap"
      justifyContent="flex-end"
      sx={{
        mt: 3,
        color: 'text.disabled',
      }}
    >
      {[
        { number: article.totalComments, icon: 'solar:chat-round-dots-bold' },
        { number: article.totalViews, icon: 'solar:eye-bold' },
        { number: article.totalShares, icon: 'solar:share-bold' },
      ].map((info, _index) => (
        <Box
          key={_index}
          display="flex"
          sx={{
            ...((latestArticleLarge || latestArticle) && {
              opacity: 0.64,
              color: 'common.white',
            }),
          }}
        >
          <Iconify width={16} icon={info.icon} sx={{ mr: 0.5 }} />
          <Typography variant="caption">{fShortenNumber(info.number)}</Typography>
        </Box>
      ))}
    </Box>
  );

  const renderCover = (
    <Box
      component="img"
      alt={article.title}
      src={article.coverUrl}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  const renderDate = (
    <Typography
      variant="caption"
      component="div"
      sx={{
        mb: 1,
        color: 'text.disabled',
        ...((latestArticleLarge || latestArticle) && {
          opacity: 0.48,
          color: 'common.white',
        }),
      }}
    >
      {fDate(article.postedAt)}
    </Typography>
  );

  const renderShape = (
    <SvgColor
      width={88}
      height={36}
      src="/assets/icons/shape-avatar.svg"
      sx={{
        left: 0,
        zIndex: 9,
        bottom: -16,
        position: 'absolute',
        color: 'background.paper',
        ...((latestArticleLarge || latestArticle) && { display: 'none' }),
      }}
    />
  );

  return (
    <Card sx={sx} {...other}>
      <Box
        sx={(theme) => ({
          position: 'relative',
          pt: 'calc(100% * 3 / 4)',
          ...((latestArticleLarge || latestArticle) && {
            pt: 'calc(100% * 4 / 3)',
            '&:after': {
              top: 0,
              content: "''",
              width: '100%',
              height: '100%',
              position: 'absolute',
              bgcolor: varAlpha(theme.palette.grey['900Channel'], 0.72),
            },
          }),
          ...(latestArticleLarge && {
            pt: {
              xs: 'calc(100% * 4 / 3)',
              sm: 'calc(100% * 3 / 4.66)',
            },
          }),
        })}
      >
        {renderShape}
        {renderAvatar}
        {renderCover}
      </Box>

      <Box
        sx={(theme) => ({
          p: theme.spacing(6, 3, 3, 3),
          ...((latestArticleLarge || latestArticle) && {
            width: 1,
            bottom: 0,
            position: 'absolute',
          }),
        })}
      >
        {renderDate}
        {renderTitle}
        {renderInfo}
      </Box>
    </Card>
  );
}
