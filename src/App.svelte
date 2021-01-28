<script>

	const year = '2020';

	let scrollPos = 0;

	import { mouseWheelListen } from './mouse-wheel.js';

	mouseWheelListen(function(dx, dy) {
      scrollPos = dy
    }, true);

</script>

<main class="digits">
	<ul>
		{#each year.split('') as digit, x}
			<li class="slot s{x}">
				{#each new Array(3) as y}
					<div><span>{digit}</span></div>
				{/each}
			</li>
		{/each}
	</ul>
</main>

<aside>{scrollPos}</aside>

<style>

	main {
		height: 100vh;
		text-align: center;
		color: #fff;
	}
	ul {
		height: 100vh;
		display: flex;
		list-style: none;
		padding: 0;
	}
	li {
		flex: 1 1 25%;
		height: 100vh;
		overflow-y: hidden;

	}
	li > div {
		display: block;
		border: 1px solid #f00;
		padding: 1rem;
		height: 100%;
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
