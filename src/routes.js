import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));
const AddUser = React.lazy(() => import('./views/Users/AddUser'))
const Blogs = React.lazy(()=> import('./views/Blog/Blog'))
const FullPost = React.lazy(()=> import('./views/Blog/FullPost/FullPost'))
const NewPost = React.lazy(()=> import('./views/Blog/NewPost/NewPost'))

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/adduser', exact: true, name: 'Add User', component: AddUser },
  { path: '/blogs', exact: true, name: 'Blogs', component: Blogs },
  { path: '/fullpost', exact: true, name: 'FullPost', component: FullPost },
  { path: '/newpost', exact: true, name: 'NewPost', component: NewPost }
];

export default routes;
