<script type="ts">
    import Post from './post.svelte'
    import blogAsJSON from './blog.json'
    import { readingTime } from 'reading-time-estimator';

</script>

    <div class="post-wrapper">
        <div class="section-header">
            <p>BLOG</p>
            <hr>
        </div>
        {#each blogAsJSON as post}
        <Post>
            <h1>{post.topic}</h1>
            <p class="description">{post.description}</p>
            <div class="info-wrapper">
                <p class="date">{post.date}</p>
                <p class="read-time">{readingTime(post.description).text}</p>
            </div>
        </Post>
        {/each}
    </div>



<style>
.post-wrapper{
    width: 60%;
}
.info-wrapper{
    display: flex;
    flex-direction: row;
}
h1{
    margin: 0;
    color: white;
}
.description{
    color: lightgray;
    font-size: 1.2em;
}
.date{
    padding-right: 1em;
    color: #FF9C9C;
    font-size: .8em;

}

.section-header{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.section-header p {
    color: lightgray;
    padding-right: 1em;
}

hr { 
    background-color: #2F5371; height: 1px; 
    border: 0;
    width: 100%;
}

.read-time{
    color: lightslategrey;
    font-size: .8em;
}
</style>