import { createRouter, createWebHistory} from 'vue-router'
import About from '../views/About'
import Home  from '../views/Home'
import Jobs  from '../views/jobs/Jobs'
import JobDetails  from '../views/jobs/JobDetails'
import NotFound  from '../views/NotFound'


const routes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/About', component: About, name: 'About' },
    { path: '/Jobs', component: Jobs, name: 'Jobs' },
    { path: '/Jobs/:id', component: JobDetails, name: 'JobDetails', props: true },
    // redirect
    { path: '/all-jobs', redirect: '/Jobs'  },
    // catchall 404 (Catches any route that doesn't match)
    { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound }
]
  

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes, // short for `routes: routes`
})

export default router;