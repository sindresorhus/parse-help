import test from 'ava';
import m from '.';

const fixture = `
	Usage
	  $ unicorn <name>

	Options
	  --rainbow     Lorem ipsum dolor sit amet
	  -m, --magic   Aenean commodo ligula eget dolor
	  --pony        Nullam dictum felis eu pede
	  -c, --color   Donec quam felis
	  -h,   --help  Felis quam cenod


	Examples
	  $ unicorn Peachy
	  $ unicorn Sparkle --rainbow --magic
`;

test(t => {
	const x = m(fixture);
	t.deepEqual(Object.keys(x.flags), ['rainbow', 'magic', 'pony', 'color', 'help']);
	t.is(x.flags.rainbow.description, 'Lorem ipsum dolor sit amet');
	t.is(x.flags.magic.alias, 'm');
	t.is(x.aliases.m, 'magic');
	t.is(x.aliases.c, 'color');
	t.is(x.aliases.h, 'help');
});
