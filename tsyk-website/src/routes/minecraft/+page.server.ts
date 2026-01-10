import { MinecraftServer, type PingResponse } from "mcping-js"
import type { PageServerLoad } from "./$types.js";

export const load: PageServerLoad = async ({ params }) => {
	const server = new MinecraftServer('mc.eliittilukio.fi');
	return await new Promise<PingResponse>((res, rej) =>
		server.ping(1000, 764, (err, data) =>
			err || !data ? rej(err) : res(data!)
		)).then(info => ({
			version: info.version.name,
			players: info.players
		})).catch(() => ({ offline: true } as const));

}