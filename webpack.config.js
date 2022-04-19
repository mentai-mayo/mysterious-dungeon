const path = require('path');

module.exports = {

  // entry point
  entry: {
    index: [
      './source/index.ts',
    ],
  },

  // compile mode
  mode: 'production',

  // optimization
  optimization: {

    // minify
    minimize: true,
  },

  // module
  module: {
    rules: [
      {
        // typescript
        test: /\.ts/,
        use: 'ts-loader',
      },
    ],
  },

  // import/export resolve
  resolve: {
    extensions: [
      '.ts', '.js'
    ],
  },

  // output
  output: {

    // out dir
    path: path.win32.join(__dirname, '/build/'),

    // output filename
    filename: '[name].js',

    // clean dist-dir before build
    clean: true,

    // when clean keep this
    // ex) keep: /\.html$/
  },
};