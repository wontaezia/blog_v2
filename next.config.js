const path = require('path');

module.exports = {
  images: {
    domains: ['i.imgur.com'],
  },
  flags: {
    DEV_SSR: false,
  },
  reactStrictMode: true,
  distDir: 'build',
  webpack(config, options) {
    config.resolve = {
      alias: {
        '@src': path.join(__dirname, 'src'),
        '@components': path.join(__dirname, 'src', 'components'),
        '@styles': path.join(__dirname, 'src', 'styles'),
        '@modules': path.join(__dirname, 'src', 'modules'),
        '@pages': path.join(__dirname, 'src', 'pages'),
        '@hooks': path.join(__dirname, 'src', 'hooks'),
        '@assets': path.join(__dirname, 'src', 'assets'),
        '@templates': path.join(__dirname, 'src', 'templates'),
        '@utils': path.join(__dirname, 'src', 'utils'),
        '@timeline': path.join(__dirname, 'src', 'timeline'),
      },
      extensions: ['js', 'jsx'],
      ...config.resolve,
    };

    return config;
  },
};
