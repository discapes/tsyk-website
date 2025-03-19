import { getSlot } from './model';

export function parse(clipboard: string): Schedule | null {
	const data = clipboard;

	let palkit = [...'123456'].map((n) => {
		const start = data.indexOf(` :${n}:`) + 4 + 1;
		if (start == -1 + 4 + 1) return '';
		const end = data.indexOf(' ', start);
		if (end == -1 + 4 + 1) return '';
		return data.slice(start, end);
	});
	// apple fix
	if (palkit.every((p) => p === '')) {
		palkit = [...'123456'].map((n) => {
			const start = data.indexOf(` : ${n}:`) + 5 + 1;
			if (start == -1 + 5 + 1) return '';
			const end = data.indexOf(' ', start);
			if (end == -1 + 5 + 1) return '';
			return data.slice(start, end);
		});
	}
	// nm fix
	if (palkit.every((p) => p === '')) {
		palkit = [...'123456'].map((n) => {
			const start = data.indexOf(`\n${n}:`) + 3 + 1;
			if (start == -1 + 3 + 1) return '';
			const end = data.indexOf(' ', start);
			if (end == -1 + 3 + 1) return '';
			return data.slice(start, end);
		});
	}

	if (palkit.every((p) => p === '')) return null;
	else return new Schedule(palkit);
}

export class Schedule {
	palkkiToCourse: string[];

	constructor(palkkiToCourse: string[]) {
		this.palkkiToCourse = palkkiToCourse;
	}

	hasProblem() {
		for (let i = 0; i < 5; i++) {
			if (getSlot(i, this.getThirdCourse(i)).num == 0) return true;
		}
		return false;
	}

	getThirdCourse(day: number) {
		const dayToPalkkiOfThirdLesson = [6, 4, 6, 5, 4].map((f) => f - 1);
		const palkkiOfThirdLesson = dayToPalkkiOfThirdLesson[day];
		return this.palkkiToCourse[palkkiOfThirdLesson];
	}
}
