<template>
  <nav class="navbar navbar-expand-lg ">

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="m-auto inner-nav">
            <ul class="navbar-nav navbar-items">
                <!-- <li class="nav-item ml-lg-5 m-auto"><router-link class="nav-link" to="/"><strong>HOME</strong></router-link></li> -->
                <li class="nav-item dropdown ml-lg-5 m-auto">
                     <router-link class="dropdown-toggle nav-link"  id="navbarDropdown" to="/" aria-haspopup="true" aria-expanded="false"><strong>RACE</strong></router-link>
                    <!-- <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <strong>RACE</strong>
                    </a> -->
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <router-link class="dropdown-item nav-link" to="/"><strong>RACE</strong></router-link>
                        <router-link class="dropdown-item nav-link" to="/About"><strong>5K</strong></router-link>
                        <router-link class="dropdown-item nav-link" to="/About"><strong>10K</strong></router-link>
                        <router-link class="dropdown-item nav-link" to="/About"><strong>HALF MARATHON</strong></router-link>
                    </div>
                </li>
                <li class="nav-item ml-lg-5 m-auto"><router-link class="nav-link" :to="{ name: 'About' }"><strong>TRAINING</strong></router-link></li>
                <li class="nav-item ml-lg-5 m-auto"><router-link class="nav-link" :to="{ name: 'Jobs' }"><strong>REGISTER</strong></router-link></li>
                <li class="nav-item ml-lg-5 m-auto"><router-link class="nav-link" :to="{ name: 'Jobs' }"><strong>SPONSERS</strong></router-link></li>
                <li class="nav-item dropdown ml-lg-5 m-auto">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        <strong>GET INVOLVED</strong>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item nav-link" href="#"><strong>VOLUNTEER</strong></a>
                    <a class="dropdown-item nav-link"  href="#"><strong>BECOME A SPONSER</strong></a>
                    <a class="dropdown-item nav-link" href="#"><strong>DONATE</strong></a>
                    </div>
                </li>                
                <li class="nav-item ml-lg-5 m-auto"><router-link class="nav-link" :to="{ name: 'About' }"><strong>CONTACT US</strong></router-link></li>
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
    .logo {
        width: 12rem;
    }
    .inner-nav {
        display:flex;
    }
    .navbar {
        justify-content: end;
        background: rgba(187, 44, 46);
        right: 0;
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
    }
    .nav-link.router-link-active {
        background: rgba(221, 201, 202, 0.397);
        
        color: black;
        border-radius: 5%
    }
    .dropdown-menu .nav-link.router-link-active {
        background: rgba(221, 201, 202, 0.397);
        color: black;
        border: none;
        border-radius: 5%
    }
    .nav-link:hover {
        opacity: .9;
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
