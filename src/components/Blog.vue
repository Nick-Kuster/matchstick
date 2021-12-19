<template>
    <div class="card">
        <img class="card-img-top" :src="require('@/assets/img/' + imageurl + '')" v-if="showImage()" alt="Card image cap">
        <div class="card-body">
            <p class="card-text" v-html="content"></p>
            {{ imageurl }}
        </div>
    </div>
</template>

<script>
    export default {
        props: ['id', 'title', 'content', 'imageurl', 'link'],
        data() {
        },
        methods: {
           showImage() {
                return this.imageurl !== ''
           }
        }
    }
</script>

<style>

</style>