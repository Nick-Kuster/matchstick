<template>
  <nav class="navbar navbar-expand-lg ">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon">
           <i class="fas fa-bars" style="color:#fff; font-size:28px;"></i>
      </span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="mx-auto inner-nav">
            <ul class="navbar-nav navbar-items">
                <!-- <li class="nav-item ml-lg-5 m-auto"><router-link class="nav-link" to="/"><strong>HOME</strong></router-link></li> -->
                <li class="nav-item dropdown ml-lg-5 m-auto">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <strong>RACE</strong>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <router-link class="dropdown-item" to="/"><strong>RACE INFO</strong></router-link>
                        <a class="dropdown-item" href="#"><strong>RACE MAP</strong></a>
                    </div>
                </li>
                <!-- <li class="nav-item ml-lg-5 m-auto"><router-link class="nav-link" :to="{ name: 'About' }"><strong>TRAINING</strong></router-link></li>
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
                </li> -->
            </ul>
        </div>
    </div>
  </nav>
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
        background-color: darkred;
    }
    .nav-link {
        color: #ffffff;
    }
    .dropdown-menu {        
        background-color: darkred;
        border:none;
    }
    .dropdown-item {        
        color: #ffffff;
    } 
    .navbar-toggler-icon {        
        color: #ffffff !important;
        border: none;
    }
    @media (min-width: 992px) {
        .dropdown:hover .dropdown-menu {
            display: block;        
        }
        .dropdown-menu {
            margin-top: 0;
            background-color: darkred;
        }
        .navbar {
            min-height: 3rem;
        }
    }

    
</style>
