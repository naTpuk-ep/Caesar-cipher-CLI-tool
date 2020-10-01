const { myStream } = require('./stream')
const meow = require('meow');

const cli = meow('', {
	flags: {
		shift: {
			type: 'number',
			isRequired: true,
			alias: 's'
		},
		action: {
			type: 'string',
			isRequired: true,
			alias: 'a',
		},
		input: {
			type: 'string',
			alias: 'i',
		},
		output: {
			type: 'string',
			alias: 'o',			
		}
	}
})

const flags = cli.flags;
let input = flags.input;
let shift = flags.shift;
let output = flags.output;
let action = flags.action;

myStream(action, shift, input, output);
