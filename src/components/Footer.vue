<template>
    <footer class="footer ">
        <div class="footer-content">
            <div class="center footer-section">
                <div class="logo-container">
                    <img src="..\assets\img\matchstick\matchstick-challenge-no-bg.png" class="logo" alt="Matchstick Challenge Logo">
                </div>
                <div class="phone">
                    <i class="fa fa-phone phone-icon"></i><a href="tel:330-324-2565"><span class="phone ml-4">(330) 324-2565</span></a>
                </div>
                <div class="email">
                    <i class="fa fa-envelope email-icon"></i><a href="mailto: info@matchstickrace.com"><span class="email ml-4"> Info@MatchStickRace.com</span></a>
                </div>
                <div class="social">
                    Follow us on social media!
                    <a class="btn btn-social" title="Facebook" href="https://www.facebook.com/MatchStickChallenge"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-social" title="Instagram" href="https://www.instagram.com/wadsworthmatchstickchallenge/"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style scoped>
    .footer-content {
        margin-top: 1rem;
        background:rgba(187, 44, 46, 0.9);
        color: white;
        display:grid;
    }
    .center {
        display: grid;
        justify-self:center;
        grid-template-rows: 3fr 1fr 1fr 1fr;
        grid-template-areas: "logo-container"
                             "phone"
                             "email"
                             "social";
    }
    .logo-container {
        grid-area: logo-container;
    }
    .social {
        grid-area: social;
        justify-self: center;
        align-self: center;
    }
    .phone {
        grid-area: phone;
        justify-self: center;
        align-self: center;
    }
    .email {
        grid-area: email;
        justify-self: center;
        align-self: center
    }    
    .center a {
        color: white;
    }
    .logo {
        max-width: 10rem;
        height: auto;
    }
    .footer-section {
        min-height: 100%;
    }
    .btn-social {
        font-size: 1.5rem;
        color:white;
    }
    /* @media (min-width: 992px) {
        .footer-content {
            display:grid;
            grid-template-columns: 1fr 3fr 1fr;
            grid-template-areas: ". center .";
        }    
        .center {
            display: grid;
            grid-template-columns: repeat(2,1fr);
            grid-template-rows: repeat(3,1fr);
            grid-template-areas: "logo-container phone"
                                "logo-container email"
                                "logo-container social";
            grid-area: "center";                
        }
        .logo-container {
            grid-area: logo-container;
        }
        .social {
            grid-area: social;
            justify-self: start;
            align-self: center;
        }
        .phone {
            grid-area: phone;
            justify-self: start;
            align-self: center;
        }
        .email {
            grid-area: email;
            justify-self: start;
            align-self: center
        }    
    } */
    @media (min-width: 992px) {
        .footer-content {
            display:grid;
        }    
        .center {
            display: grid;
            grid-template-columns: repeat(2,1fr);
            grid-template-rows: repeat(3,1fr);
            grid-template-areas: "logo-container phone"
                                "logo-container email"
                                "logo-container social";
            grid-area: "center";                
        }
        .logo-container {
            grid-area: logo-container;
        }
        .social {
            grid-area: social;
            justify-self: start;
            align-self: center;
        }
        .phone {
            grid-area: phone;
            justify-self: start;
            align-self: center;
        }
        .email {
            grid-area: email;
            justify-self: start;
            align-self: center
        }    
    }
</style>