import PropTypes from 'prop-types';

// Styles
import '@/scss/app.scss';

function Layout({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

Layout.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object,
};

export default Layout;
