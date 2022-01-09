<template>
<div class="home">
    <div class="home-container">
        <div class="countdown-container">
            <div class="inner-countdown-container">
                <h1>Race Day Countdown!</h1>
                <h2>Friday, June 24th 2022</h2>
                <h2 id="timer"></h2>
            </div>
        </div>
    </div>
    <div class="home-content-container mt-3">
        <div class="intro">
            <h1>The Matchstick Challenge Is Back in 2022!</h1>
            <h3>We are so excited to bring the Matchstick Challenge 5K/10K/Half Marathon back! We've missed you all! 
                Please check back soon for registration.
                This year will also mark our inaugural Kids Fun Run on the day of packet pickup, so stay tuned for more information!
            </h3>           
        </div>
        <div class="race-maps">
             <h1>Race Maps</h1>
             <div class="map-links">                 
                <router-link tag="button" class="map-link five-k" :to="{ name: 'RaceMaps', params: { race: '5k' } }">5K</router-link>
                <router-link tag="button" class="map-link ten-k" :to="{ name: 'RaceMaps', params: { race: '10k' } }">10K</router-link>
                <router-link tag="button" class="map-link half" :to="{ name: 'RaceMaps', params: { race: 'Half' } }">Half</router-link>
             </div>
        </div>
        <div class="get-involved">
             <h1>Get Involved</h1>
             <h3>Sponsorship and Volunteer forms will be available for download and submission soon.</h3>    
             <h3>If you have any questions, or would like to help, please contact us at  <a class="email " href="mailto: info@matchstickrace.com">Info@MatchStickRace.com</a></h3>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: 'Home',
        components: {
            
        },        
        data() {
            return {
                // you can just use Props for htis
                interval: null
            }
        },
        beforeMount() {
        },
        mounted() {  
            this.setTimer();
            window.scrollTo(0,0);
        },
         beforeUnmount() {
            clearInterval(this.interval);
        },
        methods: {
            setTimer: function() {
                // Set the date we're counting down to
                var countDownDate = new Date("Jun 27, 2022 19:00:00").getTime();

                // Update the count down every 1 second
                this.interval = setInterval(function() {
                    // Get today's date and time
                    var now = new Date().getTime();

                    // Find the distance between now and the count down date
                    var distance = countDownDate - now;

                    // Time calculations for days, hours, minutes and seconds
                    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                    // Display the result in the element with id="demo"
                    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
                    + minutes + "m " + seconds + "s ";

                    // If the count down is finished, write some text
                    if (distance < 0) {
                        clearInterval(this.interval);
                        document.getElementById("timer").innerHTML = "EXPIRED";
                    }
                }, 1000);
            }
        },
}   
</script>

<style scoped>
    
    .home-container {
        padding-top: 0;      
        background-image: url('https://i.imgur.com/zt39f63.jpg?1');  
        display:flex;
        flex-direction: column-reverse;
    }
    .countdown-container {
        display: flex;
        background-color: rgb(0, 75, 141,.9);
        color: white;
        justify-content: center;
        padding: 1rem 2rem;
    }
    .home-content-container {
        align-content:center;
        padding: 2rem;
    }
    .intro {
        grid-area: intro;
    }
    .race-maps {       
        grid-area: race-maps; 
        border-top: 1px black solid;
        padding-top: 2rem;
    }
    .get-involved {
        grid-area: get-involved;
        border-top: 1px black solid;
        padding-top: 2rem;
    }
    .map-links {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 1rem;
    }
    .map-link {
        margin-top: 2rem;
        display: flex !important;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        color: black;
        display:block;
        height: 4rem;
        width: 15rem;
        border-radius: 25px;
        border: 1px solid black;
        padding: 1rem 2rem;
        color: white;
    }
        .map-link:hover {
            color: black;
            text-decoration: none;
        }
    .five-k {
        background-color: rgba(187, 44, 46);;
    }
    .ten-k {
        background-color: goldenrod;
    }
    .half {
        background-color: #004b8d;
    }
    .email{
        font-size: 1.5rem;
    }
  @media (min-width: 992px) {
    .email{
        font-size: 1.75rem;
    }
    .home{
        display: grid;
        grid-template-rows: 2fr 2fr;
    }
    .home-container {
        padding-top: 40px; 
    }
    .countdown-container {
        display: flex;
    }
    .get-involved {
        padding-bottom: 2rem;
    }
    .map-link {
        margin-top: 0;
    }
    .map-links {
        margin-bottom: 0;
        padding-top: 2rem;
        padding-bottom: 2rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        place-items: center;
    }
    .home-content-container {
        display: grid;
        align-content:center;
        grid-template-columns: 1fr 3fr 1fr;
        grid-template-areas: ". intro ."
                             ". race-maps ."
                             ". get-involved .";
        grid-row-gap: 1rem;
        padding:0 ;
    }
  }
</style>