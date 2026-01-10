import { API_URL } from "@/lib/def";
import type { LayoutLoad, LayoutLoadEvent } from "./$types";

export const load = (async ({ fetch }: LayoutLoadEvent) => {
	const me = await fetch(API_URL + "/me", {});
	if (me.status === 200)
		return {
			me: me.json(),
		};
}) satisfies LayoutLoad;
