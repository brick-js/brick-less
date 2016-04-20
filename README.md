# brick-less

[![NPM version](https://img.shields.io/npm/v/brick-less.svg?style=flat)](https://www.npmjs.org/package/brick-less)
[![Build Status](https://travis-ci.org/brick-js/brick-less.svg?branch=master)](https://travis-ci.org/brick-js/brick-less)
[![Coverage Status](https://coveralls.io/repos/github/brick-js/brick-less/badge.svg?branch=master&foo=bar)](https://coveralls.io/github/brick-js/brick-less?branch=master)
[![Dependency manager](https://david-dm.org/brick-js/brick-less.png)](https://david-dm.org/brick-js/brick-less)

Less processor for [brick.js][brk].

## Install

```bash
npm install -S brick-less
```

## Enable

Set `pass.css` to `index.less`, and set `static.css.processor` to `less`.

```javascript
var less = require('brick-less');

var brk = brickJs({
    root: path.join(__dirname, 'modules'),
    css: {
        entry: 'index.less'
    }
});

brk.processor('less', less());

app.use('/', brk.express);
```

## Mixins/Variables

A [brick.js][brk] module can contain arbitrary files.
Your `index.less` can `import` mixin/variable files in the current directory, 
and in modules directory.

> Less PATH is set to `<current module>:<module root>`.

For example:

```
Directory Tree:

modules
  |-- homepage
  |     |-- index.less
  |     |-- local-mixins.less
  |
  |-- styles
        |-- mixins.less


File homepage/index.less:

@import 'local-mixins';
@import 'styles/mixins';    // equal to: @import '../styles/mixins'
```

> `../styles/mixins` is recommended, since IDEs don't known `<module root>`

[brk]: https://github.com/brick-js/brick.js
