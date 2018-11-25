module.exports = (function() {

  "use strict"

  var compiler = require('vue-template-compiler'),
      toFunc   = (code) => "function() { " + code + " }";

  class BrunchPlugin {

    constructor(config) {
    }

    compile(file) {

      var results = compiler.compile(file.data), // returns compiled template as strings containing function body
          render  = toFunc(results.render),
          other   = results.staticRenderFns.map(f => toFunc(f))

      if (results.errors.length > 0)
        throw results.errors;

      return Promise.resolve(`module.exports = {
        render:            ${ render },
        staticRenderFns: [ ${ other.join(', ')} ]
      }`); // NOTE that argument to resolve is one large es6 multi line template string

    }

  }

  BrunchPlugin.prototype.brunchPlugin = true;
  BrunchPlugin.prototype.type = 'template';
  BrunchPlugin.prototype.pattern = /\.html$/;   // TODO: make this configurable
  BrunchPlugin.prototype.defaultEnv = '*';

  return BrunchPlugin;

})();
