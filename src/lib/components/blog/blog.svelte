<script type="ts">
    import Card from './card.svelte'
    import * as myjson from './blog.json'

    console.log(myjson.blog[1].date);

    let name : string = myjson.blog[1].name;

    let date : string = myjson.blog[1].date;

    let link : string = myjson.blog[1].link;

</script>
<Card>
    <h2>{name}</h2>
	<p>{date}</p>
    <a href="{link}">some random -></a>
</Card>
<style>
   a{
    color: rgb(255, 185, 159);
    text-decoration: none;
}
h2{
    margin: 0;
    line-height: 0;
}
</style>