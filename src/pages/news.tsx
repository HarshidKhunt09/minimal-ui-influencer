import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ArticleView } from 'src/sections/news/view/article-view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`News - ${CONFIG.appName}`}</title>
      </Helmet>

      <ArticleView />
    </>
  );
}
