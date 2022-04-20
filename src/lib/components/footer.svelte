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

    :global(body.light-mode) h1{
            color: #000000;
    }

    :global(body.light-mode) h2{
            color: #1d3040;
    }

    :global(body.light-mode) h3{
            color: #1d3040;
    }

    :global(body.light-mode) hr{
        background-color: #D8B7B5;
    }

    :global(body.light-mode) p{
            color: #2c4961;
    }

    :global(body.light-mode) a{
            color: #7b4949;
    }
</style>