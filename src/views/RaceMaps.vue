<template>
  <div class="race-container">
    <div class="race-header">
        <div class="race-title-container">
            <div class="race-title">Race Maps</div>
            <div class="race-sub-title">Click on your race below to see more!</div>
        </div>
        <div class="race-select">
            <router-link tag="button" class="race-link five-k" :to="{ name: 'RaceMaps', params: { race: '5k' } }">5K</router-link>
            <router-link tag="button" class="race-link ten-k" :to="{ name: 'RaceMaps', params: { race: '10k' } }">10K</router-link>
            <router-link tag="button" class="race-link half" :to="{ name: 'RaceMaps', params: { race: 'Half' } }">Half</router-link>
        </div>
    </div>
    <div class="race-details">
        <h1 class="mt-5 mb-5">{{ race }}  <span v-if="race.toLowerCase() === 'half'">Marathon</span> Map</h1>
        <iframe class="alltrails" :src="raceMapUrl"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="AllTrails: Trail Guides and Maps for Hiking, Camping, and Running"></iframe>
    </div>          
 </div>
</template>

<script>
export default {        
    components: {
        // FiveK,
        // TenK,
        // Half
    },
    props: ['race'],
    data() {
        return {
            // you can just use Props for htis
            raceName: this.$route.params.race,
            raceMapUrl: ''
        }
    },
    methods: {
        changeMap: function() {
            switch(this.$route.params.race.toLowerCase()){
                case '5k':
                    this.raceMapUrl = 'https://www.alltrails.com/widget/map/matchstick-5k-7022294?hideName=true&u=i';
                    break;
                case '10k':
                    this.raceMapUrl = 'https://www.alltrails.com/widget/map/map-january-4-2022-6-40-pm-398024c?hideName=true&u=i';
                    break;
                case 'half':                
                    this.raceMapUrl = 'https://www.alltrails.com/widget/map/map-january-3-2022-5-44-pm-14ad095??hideName=true&u=i';
                    break;
                default:
                        break;
        }
        }
    },
    updated() {
        this.changeMap();
    },
    mounted() {
        this.changeMap();
    }
}
</script>

<style scoped>
    .alltrails {
        justify-self:center;
        height: 100vh; 
        width: 90%;
    }
    .race-container {
        display: grid;
        grid-template-columns: 1fr ;
        min-height: 80vh;
    }
    .race-header {
        display: grid;    
        background-image: url('../assets/img/matchstick/Runners-solid.jpg');    
        grid-template-columns: 1fr;
        /* min-height: 75vh; */
        grid-template-rows: repeat(2, 1fr);
    }
    .race-title-container {
        /* grid-column: 1 / span 2; */
        display: grid;
        place-content:center;
        background: rgba(255,255,255,0.7); 
    }
    .race-title {
        font-size: 5rem;
    }
    .race-sub-title {
        font-size: 2rem;
    }
    .race-select {
        background: rgba(255,255,255,0.7); 
        display: grid;
        place-items: center;                
        grid-template-columns: repeat(2, 1fr );
        grid-template-rows: 1fr;
        border-bottom: 1px black solid;
        padding-bottom: 2rem;
    }
    .race-select .race-link:last-child {
        grid-column: 1 / span 2;        
    }
    .race-details{
        display:grid;
        justify-content:center;
        background: #004b8d;
        color: white;
        grid-template-columns: 1fr;
    }
    .race-link {
        display: flex !important;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        color: black;
        display:block;
        height: 10rem;
        width: 10rem;
        border-radius: 50%;
        border: 1px solid black;
        padding: 1rem 2rem;
        color: white;
    }
        .race-link:hover {
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
    
  @media (min-width: 992px) {
    .race-title-container {        
        grid-column: 2;
    }
    .race-header {
        display: grid;        
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: .5fr .25fr;
        padding-top: 5rem;
    }
    .race-select {
        display: grid;
        place-items: center;        
        grid-column: 2;
        grid-row: 2;
        grid-template-columns: repeat(3, 1fr );
        grid-template-rows: 1fr;
        border-bottom: 1px black solid;
    }
    .race-select .race-link:last-child {
        grid-column: 3;        
    }
    .alltrails {
        width: 75%;
        height: 90vh; 
    }
  }
</style>