<script lang="ts">
	import { browser } from "$app/environment";
	import { getSlot } from "./model";
	import { parse, type Schedule } from "./parser";

	let schedule: Schedule | null;

	function load(clipboard: string) {
		schedule = parse(clipboard);
		fetch(window.location.href, {
			method: "POST",
			body: JSON.stringify({
				clipboard,
				problem: !schedule || schedule.hasProblem()
			})
		});
	}

	if (browser) {
		document.addEventListener("paste", (e) => {
			e.preventDefault();
			const data = e.clipboardData!.getData("text");
			load(data);
		});
		if (localStorage.getItem("rkv-data")) load(localStorage.getItem("rkv-data")!);
	}

	const weekdays = `MA,TI,KE,TO,PE`.split(",");
</script>

<svelte:head>
	<title>Ruokavuorot</title>
</svelte:head>

<div class="bg vbox max-w-[1286px] m-auto">
	<div class="p-5 md:p-10">
		<p class="font-bold">
			Ruokavuorilaskuri jakso 2 - <a
				class="font-bold underline"
				href="https://eliittilukio-public.s3.eu-north-1.amazonaws.com/Record_2023-04-13-11-03-16.mp4"
				>lyhyt ohjevideo</a
			>
		</p>
		<p>
			Etsi Wilman lukujärjestyksestä ensimmäinen kokonainen viikko, kopioi kaikki painamalla
			<code>CTRL + A</code> ja <code>CTRL + C</code> (tai puhelimella <code>Valitse kaikki</code>
			ja <code>Kopioi</code>) ja liitä se tänne painamalla
			<code>CTRL + V</code> (tai puhelimella <code>Liitä</code> seuraavaan kentään). Tiedot säilyy eli
			sivun voi ladata uudestaan. Jos tiedoissa on puutteita laita palauttetta
		</p>
		<input
			on:input={(e) => {
				load(e.target.value);
				e.target.value = "";
			}}
			class="w-32"
			placeholder="liitä tähän"
			type="text"
		/>
	</div>
	{#if schedule}
		<div class="bg overflow-auto py-2">
			<table class="m-auto">
				<tr>
					<th class="font-bold">Päivä</th>
					<th class="font-bold">Kurssi</th>
					<th class="font-bold">#</th>
					<th class="font-bold">Ruokailu</th>
					<th class="font-bold">Välitunti</th>
					<th class="font-bold">Oppitunti</th>
				</tr>
				{#each weekdays as wd, i}<tr>
						<td>{wd}</td>
						{#if schedule.getThirdCourse(i)}
							<td>{schedule.getThirdCourse(i)}</td>
							<td>
								{getSlot(i, schedule.getThirdCourse(i)).num}
							</td>
							<td class="whitespace-nowrap">
								{getSlot(i, schedule.getThirdCourse(i)).lunchTime}
							</td>
							<td class="whitespace-nowrap">
								{getSlot(i, schedule.getThirdCourse(i)).breakTime}
							</td>
							<td class="whitespace-nowrap">
								{getSlot(i, schedule.getThirdCourse(i)).lessonTime}
							</td>
						{:else}
							<td>hyppy</td>
							<td class="whitespace-nowrap">-</td>
							<td class="whitespace-nowrap">-</td>
							<td class="whitespace-nowrap">-</td>
							<td class="whitespace-nowrap">-</td>
						{/if}
					</tr>
				{/each}
			</table>
			<!-- <pre class="whitespace-pre-wrap">{JSON.stringify(rkv, null, 2)}</pre> -->
		</div>
	{/if}
</div>

<style lang="less">
	table tr td,
	table tr th {
		padding: 5px 20px;
	}
	code {
		white-space: nowrap;
		padding: 0px 5px;
		display: inline-block;
		background-color: var(--bg-color);
		font-family: monospace;
	}
	h1 {
		@apply text-3xl font-bold;
	}
</style>
