'use strict';
var execall = require('execall');
var re = /^\s*[^$]\s*(?:-([a-z-]),[ \t]+)?--([a-z-]+) +(.*)$/igm;

module.exports = function (str) {
	var ret = {
		flags: {},
		aliases: {}
	};

	execall(re, str).forEach(function (x) {
		var s = x.sub;

		if (s[0]) {
			ret.aliases[s[0]] = s[1];
		}

		if (s[1]) {
			var f = ret.flags[s[1]] = {};

			if (s[0]) {
				f.alias = s[0];
			}

			if (s[2]) {
				f.description = s[2];
			}
		}
	});

	return ret;
};
