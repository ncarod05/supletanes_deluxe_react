const webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    //excluir el app test js
    exclude: [
      'src/App.test.js'
    ],
    // Framework Jasmine y webpack
    frameworks: ['jasmine', 'webpack'],

    //cargamos los archivos
    files: [
      { pattern: 'public/assets/img/**/*', watched: false, included: false, served: true, nocache: false }, // para las imagenes
      'src/components/**/*.jsx',          // Componentes React
      'src/tests/**/*.spec.jsx'           // Pruebas unitarias
    ],

    preprocessors: {
      'src/**/*.jsx': ['webpack'],
      'src/tests/**/*.spec.jsx': ['webpack']
    },

    // usar nuestra config
    webpack: webpackConfig,

    // Navegador sin cabeza (Headless)
    browsers: ['ChromeHeadless'],

    // Ejecutar una sola vez
    singleRun: true
  });
};