<script lang="ts">
	import { page } from "$app/stores";
	import { invalidateAll, goto } from "$app/navigation";
	import { API_URL } from "@/lib/def";

	let message: string | undefined;

	async function onSubmit(e: SubmitEvent) {
		const form = e.target as HTMLFormElement;
		const username = form.username.value as string;
		const password = form.password.value as string;
		const email = form.email.value as string;

		if (username.length && password.length && email.length) {
			const res = await fetch(API_URL + "/create_user", {
				body: JSON.stringify({
					username,
					email,
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
		return false;
	}
</script>

<div class="flex flex-col items-center m-10 p-10 gap-5">
	<form class="flex bg p-5 flex-col gap-4 w-64" on:submit|preventDefault={onSubmit}>
		<h3>Luo tili</h3>
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
			<label for="email">Sähköposti:</label>
			<input
				type="email"
				id="email"
				class="w-full"
				placeholder="ab1234@edu.turku.fi"
				name="email"
				autocomplete="email"
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
		<input class="btnfull" type="submit" value="Luo tili" />
	</form>
</div>

<style lang="less">
	input {
		outline: none;
	}
</style>
