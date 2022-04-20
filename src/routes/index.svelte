<script>
	import TopLevelHeader from '$lib/components/topLevelHeader.svelte'
	import LowLevelHeader from '$lib/components/lowLevelHeader.svelte'
	import Footer from '$lib/components/footer.svelte'
	import Blog from '$lib/components/blog/blog.svelte'
	import About from '$lib/components/about.svelte'
	import LatestArticle from '$lib/components/blog/latestArticle.svelte'
</script>
<div class="content-wrapper">
	<TopLevelHeader/>
	<LowLevelHeader/>
	<LatestArticle/>
	<div class="info-wrapper">
		<Blog/>
		<About/>
	</div>
	<Footer/>
</div>

<style>
	.info-wrapper{
		justify-content: space-between;
		display: flex;
		flex-direction: row;
	}
	.content-wrapper{
		margin: 0 auto;
		width: 80%;
	}
	:global(body) {
		font-family: 'Montserrat', sans-serif;
		background-color: #1d3040;
	}

	:global(body.light-mode) {
		background-color: #DFCECD;
	}


</style>