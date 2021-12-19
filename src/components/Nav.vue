<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="m-auto inner-nav">
            <a  href="#page-top" class="mr-lg-5 d-none d-lg-block"><img src="../assets/img/matchstick/Logo.png" class="logo d-s-none" alt="..." /></a>
            <ul class="navbar-nav  navbar-items">
                <li class="nav-item ml-lg-5 m-auto"><router-link class="nav-link" to="/"><strong>HOME</strong></router-link></li>
                <li class="nav-item dropdown ml-lg-5 m-auto">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <strong>RACE</strong>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <router-link class="dropdown-item" to="/"><strong>RACE INFO</strong></router-link>
                    <a class="dropdown-item" href="#"><strong>RACE MAP</strong></a>
                    </div>
                </li>
                <li class="nav-item ml-lg-5 m-auto"><router-link class="nav-link" :to="{ name: 'About' }"><strong>TRAINING</strong></router-link></li>
                <li class="nav-item ml-lg-5 m-auto"><router-link class="nav-link" :to="{ name: 'Jobs' }"><strong>REGISTER</strong></router-link></li>
                <li class="nav-item ml-lg-5 m-auto"><router-link class="nav-link" :to="{ name: 'Jobs' }"><strong>SPONSERS</strong></router-link></li>
                <li class="nav-item ml-lg-5 m-auto"><router-link class="nav-link" :to="{ name: 'Jobs' }"><strong>NEWS/UPDATES</strong></router-link></li>
                <li class="nav-item dropdown ml-lg-5 m-auto">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <strong>GET INVOLVED</strong>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#"><strong>VOLUNTEER</strong></a>
                    <a class="dropdown-item" href="#"><strong>BECOME A SPONSER</strong></a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#"><strong>DONATE</strong></a>
                    </div>
                </li>
                <li class="nav-item dropdown ml-lg-5 m-auto">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <strong>CONTACT US</strong>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#"><strong>OUR CONTACT INFO</strong></a>
                    <a class="dropdown-item" href="#"><strong>ABOUT THE RACE</strong></a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#"><strong>DONATE</strong></a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  </nav>
  <!-- <nav class="navbar navbar-expand-lg navbar-custom  fixed-top " id="mainNav">
            <div class="container navbar-inner ">
                <a class="navbar-brand" href="#page-top"><img src="../assets/img/matchstick/runners-logo.png" alt="..." /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ms-1"></i>
                </button>
                <div class="collapse navbar-collapse flex justify-center" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" :to="{ name: 'About' }">About</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" :to="{ name: 'Jobs' }">Jobs</router-link></li>
                        <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="#team">Team</a></li>
                        <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav> -->
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
    .logo {
        width: 12rem;
    }
    .inner-nav {
        display:flex;
        justify-content: center;
    }
    .navbar-items {
        justify-content: center;
    }
    .navbar {
        justify-content: end;
    }

    @media (min-width: 992px) {
        .dropdown:hover .dropdown-menu {
            display: block;        
        }
        .dropdown-menu {
            margin-top: 0;
        }
        .navbar {
            min-height: 10rem;
        }
    }

    
</style>
