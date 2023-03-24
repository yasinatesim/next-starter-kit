import GithubCorner from 'react-github-corner';
import { Provider } from 'react-redux';

import type { AppProps } from 'next/app';

import { store } from '@/store';

import '@/assets/styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />

      <GithubCorner href="https://github.com/yasinatesim/country-gdp-population" />
    </Provider>
  );
}

export default MyApp;
