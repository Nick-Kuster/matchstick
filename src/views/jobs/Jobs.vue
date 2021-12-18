<template>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id">
        <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
            <h2>{{ job.title }}</h2>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                { title: 'Title 1', id: 1, details: 'lorem' },
                { title: 'Title 2', id: 2, details: 'lorem' },
                { title: 'Title 3', id: 3, details: 'lorem' },
            ]
        }
    }
}
</script>