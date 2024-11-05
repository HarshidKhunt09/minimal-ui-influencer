import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { NewsView } from 'src/sections/blog/view/news-view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Blog - ${CONFIG.appName}`}</title>
      </Helmet>

      <NewsView />
    </>
  );
}
