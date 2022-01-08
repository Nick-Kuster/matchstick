<template>
<div class="outer-coming-soon">
    
    <div class="coming-soon">
        <div class="inner-coming-soon">
            <header  class="mb-5">Coming Soon!</header>
            <h1>{{pageDisplayText}}</h1>
            <span class="email"><a href="mailto: info@matchstickrace.com">Info@MatchStickRace.com</a></span>
        </div>
    </div>
</div>
</template>

<script>
    export default {      
    components: {
    },
    props: ['page'],
    data() {
        return {
            // you can just use Props for htis
            pageName: this.$route.params.page,
            pageDisplayText: ''
        }
    },
    methods: {
        changePage: function() {
            switch(this.$route.params.page.toLowerCase()){
                case 'volunteer':
                    this.pageDisplayText = 'We will have volunteer forms here shortly. In the mean-time, if you would like to help please contact us via the email below.';
                    break;
                case 'sponsor':
                    this.pageDisplayText = 'We will have sponsorship forms here shortly. In the mean-time, if you would like to help please contact us via the email below.';
                    break;
                case 'donate':                
                    this.pageDisplayText = 'We will have donation forms here shortly. In the mean-time, if you would like to help please contact us via the email below.';
                    break;
                case 'register':                
                    this.pageDisplayText = 'We will have registration set up here shortly. In the mean-time, if you have any questions please contact us via the email below .';
                    break;
                default:
                        break;
            }
        }
    },
    updated() {
        this.changePage();
    },
    mounted() {
        this.changePage();        
        window.scrollTo(0,0);
    }

    }
</script>

<style scoped>
    .coming-soon {
        min-height: 35rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url('https://i.imgur.com/N1qogVX.jpg'); 
    }
    .inner-coming-soon {
        max-width: 70rem;
        text-align: center;
        background-color: rgba(255,255,255, .9);
        padding: 2rem;
    }
    .break { height: 12px;}
    .facebook {
        font-size: 3rem;
    }
    header {
        font-size: 5rem;
    }
    .email{
        font-size: 1.5rem;
    }
    
  @media (min-width: 992px) {
  
    .email{
        font-size: 1.75rem;
    }
  }
</style>