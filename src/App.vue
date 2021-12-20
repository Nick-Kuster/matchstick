<template>

        <Nav></Nav>
        <Header></Header>
        <router-view/>
        <Footer></Footer>            
</template>

<script>
import Nav from './components/Nav.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Nav,
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
</style>
