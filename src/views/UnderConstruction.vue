<template>
<div class="outer-coming-soon">

    <div class="coming-soon">
        <div class="inner-coming-soon">
            <p class="mb-5">Coming Soon!</p>
            <hr class="break"/>
            <h1>We are looking forward to the 2022 Matchstick race!</h1>
            <h1>While we get things set up here, you can keep up-to-date on our Facebook page:</h1>
            <h1><a class="btn btn-primary btn-social fb-link" href="https://www.facebook.com/MatchStickChallenge"><i class="fab fa-facebook-f facebook"></i></a></h1>
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
        position: relative; 
        min-height: 35rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
        .coming-soon::before {
            content: "";
            background-image: url('https://scontent-ort2-2.xx.fbcdn.net/v/t31.18172-8/28071236_2062077487404765_685366197680625717_o.jpg?_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_ohc=XhSl12trIXsAX9fzlOf&_nc_oc=AQlBciSM_CAfjiO3B-2yqSaOPS_QIqFca3jPMXwvx_i7eVQsU-YfijcoMFbxth2hNKE&_nc_ht=scontent-ort2-2.xx&oh=00_AT9Vpyea3YWPKs1-Bl0A90wtkw7ZNgsTuM3ByI9hFP7LpQ&oe=61E73B6F');
            /* opacity: .20; */
            filter: opacity(20%);
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
        }
    .inner-coming-soon {
        position: relative;
        max-width: 70rem;
        font-size: 10rem;
        line-height: 0.9;
        text-align: center;
    }
    .break { height: 12px;}
    .facebook {
        font-size: 3rem;
    }
    .fb-link {
        border-radius: 100;
    }
</style>