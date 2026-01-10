<script lang="ts">
	import "./app.less";
	import "@fortawesome/fontawesome-free/css/all.min.css";
	import Header from "./Header.svelte";
</script>

<svelte:head>
	<title>TSYKin OPKHn sivusto</title>
	<meta name="description" content="Lukee otsikossa ^^^" />
</svelte:head>

<div class="min-h-screen flex-col flex">
	<Header />
	<main class="grow m-5 sm:m-10 sm:mb-5">
		<slot />
	</main>
	<footer class="text-center">© {new Date().getFullYear()} MT & OPKH</footer>
</div>
