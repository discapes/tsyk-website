<script lang="ts">
	import { page } from "$app/stores";
	import { API_URL } from "@/lib/def";
	import { invalidateAll } from "$app/navigation";
	import hamIcon from "@fortawesome/fontawesome-free/svgs/solid/list-ul.svg";

	async function logout() {
		await fetch(API_URL + "/logout", {
			method: "POST",
		});
		invalidateAll();
	}

	const navItems = [
		{
			name: "Home",
			path: "/",
		},
		{
			name: "Oispa Eliitti",
			path: "/oispaeliitti",
		},
		// {
		// 	name: "Ruokavuorot",
		// 	path: "/ruokavuorot",
		// },
		// {
		// 	name: "Palauteboksi",
		// 	path: "/palauteboksi",
		// },
		// {
		// 	name: "Ilmoitukset p. 7.12.",
		// 	path: "/ilmoitukset",
		// },
	];

	let hamOpen = false;
</script>

<header class="bg">
	<div class="hidden sm:flex justify-between">
		<div class="flex">
			{#each navItems as navItem}
				{#if $page.url.pathname === navItem.path}
					<button class="text-gray-500 p-2" disabled>{navItem.name}</button>
				{:else}
					<a class="btn p-2" href={navItem.path}>{navItem.name}</a>{/if}
			{/each}
		</div>
		<div class="flex">
			{#if $page.data.me}
				<div class="center p-2 bg">Logged in as {$page.data.me.username}</div>
				<button on:click={logout}> Log out </button>
			{:else}
				<a class="btn px-5" href="/login">Kirjaudu</a>
				<a class="btn px-5" href="/register">Luo tili</a>
			{/if}
		</div>
	</div>

	<div class="flex-col flex sm:hidden">
		<div class="flex">
			{#if $page.data.me}
				<div class="grow center p-2 bg">Logged in as {$page.data.me.username}</div>
				<button class="bg grow" on:click={logout}> Log out </button>
			{:else}
				<a class="btn grow px-5" href="/login">Kirjaudu</a>
				<a class="btn grow px-5" href="/register">Luo tili</a>
				<div class="grow-[4]" />
			{/if}
			<button on:click={() => (hamOpen = !hamOpen)}>
				<img src={hamIcon} class="h-7 m-1 invert" alt="hamburger" />
			</button>
		</div>

		{#if hamOpen}
			<nav class="flex flex-col">
				{#each navItems as navItem}
					{#if $page.url.pathname === navItem.path}
						<button class="text-gray-500 p-2" disabled>{navItem.name}</button>
					{:else}
						<a class="btn p-2" href={navItem.path}>{navItem.name}</a>{/if}
				{/each}
			</nav>
		{/if}
	</div>
</header>

<!--
<header class="bg flex justify-between">
	<div class="w-full" />
	<nav class="w-full">

		<ul>
			{#each navItems as navItem}
				<li aria-current={$page.url.pathname === navItem.path ? "page" : undefined}>
					<a href={navItem.path}>{navItem.name}</a>
				</li>
			{/each}
		</ul>
	</nav>
	<div class="flex gap-3 w-full justify-end items-center p-1">
		{#if $page.data.me}
			<div class="bg p-1">Logged in as {$page.data.me.username}</div>
			<button class="button" on:click={logout}> Log out </button>
		{:else}
			<a class="button" href="/login">Kirjaudu</a>
			<a class="button" href="/register">Luo tili</a>
		{/if}
	</div>
</header>
-->

<style>
	/*
	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}
*/
	a[aria-current="page"] {
		color: gray;
	}
	/*
	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		text-shadow: #fff 1px 0 10px;
	}*/
</style>
