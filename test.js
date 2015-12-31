import test from 'ava';
import fn from './';

test(t => {
	t.is(fn('00:00:05'), 5);
	t.is(fn('00:01:00'), 60);
	t.is(fn('01:01:01'), 3661);
	t.is(fn('01:00'), 60);
	t.is(fn('01'), 1);
	t.is(fn('1'), 1);
});
