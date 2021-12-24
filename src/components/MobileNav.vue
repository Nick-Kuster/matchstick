<template>
  <div id="sidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
  </div>
  <button class="open mobile-nav-open" @click="openNav"><i  @click="openNav" class="fa fa-bars mobile-nav-open"></i></button>
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
      console.log(e.target);
      console.log(this.sideNavOpen);
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
  .open{
    position:fixed;
    z-index: 1;
    right: 5%;
    top: 2%;
    font-size: 2rem;
    background: rgba(187, 44, 46, 0.9);
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
    font-size: 25px;
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

  /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
  @media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
  } 
  
  @media (min-width: 992px) {
    .open, .sidenav {
      display:none;
      color: #fff;
    }

  }
</style>