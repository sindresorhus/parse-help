import execall from 'execall';

export default function parseHelp(string) {
	const returnValue = {
		flags: {},
		aliases: {}
	};

	const regex = /^\s*[^$]\s*(?:-([a-z-]),[ \t]+)?--([a-z-]+) +(.*)$/gim;

	for (const {subMatches} of execall(regex, string)) {
		const [shortFlag, longFlag, description] = subMatches;

		if (shortFlag) {
			returnValue.aliases[shortFlag] = longFlag;
		}

		if (longFlag) {
			returnValue.flags[longFlag] = {};

			const flag = returnValue.flags[longFlag];

			if (shortFlag) {
				flag.alias = shortFlag;
			}

			if (description) {
				flag.description = description;
			}
		}
	}

	return returnValue;
}
