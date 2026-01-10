<script lang="ts">
	import { page } from "$app/stores";
	import { invalidateAll, goto } from "$app/navigation";
	import { API_URL } from "@/lib/def";

	let message: string | undefined;

	async function onSubmit(e: SubmitEvent) {
		const form = e.target as HTMLFormElement;
		const username = form.username.value as string;
		const password = form.password.value as string;

		if (username.length && password.length) {
			const res = await fetch(API_URL + "/login", {
				body: JSON.stringify({
					username,
					password
				}),
				headers: {
					"Content-Type": "application/json"
				},
				method: "POST"
			});
			if (res.ok) {
				await invalidateAll();
				await goto("/");
			} else {
				message = await res.text();
			}
		}
	}
</script>

<div class="flex flex-col items-center m-10 p-10 gap-5">
	<form class="flex bg p-5 flex-col gap-4 w-64" on:submit|preventDefault={onSubmit}>
		<h3>Kirjaudu</h3>
		{#if message}
			<p>{message}</p>
		{/if}
		<div class="flex flex-col">
			<label for="username">Käyttäjänimi:</label>
			<input
				type="text"
				id="username"
				class="w-full"
				placeholder="-"
				name="username"
				autocomplete="username"
			/>
		</div>
		<div class="flex flex-col">
			<label for="password">Salasana:</label>
			<input
				type="password"
				id="password"
				class="w-full"
				placeholder="-"
				name="password"
				autocomplete="current-password"
			/>
		</div>
		<input class="btnfull" type="submit" value="Kirjaudu" />
	</form>
</div>

<style lang="less">
</style>
