import AdminLayout from '../components/layouts/admin-layout/admin-layout';
import EmptyLayout from '../components/layouts/empty-layout/empty-layout';
import Home from '../pages/home/home';
import Users from '../pages/users/users';

interface IRoute {
    path: string;
    component: any;
    layout: any;
}

export const publicRoutes: IRoute[] = [
    { path: '/', component: Home, layout: AdminLayout },
    { path: '/users', component: Users, layout: AdminLayout },
];

export const privateRoutes: IRoute[] = [];
