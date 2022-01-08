<template>
    <div class="contact-container">
        <div class="contact-info">
            <div class="header">
                <h1 class="title">Contact Information</h1>
                <h5 class="sub-title">For registration, sponsorship, volunteer, or any general questions you may have, please reach out to us! </h5>
                <hr/>
            </div>
           <div class="contact-details">
               <h2 class="phone">Phone: <a href="tel:330-324-2565"> (330) 324-2565</a></h2>
               <h2 class="email">Email: <a href="mailto: info@matchstickrace.com">Info@MatchStickRace.com</a></h2>
           </div>
        </div>            
    </div>
</template>

<script>
    export default {
        name: 'Contact',
        components: {
        }
    }   
</script>

<style scoped>
    .title {
        text-decoration: underline;
        padding: 1rem;
    }
    .contact-container {    
        display: flex;    
        flex-direction: column;    
        align-items: center;
        grid-template-columns: 1fr;
        grid-template-areas: "contact-info";
    }
    .contact-info {
        grid-area: contact-info;
        padding:5rem 2rem;
        color: rgba(187, 44, 46);
        display: grid;
    }

    .phone, .email {
        font-size: 1.25rem !important;
    }
    .contact-details {
        text-align:left;
        align-items: left;
    }
    a {
        color: rgba(187, 44, 46);
    }
    a:hover {
        color: rgba(187, 44, 46);
    }
    
  @media (min-width: 992px) {
    .contact-container {    
        display: flex;    
        flex-direction: column;    
    }
    .phone, .email {
        font-size: 1.25rem !important;
        text-align: center;
    }
  }
</style>