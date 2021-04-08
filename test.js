import test from 'ava';
import parseHelp from './index.js';

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

test('main', t => {
	const parsed = parseHelp(fixture);
	t.deepEqual(Object.keys(parsed.flags), ['rainbow', 'magic', 'pony', 'color', 'help']);
	t.is(parsed.flags.rainbow.description, 'Lorem ipsum dolor sit amet');
	t.is(parsed.flags.magic.alias, 'm');
	t.is(parsed.aliases.m, 'magic');
	t.is(parsed.aliases.c, 'color');
	t.is(parsed.aliases.h, 'help');
});
