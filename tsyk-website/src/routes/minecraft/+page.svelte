<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<div class="center">
	<div class="bg bg-stone-900/90 p-5 max-w-xl flex flex-col gap-3">
		<h2 class="m-0">mc.eliittilukio.fi</h2>
		<div class="p-2 bg">
			{#if data.offline}
				<p>Server is offline :(</p>
			{:else}
				<div class="flex flex-col">
					<span>Server is online!</span>
					<a class="text-blue-300" href="mcmap/">Live map</a>
					<span>Version: {data.version}</span>
					<span>Players: {data.players.online} / {data.players.max}</span>
				</div>

				<div class="flex flex-col text-stone-200 p-3">
					{#if data.players.sample}
						{#each data.players.sample as player}
							<span>{player.name}</span>
						{/each}
					{/if}
				</div>
			{/if}
		</div>
		<p>
			Palvelimelle voi liittyä lähettämällä oma pelinimi osoitteeseen
			<i>minecraft@eliittilukio.fi</i> omasta @edu.turku.fi-osoitteesta. Pyynnöt pyritään prosessoimaan
			päivän sisällä.
		</p>
		<div>Säännöt: Älä griiffaa, pölli arkuista, cheattaa tai häiritse muita.</div>
		<div>
			Info:
			<ul class="list-disc ml-5">
				<li>Käytettävät komennot löytyy /help-komennolla</li>
				<li>Vain yksi henkilö riittää nukkumaan</li>
				<li>Pvp:n voi laittaa päälle /togglepvp-komennolla</li>
				<li>Ääri on toistaiseksi pois</li>
				<li>Maailma on toistaiseksi 5000x5000</li>
				<li>
					<a
						class="text-blue-300"
						href="https://www.curseforge.com/minecraft/mc-mods/simple-voice-chat"
						>SimpleVoiceChat-modilla</a
					> voi puhua viereisille pelaajille
				</li>
				<li>
					Valituksia ja ehdotuksia voi laittaa joko palautteeseen tai sähköpostiin
					minecraft@eliittilukio.fi
				</li>
			</ul>
		</div>
	</div>
</div>
