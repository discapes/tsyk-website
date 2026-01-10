<script lang="ts">
	import type { PageData } from "./$types";
	import InstagramEmbed from "./InstagramEmbed.svelte";

	export let data: PageData;

	const links = [
		{
			name: "Wilma",
			logo: "wilma.png",
			url: "https://turku.inschool.fi/",
		},
		{
			name: "TSYKin blogi",
			logo: "wordpress.png",
			url: "https://blog.edu.turku.fi/tsyk/",
		},
		{
			name: "Office 365",
			logo: "office.png",
			url: "https://login.microsoftonline.com/?whr=edu.turku.fi",
		},
		{
			name: "Moodle",
			logo: "moodle.png",
			url: "https://lukio.edu.turku.fi/",
		},
		{
			name: "Viikon ruuat",
			logo: "kaarea.png",
			url: "https://menu.kaarea.fi/KaareaAromieMenus/FI/Default/Kaarea/TSYKLU/Restaurant.aspx",
		},
		{
			name: "Otava",
			logo: "otava.svg",
			url: "https://opiskelija.otava.fi/materiaalit/omat",
		},
		{
			name: "Studeo",
			logo: "studeo.svg",
			url: "https://app.studeo.fi/app/home",
		},
		{
			name: "Sanomapro",
			logo: "sanomapro.png",
			url: "https://kampus.sanomapro.fi/",
		},
		{
			name: "Edita",
			logo: "edita.png",
			url: "https://shop.edita.fi/digiedita/omat-tuotteet",
		},
	];
</script>

<div class="bg vbox p-5 gap-5 sm:p-10 sm:gap-10 max-w-[1286px] m-auto">
	<div class="hbox items-center flex-wrap p-3 sm:gap-10">
		<img class="inline-block h-[100px]" alt="tsyk logo" src="/favicon.png" />
		<!-- so flex doesn't wrap too early -->
		<div class="basis-[230px] grow">
			<h2>TSYKin opiskelijakunnan sivusto</h2>
			<h4 class="mb-0 text-xl">
				Linkkejä, lounasta ja <i>Oispa Eliitti</i>.
			</h4>
			<p class="mt-5 text-lg">
				Ruokavuorolaskuria ei ole päivitetty koska sen tekijä valmistui, mutta jos joku nykyinen
				opiskelija osaa ohjelmoida edes hieman ja haluu saavuttaa mainetta ja kunniaa, tehkää Issue
				tai PR
				<a
					href="https://github.com/discapes/eliittilukio-frontend"
					class="underline"
					target="_blank">tänne</a
				>
			</p>
		</div>
		<div class="bg-stone-100 p-5 text-stone-900 flex flex-col gap-3">
			<span class="text-lg font-bold">Lounas: {data.lounas}</span>
			<span class="text-lg font-bold">Kasvislounas: {data.kasvisLounas}</span>
		</div>
	</div>
	<div class="flex flex-wrap gap-5">
		{#each links as link}
			<a
				class="bg-white text-black h-32 w-32 flex flex-col items-center p-3"
				target="_blank"
				href={link.url}
			>
				{link.name}
				<div class="linkimage m-2" style="background-image: url('/logos/{link.logo}');" /></a
			>
		{/each}
	</div>
	<div class="flex justify-evenly flex-wrap gap-3">
		<InstagramEmbed username="tsykopkh" />
		<InstagramEmbed username="tsykinlukio" />
	</div>
</div>

<style lang="less">
	.linkimage {
		width: 60px;
		height: 60px;
		display: block;
		background-position: center center;
		background-color: white;
		background-size: contain;
		background-repeat: no-repeat;
	}
</style>
