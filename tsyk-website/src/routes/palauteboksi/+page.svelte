<script lang="ts">
	import { API_URL } from "@/lib/def";

	let feedbackModal = true;
	async function sendFeedback(e: SubmitEvent) {
		const form = e.target as HTMLFormElement;
		const text = form.text.value as string;

		await fetch(API_URL + "/send_feedback", {
			method: "POST",
			body: JSON.stringify({
				text
			}),
			headers: {
				"Content-Type": "application/json"
			}
		});
		form.reset();
		alert("Kiitti palautteesta!");
	}
</script>

<form class="m-auto bg max-w-md vbox p-5" on:submit|preventDefault={sendFeedback}>
	<div class="hbox items-center gap-x-5 gap-y-0">
		<h3>Palauteboksi</h3>
		<input class="btnmax grow" value="Lähetä" type="submit" />
	</div>
	<textarea required class="resize-y w-full" name="text" rows="4" />
</form>
