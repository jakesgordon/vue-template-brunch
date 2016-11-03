# Vue Template Brunch

Adds support to Brunch for PRE-compiling standalone vue templates (e.g. .html files)
using [vue-template-compiler](https://www.npmjs.com/package/vue-template-compiler)

> *NOTE*: This is NOT for single-file vue components where template, script, and styles are combined.
          For those you should use the [vue-brunch](https://www.npmjs.com/package/vue-brunch) plugin.

## Installation

To install this plugin

```bash
npm install vue-template-branch --save-dev
```

## Usage

Whenever you require a `.html` file in your project, Brunch will assume that it is a vue template
and compile it down to the js methods needed to render that template. You can then assign these
attributes to your component.

```
var template = require('my-template.html');

var component = {

  render:          template.render,
  staticRenderFns: template.staticRenderFns,

  data: {
  },

  // ... etc

}
```

## Related

  * [Vue Template Compilation](https://vuejs.org/guide/render-function.html#Template-Compilation)
  * [Vue.compile method](https://vuejs.org/api/#Vue-compile)
  * NPM - [vue-template-compiler](https://www.npmjs.com/package/vue-template-compiler)
  * NPM - [vue-brunch](https://www.npmjs.com/package/vue-brunch)

## License

[MIT](license.md)

## Contact

If you have any ideas, feedback, requests or bug reports, you can reach me at
[jake@codeincomplete.com](mailto:jake@codeincomplete.com), or via my
website: [Code inComplete](http://codeincomplete.com)
