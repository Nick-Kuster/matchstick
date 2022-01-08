<template>
  <div id="sidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a> 
    
    <router-link class="nav-link nav-head" to="/"><strong>HOME</strong></router-link>          
    <router-link class="nav-link nav-head"  id="navbarDropdown" :to="{ name: 'RaceMaps', params: { race: '5k' } }" aria-haspopup="true" aria-expanded="false"><strong>RACE MAPS</strong></router-link>
    <hr/>
    <!-- <router-link class="nav-link nav-head" :to="{ name: 'About' }"><strong>TRAINING</strong></router-link> -->
    <router-link class="nav-link nav-head" :to="{ name: 'Registration' }"><strong>REGISTER</strong></router-link>
    <!-- <router-link class="nav-link nav-head" :to="{ name: 'Sponsors' }"><strong>SPONSoRS</strong></router-link> -->
    
    <hr/>
    <router-link class="nav-link nav-head" :to="{ name: 'Volunteer' }"><strong>GET INVOLVED</strong></router-link>
    <router-link class="nav-link nav-sub" :to="{ name: 'Volunteer' }"><strong>VOLUNTEER</strong></router-link>
    <router-link class="nav-link nav-sub" :to="{ name: 'BecomeSponsor' }"><strong>BECOME A SPONSOR</strong></router-link>
    <router-link class="nav-link nav-sub" :to="{ name: 'Donate' }"><strong>DONATE</strong></router-link>
    
    <hr/>
    <router-link class="nav-link nav-head" :to="{ name: 'Contact' }"><strong>CONTACT US</strong></router-link>
    
    <hr/>
    
    <div class="logo-container"><img src="https://i.imgur.com/QJRBibQ.png" alt="logo" class="nav-logo"></div>
  </div>
  
  <nav class="navbar">
    <div class="logo-container"><router-link class="nav-link nav-head" to="/"><img src="https://i.imgur.com/QJRBibQ.png" alt="logo" class="logo"></router-link></div>
    <button class="open mobile-nav-open" @click="openNav"><span  @click="openNav" class="fa fa-bars mobile-nav-open"> </span></button>
  </nav>
</template>
<script>
export default {
  name: "mobileNav",
  data() {
    return {
      sideNavOpen: false
    };
  },
  mounted() {
    this.sideNavOpen = false;
    document.addEventListener("click", (e) => {
      const sideNav = document.getElementById("sidenav");
      if(e.target !== sideNav && this.sideNavOpen && !e.target.parentElement?.classList.contains("mobile-nav-open")){
        this.closeNav();
      }
    })
  },
  methods: {
    toggleNav() {
      this.sideNavOpen = !this.sideNavOpen;
    },
    openNav() {
      document.getElementById("sidenav").style.width = "250px";
      this.sideNavOpen = true;
    }, 
    closeNav() {
      document.getElementById("sidenav").style.width = "0";
      this.sideNavOpen = false;
    } 
  }
};
</script>

<style scoped>
  .nav-logo {
    width: 10rem;
  }
  .logo-container{
    position: absolute;
    left: 10%;
  }
  .logo {
    max-height: 5rem;
  }
  .navbar {
    position: fixed;
    background: rgba(187, 44, 46, 0.9);
    width:100%;
    top: 0;
    text-align: right;
    justify-content: flex-end;
  }
  .open{
    font-size: 2rem;
    border: white 1px;
    background: rgba(187, 44, 46, 0);
    color: #fff;
  }
   /* The side navigation menu */
  .sidenav {
    height: 100%; /* 100% Full-height */
    width: 0; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    /* background-color: #111;  */
    background: rgba(187, 44, 46, 0.95);
    color: #fff;
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
  }

  /* The navigation menu links */
  .sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    color: #fff;
    display: block;
    transition: 0.3s;
  }

  /* When you mouse over the navigation links, change their color */
  .sidenav a:hover {
    color: #f1f1f1;
  }

  /* Position and style the close button (top right corner) */
  .sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }

  .nav-head {
    text-align: left;
  }
  .nav-sub {
    text-align: left;
    margin-left: 2rem;
  }
   
  /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
  @media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
  } 
  
  @media (min-width: 992px) {
    .open, .sidenav, .logo-container{
      display:none;
      color: #fff;
    }
  }
</style>