var path = require('path');

module.exports = {
 entry: './js/game.js',
 output: {
   filename: './bundle.js',
 },
 devtool: 'source-map',
 resolve: {
   extensions: ['.js']
 }
};
