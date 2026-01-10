<script lang="ts">
	import GameGrid from "./GameGrid.svelte";
	import type { PageData } from "./$types";
	import { invalidate } from "$app/navigation";
	import { API_URL } from "@/lib/def";
	import { onDestroy, onMount } from "svelte";
	import { confetti } from "@neoconfetti/svelte";

	export let data: PageData;

	let moti: number;
	let score: number;
	let motiCost: number;
	let controller: {
		reset: () => void;
		tryKoeviikko: () => boolean;
	};

	let highscore: number | null = data.me?.score;
	let won = false;
	let interval: number;
	let highscoreUpdateTimeout: number | null = null;

	function onLoss() {
		setTimeout(() => {
			alert("Hävisit!");
			controller.reset();
		}, 1000);
	}
	function onWin() {
		won = true;
	}

	async function uploadHighscore() {
		highscoreUpdateTimeout = null;
		await fetch(API_URL + "/update_score", {
			body: JSON.stringify({
				newscore: highscore
			}),
			headers: {
				"Content-Type": "application/json"
			},
			method: "POST"
		});
	}

	async function onAddScore() {
		if (highscore != null && score > highscore) {
			highscore = score;
			if (highscoreUpdateTimeout === null) {
				highscoreUpdateTimeout = setTimeout(uploadHighscore, 3000);
			}
		}
	}

	onMount(() => {
		interval = setInterval(() => invalidate(API_URL + "/list_users"), 1000);
	});
	onDestroy(() => {
		clearInterval(interval);
	});
</script>

{#if won}
	<div
		style="position: absolute; left: 50%; top: 30%"
		use:confetti={{
			force: 0.7,
			stageWidth: window.innerWidth,
			stageHeight: window.innerHeight,
			colors: ["#ff3e00", "#40b3ff", "#676778"]
		}}
	/>
{/if}

<div class="flex gap-3 justify-center flex-col lg:flex-row items-center lg:items-stretch">
	<div class="vbox hidden lg:flex justify-start w-[200px]">
		<div class="bg p-3">
			{#each data.top as p}
				<p class="">{p.username.slice(0, 20)}: {p.score}</p>
			{/each}
		</div>
	</div>
	<GameGrid
		on:loss
		bind:moti
		bind:motiCost
		bind:score
		bind:controller
		{onLoss}
		{onWin}
		{onAddScore}
	/>
	<div class="flex lg:contents justify-center flex-wrap gap-5">
		<div class="vbox flex lg:hidden justify-start w-[200px]">
			<div class="bg p-3">
				{#each data.top as p}
					<p class="">{p.username.slice(0, 20)}: {p.score}</p>
				{/each}
			</div>
		</div>
		<div class="vbox justify-start w-[200px]">
			<div class="bg p-3">
				<div>Moti: {moti}</div>
				<div>Score: {score}</div>
				{#if highscore != null && data.me}
					<div>Highscore: {highscore}</div>
				{/if}
			</div>
			<button
				class="btnmax"
				disabled={moti < motiCost}
				class:bg-lime-800={moti >= motiCost}
				on:click={controller.tryKoeviikko}
			>
				Koeviikko ({motiCost})
			</button>
			<a class="btn btnmax" href="/oispaeliitti/info"> Info </a>
		</div>
	</div>
</div>
