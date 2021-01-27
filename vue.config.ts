module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|jpg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          },
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.(css|scss)$/i,
        use: ['style-loader', 'css-loader'],
        options: {
          url: true
        }
      }
    ]
  }
}
