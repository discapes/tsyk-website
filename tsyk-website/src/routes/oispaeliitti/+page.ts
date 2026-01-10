import { API_URL } from "@/lib/def";
import type { PageLoad } from "./$types";

export const load = (async ({ fetch }) => {
	return {
		top: fetch(API_URL + "/list_users")
			.then((res) => res.json())
			.catch(() => []),
	};
}) satisfies PageLoad;
