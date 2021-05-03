export default function toSeconds(string) {
	const parts = string.split(':');
	let seconds = 0;
	let minutes = 1;

	while (parts.length > 0) {
		seconds += minutes * Number.parseInt(parts.pop(), 10);
		minutes *= 60;
	}

	return seconds;
}
