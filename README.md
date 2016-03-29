# brick-less

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
    engine: new Liquid(),
    path: {
        css: 'index.less'
    },
    static: {
        css: { processor: less }
    }
});

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

[brk]: https://github.com/harttle/brick.js
