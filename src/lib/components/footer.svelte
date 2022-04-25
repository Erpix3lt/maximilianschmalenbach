<script>
let currentYear = new Date().getFullYear();
</script>

<hr>
<div class="content-wrapper">
    <div class="copyright-wrapper">
        <p>© {currentYear} Maximilian Schmalenbach</p>
    </div>
    <p>✌🏼</p>
</div>
<style>
    .content-wrapper{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    hr { background-color: #2F5371; height: 1px; border: 0; }
    div{
        color: lightgray;
        font-size: .9em;
    }

    :global(body.light-mode) hr{
        background-color: #b99b99;
    }

    :global(body.light-mode) p{
            color: #2c4961;
    }

</style>