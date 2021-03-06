const fs = require('fs');
const readline = require('readline');
const {convert} = require('./coder.js');

const rl = readline.createInterface({
  input: process.stdin,
	output: process.stdout
});

function write (message, output) {
	fs.appendFile(output, `${message}\n`, (err) => {
		console.log('write to file success');
	})
}

module.exports = {

	myStream(action, shift, input, output) {
		if (action === 'encode'){}
		else if (action === 'decode') shift = -shift
		else {
			console.error('enter correct action')
			rl.close();
			return
		}
		if (isNaN(shift)){
			console.error('enter correct shift')
			rl.close();
			return
		}
		if (output && !fs.existsSync(output)){
			console.error('enter correct input file path');
			rl.close();
			return
		}
		if ((!input || input === '') && (!output || output === '')) {
			rl.on('line', (line) => {
				console.log(convert(line, shift));
			})
		} else {
			if (input) {
				fs.readFile(input, 'utf-8', (err, file) => {
					if (!input || err) {
						console.error('enter correct output file path');
						return
					}
					if (output) {
						let codeMessage = convert(file, shift)
						write(codeMessage, output);
					} else {
						console.log(convert(file, shift));
					}
				})
			rl.close();
			} else {
				rl.on('line', (line) => {
					if (output) {
						let codeMessage = convert(line, shift)
						write(codeMessage, output);
					} else {
						console.log(convert(line, shift));
					}
				});
			}
		}
	}
}
