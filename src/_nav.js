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
          url: '/adduser',
          icon: 'icon-puzzle',
        },
        {
          name: 'Users',
          url: '/users',
          icon: 'icon-puzzle',
        }    
      ],
    },
    {
      name: 'Blogs',
      url: '/blogs',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      name: 'Burger',
      url: '/burger',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    }
  ],
};
