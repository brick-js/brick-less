# brick-less

[![NPM version](https://img.shields.io/npm/v/brick-less.svg?style=flat)](https://www.npmjs.org/package/brick-less)
[![Build Status](https://travis-ci.org/brick-js/brick-less.svg?branch=master)](https://travis-ci.org/brick-js/brick-less)
[![Coverage Status](https://coveralls.io/repos/github/brick-js/brick-less/badge.svg?branch=master&foo=bar)](https://coveralls.io/github/brick-js/brick-less?branch=master)
[![Dependency manager](https://david-dm.org/brick-js/brick-less.png)](https://david-dm.org/brick-js/brick-less)

Less processor for [brick.js][brk].

## Mixins/Variables

A [brick.js][brk] module can contain arbitrary files.
Your `index.less` can `import` mixin/variable files in the current directory, 
and in modules directory.

> Less PATH is set to `<current module>:<module root>`.

For example:

```
bricks/
  |-- homepage
  |     |-- index.less
  |     |-- local-mixins.less
  |
  |-- styles
        |-- mixins.less
```

File `homepage/index.less`:

```
// relative to current directory
@import 'local-mixins';

// relative to current directory
@import '../styles/mixins'

// relative to Brick Root, see <https://github.com/brick-js/brick.js/wiki/Quickstart#brick-root>
@import 'styles/mixins';
```

[brk]: https://github.com/brick-js/brick.js
