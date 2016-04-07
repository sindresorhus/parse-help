import test from 'ava';
import fn from './';

const fixture = `
	Usage
	  $ unicorn <name>

	Options
	  --rainbow    Lorem ipsum dolor sit amet
	  -m, --magic  Aenean commodo ligula eget dolor
	  --pony       Nullam dictum felis eu pede
	  -c, --color  Donec quam felis

	Examples
	  $ unicorn Peachy
	  $ unicorn Sparkle --rainbow --magic
`;

test(t => {
	const x = fn(fixture);
	t.deepEqual(Object.keys(x.flags), ['rainbow', 'magic', 'pony', 'color']);
	t.is(x.flags.rainbow.description, 'Lorem ipsum dolor sit amet');
	t.is(x.flags.magic.alias, 'm');
	t.is(x.aliases.m, 'magic');
	t.is(x.aliases.c, 'color');
});
