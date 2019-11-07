export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      name: 'Manage User',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Add User',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Users',
          url: '/users',
          icon: 'icon-puzzle',
        }    
      ],
    }
  ],
};
