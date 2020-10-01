module.exports = {
	convert(input, shift){
		return input.split('').map(e => {
			let ech = e.charCodeAt();
			if(ech > 96 && ech <= 122) {
				return String.fromCharCode(encode(ech, shift, 96, 122))
			}
			if(ech > 64 && ech <= 90) {
				return String.fromCharCode(encode(ech, shift, 64, 90))
			}
			return e;
		}).join('')
	}
}

function encode (ech, shift, min, max){
	shift = shift%26;
	let res;
		if (ech + shift > max) {
			res = (ech + shift) - max + min;
		} else if (ech + shift <= min) {
			res = max - (min - (ech + shift))
		} else res = ech + shift;
		return res;
}