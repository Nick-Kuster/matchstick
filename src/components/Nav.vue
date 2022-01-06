<template>
  <nav class="navbar navbar-expand-lg ">

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="logo-container">
            <router-link class="nav-link nav-head" to="/"><img src="..\assets\img\matchstick\matchstick-challenge-no-bg.png" alt="logo" class="logo"></router-link>
        </div>
        <div class="m-auto inner-nav">
            <ul class="navbar-nav navbar-items">
                <li class="nav-item ml-lg-5 m-auto"><router-link class="nav-link" to="/"><strong>HOME</strong></router-link></li>
                <li class="nav-item dropdown ml-lg-5 m-auto">
                    <router-link class="nav-link"  id="navbarDropdown" :to="{ name: 'RaceMaps', params: { race: '5k' } }" aria-haspopup="true" aria-expanded="false"><strong>RACE MAPS</strong></router-link>
                </li>
                <li class="nav-item ml-lg-5 m-auto"><router-link class="nav-link" :to="{ name: 'Registration' }"><strong>REGISTER</strong></router-link></li>
                <li class="nav-item dropdown ml-lg-5 m-auto">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        <strong>GET INVOLVED</strong>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <router-link class="nav-link" :to="{ name: 'Volunteer' }"><strong>VOLUNTEER</strong></router-link>
                    <router-link class="nav-link" :to="{ name: 'BecomeSponsor' }"><strong>BECOME A SPONSOR</strong></router-link>
                    <router-link class="nav-link" :to="{ name: 'Donate' }"><strong>DONATE</strong></router-link>
                    </div>
                </li>                
                <li class="nav-item ml-lg-5 m-auto"><router-link class="nav-link" :to="{ name: 'Contact' }"><strong>CONTACT US</strong></router-link></li>
            </ul>
        </div>
    </div>
  </nav>
</template>

<script>
export default {
  setup() {

  }
};
</script>

<style scoped>
    .logo-container {
        position: absolute;
        top: 1rem;
        left: 6rem;
        background-color:rgba(187, 44, 46);
        border-bottom-left-radius: 50%;
        border-bottom-right-radius: 50%;
    }
    .logo {
        width: 10rem;
    }
    .inner-nav {
        display:flex;
    }
    .navbar {
        justify-content: end;
        background: rgba(187, 44, 46);
        right: 0;
        position: fixed;
        width: 100%;
    }
    .nav-link {
        color: #ffffff;
    }
    .dropdown-menu {        
        border:none;
        border-bottom-right-radius: 15%;
        border-bottom-left-radius: 15%;
        display: block;
        background:none;
    }
    .dropdown-item {        
        color: #ffffff;
    } 
    .dropdown-menu .dropdown-item:hover {
        opacity: .9;
        background:none;
        color:black;
    }
   
  
    .nav-link:hover {
        opacity: .8;
        transition: opacity 1.5s;
    }
    
    @media (min-width: 992px) {
        .dropdown:hover .dropdown-menu {
            display: block;        
        }
        .dropdown-menu {
            margin-top: 0;
            display: none;
            background: rgba(187, 44, 46, 0.9);
            animation: growDown 400ms ease-in-out forwards;
            transform-origin: top center;
        }

        @keyframes growDown {
            0% {
                transform: scaleY(0)
            }
            80% {
                transform: scaleY(1.1)
            }
            100% {
                transform: scaleY(1)
            }
        }

        .navbar {
            min-height: 3rem;
        }
    }

    
</style>
