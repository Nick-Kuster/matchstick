<template>
<div class="outer-coming-soon">
    
    <div class="coming-soon">
        <div class="inner-coming-soon">
            <header  class="mb-5">Coming Soon!</header>
            <h1>We are looking forward to the 2022 Matchstick race!</h1>
            <h1>While we get things set up here, you can keep up-to-date on our Facebook page:</h1>
            <a class="btn btn-primary btn-social " href="https://www.facebook.com/MatchStickChallenge"><span class="fab fa-facebook-f facebook "></span></a>
        </div>
    </div>
</div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .coming-soon {
        min-height: 35rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url('../assets/img/matchstick/Runners.jpg');
    }
    .inner-coming-soon {
        max-width: 70rem;
        text-align: center;
    }
    .break { height: 12px;}
    .facebook {
        font-size: 3rem;
    }
    header {
        font-size: 5rem;
    }
</style>