export default function toSeconds(string) {
	const parts = string.split(':');
	let seconds = 0;
	let mininutes = 1;

	while (parts.length > 0) {
		seconds += mininutes * Number.parseInt(parts.pop(), 10);
		mininutes *= 60;
	}

	return seconds;
}
