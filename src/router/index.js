import { createRouter, createWebHistory } from 'vue-router'
import Home  from '../views/Home'
import RaceMaps  from '../views/RaceMaps'
import NotFound  from '../views/NotFound'
import Contact from '../views/Contact'
import Registration from '../views/Registration'
import BecomeSponsor from '../views/BecomeSponsor'
import Volunteer from '../views/Volunteer'
import Donate from '../views/Donate'
import Sponsors from '../views/Sponsors'
import UnderConstruction from '../views/UnderConstruction'


const routes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/Contact', component: Contact, name: 'Contact' },
    { path: '/Registration', component: Registration, name: 'Registration', redirect: '/UnderConstruction/register'},
    { path: '/BecomeSponsor', component: BecomeSponsor, name: 'BecomeSponsor', redirect: '/UnderConstruction/sponsor' },
    { path: '/Volunteer', component: Volunteer, name: 'Volunteer', redirect: '/UnderConstruction/volunteer' },
    { path: '/Donate', component: Donate, name: 'Donate', redirect: '/UnderConstruction/donate' },
    { path: '/Sponsors', component: Sponsors, name: 'Sponsors', redirect: '/UnderConstruction/register' },
    { path: '/RaceMaps/:race', component: RaceMaps, name: 'RaceMaps', props: true},
    { path: '/UnderConstruction/:page', component: UnderConstruction, name: 'UnderConstruction', props: true},
    // catchall 404 (Catches any route that doesn't match)
    { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound }
]
  

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes, // short for `routes: routes`
})

export default router;