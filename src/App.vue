<template>

        <Nav id="navbar-desktop"></Nav>
        <MobileNav id="navbar-mobile"></MobileNav>
        <Header></Header>
        <router-view class="router-view"/>
        <Footer></Footer>            
</template>

<script>
import Nav from './components/Nav.vue'
import MobileNav from './components/MobileNav.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Nav,
    MobileNav,
    Header,
    Footer,
  },
  methods: {
      redirect(){
          this.$router.push({name: 'Home'})
        },
      back(){
          this.$router.go(-1)
        },
      forward(){
          this.$router.go(+1)
        }
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #navbar-desktop {
    display:none
  }
  #navbar-mobile {
    display:block
  }
  .router-view {
    margin-top:4rem;
  }
  @media (min-width: 992px) {
    #navbar-desktop {
      display:block
    }
    #navbar-mobile {
      display:none
    }
    .router-view {
    margin-top:0;
  }
  }
</style>
