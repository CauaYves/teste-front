module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/CadAcesso',
        permanent: true,
      },
    ];
  },
};
