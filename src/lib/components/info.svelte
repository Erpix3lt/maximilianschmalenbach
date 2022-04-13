<script>
let currentYear = new Date().getFullYear();
</script>

<div class="content-wrapper">
    <div class="about-wrapper">
        <p>Currently studying at Th-Koeln, Code and Context. 
            Interested in design, photography, architecture. <a href="">view projects</a>
    </div>
    <div class="social-wrapper">
        <a href="">maximilian.schmalenbach@gmail.com</a> |
        <a href="instragram.com">instragram</a>
        <a href="github.com">github</a>
    </div>
    <div class="copyright-wrapper">
        © {currentYear} Maximilian Schmalenbach
    </div>
</div>
<style>
    .content-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .about-wrapper{
        width: 40%;
        text-align: center;
    }
   
    .about-wrapper a{
        color: rgb(255, 185, 159);
        text-decoration: none;
    }

    .social-wrapper a{
        color: grey;
        text-decoration: none;
    }
</style>