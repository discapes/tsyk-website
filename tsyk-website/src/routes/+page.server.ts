const menuUrl =
	"https://menu.kaarea.fi/KaareaAromieMenus/FI/Default/Kaarea/TSYKLU/Rss.aspx?Id=456d0033-1d0b-4926-b1b3-7fd105e1ae6a&DateMode=0";

import type { PageServerLoad } from "./$types.js";
export const load: PageServerLoad = async ({ params }) => {
	try {
		const rss = await fetch(menuUrl).then((res) => res.text());
		const lounas = rss.match(/Lounas\s*:\s*(.*?) \(/)?.[1];
		const kasvisLounas = rss.match(/Kasvislounas\s*:\s*(.*?) \(/)?.[1];
		if (!lounas?.length || !kasvisLounas?.length) throw new Error();
		return {
			lounas,
			kasvisLounas,
		};
	} catch (e) {
		return {
			lounas: "",
			kasvisLounas: "",
		};
	}
};
