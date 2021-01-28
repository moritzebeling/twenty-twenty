<script>

	import { mouseWheelListen } from './mouse-wheel.js';

	let height = 0;
	let position = 0;

	mouseWheelListen(( d )=>{
		position -= d;
    });

</script>

<svelte:window bind:innerHeight={height} />

<main class="digits">
	<div class="slot s1" style="transform: translateY({ position / 1000  }px);">
		{#each new Array(5) as y}
			<div>
				<span>2</span>
			</div>
		{/each}
	</div>
	<div class="slot s2" style="transform: translateY({ position / 100 % height }px);">
		{#each new Array(3) as y}
			<div>
				<span>0</span>
			</div>
		{/each}
	</div>
	<div class="slot s3" style="transform: translateY({ position / 10 % height }px);">
		{#each new Array(3) as y}
			<div>
				<span>2</span>
			</div>
		{/each}
	</div>
	<div class="slot s4" style="transform: translateY({ position % height  }px);">
		{#each new Array(3) as y}
			<div>
				<span>0</span>
			</div>
		{/each}
	</div>
</main>

<style>

	.slot {
		position: fixed;
		top: -100vh;
		width: 25%;
		height: 300vh;
		overflow-y: hidden;
	}
	.s1 { left: 0; }
	.s2 { left: 25vw; }
	.s3 { left: 50vw; }
	.s4 { left: 75vw; }

	.slot > div {
		height: 100vh;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;
	}

</style>
