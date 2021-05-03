import test from 'ava';
import toSeconds from './index.js';

test('main', t => {
	t.is(toSeconds('00:00:05'), 5);
	t.is(toSeconds('00:01:00'), 60);
	t.is(toSeconds('01:01:01'), 3661);
	t.is(toSeconds('01:00'), 60);
	t.is(toSeconds('01'), 1);
	t.is(toSeconds('1'), 1);
});
