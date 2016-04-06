var chai = require("chai");
var should = chai.should();
var brickLess = require('.');
var Path = require('path');
var fs = require('fs');
chai.use(require("chai-as-promised"));

Object.defineProperty(
  Promise.prototype,
  'should',
  Object.getOwnPropertyDescriptor(Object.prototype, 'should')
);

describe('functionality', function() {
    var less, root = Path.resolve(__dirname,'cases');
    beforeEach(function() {
        less = brickLess({root:root });
    });
    it('should handle single less file', function() {
        return less.render(path('simple/index.less'), '.brk-simple')
            .should.eventually.equal(src('simple/index.css'));
    });
    it('should handle local import', function() {
        return less.render(path('local-import/index.less'), '.brk-local-import')
            .should.eventually.equal(src('local-import/index.css'));
    });
    it('should handle global import', function() {
        return less.render(path('global-import/index.less'), '.brk-global-import')
            .should.eventually.equal(src('global-import/index.css'));
    });
});

function path(p){
    return Path.resolve(__dirname, 'cases', p);
}

function src(p){
    return fs.readFileSync(path(p), 'utf-8');
}
