<template>
    <footer class="footer ">
        <div class="footer-content">
            <div class="left footer-section">
                <h2 class="title">Follow Us On Social Media!</h2>                
                <a class="btn btn-social" title="Facebook" href="https://www.facebook.com/MatchStickChallenge"><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-social" title="Instagram" href="https://www.instagram.com/wadsworthmatchstickchallenge/"><i class="fab fa-instagram"></i></a>
            </div>
            <div class="center footer-section">
                <img src="..\assets\img\matchstick\matchstick-challenge-no-bg.png" class="logo" alt="Matchstick Challenge Logo">
            </div>
            <div class="right footer-section">
                <h2 class="title">Contact</h2>
                <i class="fa fa-phone phone-icon"></i><a href="tel:330-324-2565"><span class="phone">(330) 324-2565</span></a>
                <i class="fa fa-envelope email-icon"></i><a href="mailto: wadsworthmatchstickrace@gmail.com"><span class="email"> WadsworthMatchstick@gmail.com</span></a>
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
    }
    .center {
    }
    .right {
        display: grid;
        grid-template-rows: repeat(5, 1fr);    
        place-items: center;
        font-size: 1.25rem;
        padding: 2rem 0;
    }
        .right a {
            color: white;
        }
    .title {
        text-decoration: underline;
        margin-bottom: 1rem;
    }
    .left {
        display: grid;
        grid-template-columns: repeat(1,1fr);
        place-items: center;
        padding: 3rem 0;
    }
    .logo {
        max-width: 15rem;
        height: auto;
    }
    .footer-section {
        min-height: 100%;
    }
    .btn-social {
        font-size: 5rem;
        color:white;
    }
    
  @media (min-width: 992px) {
    .footer-content {
        grid-template-columns: repeat(3, 1fr);
        display:grid;
    }
    .left {        
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: .5 1fr;
        grid-template-areas: "title title"
                             "facebook instagram";
        justify-items: start;
        margin-left: 10rem;
        padding: 0;
    }
    .left .title {
        justify-self: center;
        margin-top: .2rem;
    }
    .btn-social {
        justify-self: center;
        align-self: start;
    }
    .center {
        display: grid;
        place-items: center;
    }
    .right {
        justify-items: start;
        padding: 0;
        grid-template-columns: 1fr 15fr;
        grid-template-rows: .5fr 1fr 1fr;
        margin-left: 5rem;
        margin-top: .5rem;
        grid-template-areas: "title title"
                             "phone-icon phone"
                             "email-icon email"
    }
    .title {
        grid-area: title;
    }
    .phone-icon {
        grid-area: phone-icon;
    }
    .phone {
        grid-area: phone;
    }
    .email-icon {
        grid-area: email-icon;
    }
    .email {
        grid-area: email;
    }
    
  }
</style>