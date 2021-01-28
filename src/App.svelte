<script>

	import { mouseWheelListen } from './mouse-wheel.js';

	const year = '2020';

	let height = 0;
	let position = 0;
	let delta = 0;

	mouseWheelListen(( d )=>{
    	position -= d;
    	delta = d;
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

<aside>{position} / {delta} / {height}</aside>

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

	aside {
		position: fixed;
		bottom: 1rem;
		left: 1rem;
		padding: 0.5rem;
		background-color: #333;
		z-index: 10;
	}

</style>
