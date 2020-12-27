var path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: false,
    public: '3000-b4921471-caf0-45fc-9243-9dfd2583b509.ws-eu03.gitpod.io',
    port: 3000
  }
};