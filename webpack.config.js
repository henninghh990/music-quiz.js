const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // Inngangspunktet til appen din
  output: {
    path: path.resolve(__dirname, 'dist'), // Hvor output går
    filename: 'bundle.js',  // Utgående filnavn
    library: 'Dropdown',  // Dette vil eksponere 'Dropdown' på globalt nivå
    libraryTarget: 'umd',  // Bruk UMD for å kunne brukes globalt
    clean: true, // Rens dist-mappen før bygging
  },
  mode: 'development', // Standard modus er development
  devServer: {
    static: './dist', // Hvor serveren leter etter filer
    open: true, // Åpner nettleseren når du kjører npm start
    hot: true, // Aktiver hot-reloading
    port: 3000, // Samme port som Create React App bruker
  },
  module: {
    rules: [
      {
        test: /\.js$/, // For .js-filer
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.scss$/, // For .scss-filer
        use: [
          'style-loader', // Injiserer stilene i DOM-en
          'css-loader',   // CSS til JavaScript
          'sass-loader',  // SCSS til CSS
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Bruker index.html fra public-mappen
    }),
  ],
};
