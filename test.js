'use strict';
var test = require('ava');
var sec = require('./');

test(function (t) {
	t.assert(sec('00:00:05') === 5);
	t.assert(sec('00:01:00') === 60);
	t.assert(sec('01:01:01') === 3661);
	t.assert(sec('01:00') === 60);
	t.assert(sec('01') === 1);
	t.assert(sec('1') === 1);
	t.end();
});
