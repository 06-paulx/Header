// var path = require('path');
// var SRC_DIR = path.join(__dirname, '/client/src');
// var DIST_DIR = path.join(__dirname, '/client/dist');

// module.exports = {
//   mode: 'development',
//   entry: `${SRC_DIR}/index.jsx`,
//   output: {
//     path: DIST_DIR,
//     filename: 'bundle.js' 
//   },
//   module : {
//     loaders : [
//       {
//         test : /\.jsx?/,
//         include : SRC_DIR,
//         loader : 'babel-loader',      
//         query: {
//           presets: ['@babel/preset-env', '@babel/preset-react'],
//         },
//       },
//       //  {
//       //    test: /\\.jsx?$/,
//       //    loader: 'babel',
//       //    exclude: ['node_modules']
//       //  }, {
//       //    test: /\\.css$/,
//       //    loader: "style-loader!css-loader"
//       //  }, {
//       //    test: /\\.gif$/,
//       //    loader: "url-loader"
//       //  }, {
//       //    test: /\\.(ttf|eot|svg)$/,
//       //    loader: "file-loader"
//       //  },
//     ]
//   }
// };

const path = require('path');

const SRC_DIR = path.join(__dirname, 'client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,

  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      include: SRC_DIR,
      loader: 'babel-loader',
      query: {
        presets: ["es2015", "react"],
      },
    }, ],
  },
};