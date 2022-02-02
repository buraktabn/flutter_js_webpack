var path = require('path')

module.exports = [{
  entry: ['./src/index.js'],
  mode: 'production',
  output: {
    libraryTarget: "var",
    library: 'polkadotJs',
    path: path.resolve(__dirname, './dist'),
    filename: 'substrate_dart.bundle.js'
  },
}]


// For Typescript
// module.exports = {
//   entry: './src/index.ts',
//   module: {
//     rules: [
//       {
//         test: /\.ts$/,
//         use: 'ts-loader',
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.ts', '.js'],
//   },
//   optimization: {
//     minimize: true
//   },
//   output: {
//     filename: 'substrate_dart.bundle.js',
//     path: path.resolve(__dirname, './dist'),
//   },
// };