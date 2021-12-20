<template>
    <h1>Home</h1>
    <section class="blog-list m-auto d-flex">
        <!-- <div>
        <button @click="redirect">Redirect</button>
        <button @click="back">Go back</button>
        <button @click="forward">Go forward</button>
        </div> -->
        <Blog class="blog m-auto" v-for="blog of blogs" :key="blog.id" :content="blog.content" :imageurl="blog.imageurl"></Blog>
    </section>
</template>

<script>
    import Blog from '../components/Blog.vue'
    export default {
        name: 'Home',
        components: {
            Blog
        },
        data() {
            return {
                blogs: [
                    {              
                        id: 1,          
                        content: "<div class='text-danger'>Hello world 1</div><hr><h1 class=''> This is another thing!aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>",
                        imageurl: "matchstick/Logo.png",
                    },
                    {                  
                        id: 2,                    
                        content: "<div class='text-danger'>Hello world 2</div>",
                        imageurl: "matchstick/Logo.png",
                    },
                    {                    
                        id: 3,                  
                        content: "<div class='text-danger'>Hello world 3</div>",
                        imageurl: "matchstick/Logo.png",
                    },
                    {                      
                        id: 4,                
                        content: "<div class='text-danger'>Hello world 4</div>",
                        imageurl: "matchstick/Logo.png",
                    },
                    {                   
                        id: 5,                   
                        content: "<div class='text-danger'>Hello world 5</div>",
                        imageurl: "matchstick/Logo.png",
                    },
                    {                     
                        id: 6,                 
                        content: "<div class='text-danger'>Hello world 6</div>",
                        imageurl: "matchstick/Logo.png",
                    },
                ]
            }
        }
    }   
</script>

<style scoped>
    .blog {
        width: 100%;
    }
    .blog-list {
        flex-direction: column;
        align-content: center;
        width: 50%;
    }
</style>