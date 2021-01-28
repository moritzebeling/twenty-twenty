<script>

	const text = 'TwentyTwenty';
	let title = text;

	let i = 0;
	setInterval(() => {

		title = title.substring(1,text.length) + text.substring(i,i+1);

		i++;
		i %= text.length;
	}, 250);

</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
