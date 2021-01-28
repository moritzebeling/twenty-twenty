<script>

	const year = '2020';

</script>

<main>
	<ul>
		{#each year.split('') as digit, x}
			<li class="slot s{x}">
				{#each new Array(10) as y}
					<div><span>{digit}</span></div>
				{/each}
			</li>
		{/each}
	</ul>
</main>

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
		overflow-y: scroll;

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

</style>
