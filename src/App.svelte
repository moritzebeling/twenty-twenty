<script>

	import { scrollListen } from './scroll.js';

	let height = 0;
	let position = 0;

	scrollListen(( d )=>{
		position -= d;
	});

	import Title from './Title.svelte';

	import Zero from './Zero.svelte';
	import Two from './Two.svelte';

</script>

<Title />

<svelte:window bind:innerHeight={height} />

<main class="digits">
	<div class="slot s1" style="transform: translateY({ position / 1000  }px);">
		{#each new Array(5) as i}
			<div class="digit"><Two /></div>
		{/each}
	</div>
	<div class="slot s2" style="transform: translateY({ position / 100 % height }px);">
		{#each new Array(3) as i}
			<div class="digit"><Zero /></div>
		{/each}
	</div>
	<div class="slot s3" style="transform: translateY({ position / 10 % height }px);">
		{#each new Array(3) as i}
			<div class="digit"><Two /></div>
		{/each}
	</div>
	<div class="slot s4" style="transform: translateY({ position % height }px);">
		{#each new Array(3) as i}
			<div class="digit"><Zero /></div>
		{/each}
	</div>
</main>

<style>

	main {
		text-align: center;
		font-size: 50vw;
		font-weight: bold;
	}

	.slot {
		position: fixed;
		top: -100vh;
		width: 25%;
		height: 300vh;
		overflow: hidden;
	}

	.s1 { left: 0; }
	.s2 { left: 25vw; }
	.s3 { left: 50vw; }
	.s4 { left: 75vw; }

	.digit {
		font: inherit;
		height: 100vh;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10vh 1rem;
	}

	@media( max-height: 30vw ){
		main {
			font-size: 130vh;
		}
	}

</style>
