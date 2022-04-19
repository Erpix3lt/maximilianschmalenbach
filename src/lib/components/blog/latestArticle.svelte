<script type="ts">
    import Post from './post.svelte'
    import blogAsJSON from './blog.json'
    import { readingTime } from 'reading-time-estimator';



</script>
<div class="post-wrapper">
    <Post>
        <p class="date">LATEST {blogAsJSON[0].date}</p>
        <h1>{blogAsJSON[0].topic}</h1>
        <p class="description">{blogAsJSON[0].description}</p>
        <div class="info-wrapper">
            <p class="read-time">{readingTime(blogAsJSON[0].description).text}</p>
        </div>
    </Post>
</div>
<style>
.post-wrapper{
    padding-top: 5em;
    padding-bottom: 5em;

    width: 80%;
}
.info-wrapper{
    display: flex;
    flex-direction: row;
}
h1{
    font-size: 5em;
    margin: 0;
    color: white;
}
.description{
    color: lightgray;
    font-size: 2em;
}
.date{
    padding-right: 1em;
    color: #FF9C9C;
    font-size: 1.2em;

}

.read-time{
    color: lightslategrey;
    font-size: .8em;
}
</style>