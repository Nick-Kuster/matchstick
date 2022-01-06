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
               <h2 class="email">Email: <a href="mailto: wadsworthmatchstickrace@gmail.com">WadsworthMatchstick@gmail.com</a></h2>
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
        display: grid;
        max-height: 10vh;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-areas: ". contact-info .";
    }
    .contact-info {
        grid-area: contact-info;
        padding-top:5rem;
        color: rgba(187, 44, 46);
        display: grid;
        grid-template-rows: 1fr 6fr;

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
        text-decoration: none;
    }
</style>