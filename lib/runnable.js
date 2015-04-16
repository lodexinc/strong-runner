'use strict';

var Commit = require('strong-fork-cicada/lib/commit');
var assert = require('assert');
var extend = require('util')._extend;
var fmt = require('util').format;

module.exports = function Runnable(options) {
  assert(options && options.dir, 'options.dir');

  var commit = Commit({
    hash: options.hash,
    id: options.id,
    dir: options.dir,
    repo: options.repo,
    branch: options.branch,
  });
  commit.runInPlace = options.runInPlace;
  commit.env = extend({}, options.env);

  return commit;
};

module.exports.toString = function c2s(c) {
  if (!c) return '(none)';

  return fmt('%s/%s in %s', c.repo, c.branch, c.dir);
};