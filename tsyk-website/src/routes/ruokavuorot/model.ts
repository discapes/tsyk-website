import { dayToSlotToCourses, slotToBreakTime, slotToLessonTime, slotToLunchTime } from "./data";

export function getSlot(day: number, course: string) {
	const slotToCourses = dayToSlotToCourses[day];
	const slot = slotToCourses.findIndex((courses) => courses.includes(course));
	return new Slot(slot);
}

export class Slot {
	lunchTime: string;
	breakTime: string;
	lessonTime: string;
	num: number;

	constructor(index: number) {
		this.num = index + 1;
		this.lunchTime = slotToLunchTime[index];
		this.breakTime = slotToBreakTime[index];
		this.lessonTime = slotToLessonTime[index];
	}
}
