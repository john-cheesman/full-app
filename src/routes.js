import Welcome from './components/Welcome.vue';
import AboutYou from './components/AboutYou.vue';
import ThankYou from './components/ThankYou.vue';

const routes = [
    { path: '/', component: Welcome },
    { path: '/about-you', component: AboutYou },
    { path: '/thank-you', component: ThankYou }
]

export default routes
