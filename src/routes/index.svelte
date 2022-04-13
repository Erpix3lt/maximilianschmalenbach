<script>
	import Info from '$lib/components/info.svelte'
	import Scene from '$lib/components/model/scene.svelte'
</script>
<h2>Hello and Welcome</h2>
<div class="content-wrapper">
	<Scene></Scene>
	<Info></Info>
</div>

<style>
	.content-wrapper{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	:global(body) {
		font-family: 'Courier New', Courier, monospace;
		background-color: #1d3040;
		color: white;
	}
</style>