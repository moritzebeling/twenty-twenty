<div class="digit two">
	<div class="top crop">
		<span class="top"></span>
	</div>
	<div class="right crop">
		<span class="top"></span>
	</div>
	<div class="left crop">
		<span class="top"></span>
	</div>
	<span class="bottom"></span>
</div>

<style lang="scss">

    .digit {
		position: relative;
		flex: 1;
		width: 100%;
		height: 100%;
	}

    span {
		display: block;
		position: absolute;
		box-sizing: border-box;
		border: 80px solid #fff;
		border-radius: 100px;
		width: 100%;
        height: 100%;
	}

	.crop {
		position: absolute;
		width: 100%;
		height: 50%;
		overflow: hidden;
	}
	.crop span {
		width: 100%;
		height: 400px;
	}

	.crop.top {
		height: 25%;
		width: 50%;
	}
	.crop.top span {
		width: 200%;
		height: 200%;
	}

	.crop.right {
		height: 50%;
		left: 50%;
		width: 50%;
	}
	.crop.right span {
		bottom: 0;
		height: 100%;
		width: 200%;
		left: -100%;
	}

	.crop.left {
		top: 50%;
		width: 50%;
		height: 50%;
	}
	.crop.left span {
		width: 200%;
		height: 200%;
	}

	.two .bottom {
		border-top: none;
		border-radius: 0;
		bottom: 0;
		height: 25%;
	}

</style>
