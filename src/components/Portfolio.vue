<template>
 <section class="page-section bg-light" id="portfolio">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Portfolio</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row">
                     <div class="col-lg-4 col-sm-6 mb-4" v-for="(obj,key) in portfolio" :key="key">
                        <h1><a class="btn btn-primary btn-social fb-link" href="https://www.facebook.com/MatchStickChallenge"><span class="fab fa-facebook-f facebook"></span></a></h1>
                    </div>
                </div>
            </div>
        </section>
</template>

 <script>
     export default {
         data: () => ({
             portfolio: [
                 {
                     img: '',
                     caption: 'Explore',
                     title: 'Graphic Design'
                 },
                 {
                     img: '',
                     caption: 'Explore',
                     title: 'Graphic Design'
                 },
                 {
                     img: '',
                     caption: 'Explore',
                     title: 'Graphic Design'
                 },
                 {
                     img: '',
                     caption: 'Explore',
                     title: 'Graphic Design'
                 },
                 {
                     img: '',
                     caption: 'Explore',
                     title: 'Graphic Design'
                 },
                 {
                     img: '',
                     caption: 'Explore',
                     title: 'Graphic Design'
                 },
             ]
         })
     }
 </script>

 <style scoped>
 
 </style>