var less = require('less'),
    _ = require('lodash'),
    fs = require('fs'),
    Path = require('path'),
    debug = require('debug')('brick-less:index'),
    process = require('process');

var importFmt = /@import\s*(?:(?:"[^"]*")|(?:'[^']*'))\s*;?/g,
    isSafe = {
        'ENOENT': true
    };

function BrickLess(options) {
    this.root = options.root || process.cwd();
}

BrickLess.prototype.render = function(path, rootClass) {
    return src(path)
        .then(css => parse(css, rootClass))
        .then(css => compile(css, {
            paths: [this.root, Path.dirname(path)]
        }));
};

function parse(css, rootClass) {
    var header = '';
    css = css.replace(importFmt, statement => {
        header += statement + '\n';
        return '';
    });
    return `${header}\n${rootClass}{\n${css}\n}\n`;
}

function compile(src, config) {
    debug('compiling with config:', config);
    return new Promise((resolve, reject) =>
        less.render(src, config, (e, output) =>
            e ? reject(compileError(e)) : resolve(output.css)));
}

function compileError(e) {
    var err = new Error();
    err.message = 'Error: ' + e.message;
    err.stack = JSON.stringify(e, null, 4);
    return err;
}

function src(path) {
    return new Promise((res, rej) =>
        fs.readFile(path, 'utf8', (e, data) => {
            return !e || isSafe[e.code] ? res(data || '') : rej(e);
        }));
}

module.exports = options => new BrickLess(options);
