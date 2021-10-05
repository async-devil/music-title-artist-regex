const fs = require("fs");

const prepare = (data) => {
	data = data
		.split("\n")
		// .map((line) => line.replace(/^ *- /, "").replace(/(?<!\W) ?\/\/ ?.*/, ""))
		.filter((line) => !!line);

	const names = [...data].filter((line) => /^-/.test(line));
	const regexps = [...data].filter((line) => /^\s*-/.test(line));

	const result = [];

	names.forEach((name) => {
    name = name.replace(/^ *- /, "").replace(/(?<!\W) ?\/\/ ?.*/, "");
    return result.push({ name });
  });

	let max = 3;
	regexps.forEach((regexp, i) => {
    regexp = regexp.replace(/^ *- /, "");
		console.log(regexp)
		

		if (i === max) max = max * 2;

		switch (max - i + 1) {
			case 0:
				return (result[max / 3 - 1].titletR = regexp);
			case 1:
				return (result[max / 3 - 1].artistR = regexp);
			case 2:
				return (result[max / 3 - 1].matchR = regexp);
		}
	});

  return result
};

/**
 * @returns {Array<{name: string, matchR: string, titleR: string, artistR: string}>} RegExp objects array
 */
const parse = () => {
  const data = fs.readFileSync('./RegExp.md', "utf-8")

  return prepare(data)
}

module.exports = parse;
