import NotFound from './NotFound';
import Home from './Home';

const routes = [
  {
    path: '/',
    name: 'home',
    exact: true,
    component: Home,
  },
  {
    path: '/NotFound',
    name: 'notfound',
    component: NotFound,
  },
];

export default routes;
