import VueRouter from 'vue-router';
import ListContainer from './containers/ListContainer.vue';
import FormContainer from './containers/FormContainer.vue';
import DetailContainer from './containers/DetailContainer.vue';

const routes = [
    {
        path: '/',
        component: ListContainer
    },
    {
        path: '/list',
        component: ListContainer
    },
    {
        path: '/form',
        component: FormContainer
    },
    {
        path: '/detail',
        component: DetailContainer
    },
];
const router = new VueRouter({
    routes
});

export default router;