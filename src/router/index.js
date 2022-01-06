import { createRouter, createWebHistory } from 'vue-router'
import Home  from '../views/Home'
import UnderConstruction  from '../views/UnderConstruction'
import RaceMaps  from '../views/RaceMaps'
import NotFound  from '../views/NotFound'
import Contact from '../views/Contact'
import Registration from '../views/Registration'
import BecomeSponsor from '../views/BecomeSponsor'
import Volunteer from '../views/Volunteer'
import Donate from '../views/Donate'
import Sponsors from '../views/Sponsors'


const routes = [
    { path: '/', component: UnderConstruction, name: 'UnderConstruction' },
    { path: '/Home', component: Home, name: 'Home', redirect: '/' },
    { path: '/Contact', component: Contact, name: 'Contact' },
    { path: '/Registration', component: Registration, name: 'Registration', redirect: '/' },
    { path: '/BecomeSponsor', component: BecomeSponsor, name: 'BecomeSponsor', redirect: '/' },
    { path: '/Volunteer', component: Volunteer, name: 'Volunteer', redirect: '/' },
    { path: '/Donate', component: Donate, name: 'Donate', redirect: '/' },
    { path: '/Sponsors', component: Sponsors, name: 'Sponsors', redirect: '/' },
    { path: '/RaceMaps/:race', component: RaceMaps, name: 'RaceMaps', props: true},
    // redirect
    { path: '/all-jobs', redirect: '/'  },
    // catchall 404 (Catches any route that doesn't match)
    { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound }
]
  

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes, // short for `routes: routes`
})

export default router;