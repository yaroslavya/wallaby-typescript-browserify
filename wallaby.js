module.exports = function () {
  var wallabify = require('wallabify');

  var wallabyPostprocessor = wallabify({
      entryPatterns: [
        'app/spec.setup.js',
        'app/src/**/*.spec.js'
      ]
    }
  );

  return {
    files: [
      {pattern: 'app/spec.setup.ts', load: false, instrument: false},
      {pattern: 'app/src/**/*.ts', load: false},
      {pattern: 'app/src/**/*.spec.ts', ignore: true}
    ],

    tests: [
      {pattern: 'app/src/**/*.spec.ts', load: false}
    ],

    testFramework: 'mocha',

    postprocessor: wallabyPostprocessor,

    bootstrap: function (w) {
      window.__moduleBundler.loadTests();
    }
  };
};
