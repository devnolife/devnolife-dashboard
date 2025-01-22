const verticalMenuData = (role) => {
  const menuItems = [
    {
      label: 'Home',
      href: '/home',
      icon: 'tabler-smart-home'
    },
    {
      label: 'About',
      href: '/about',
      icon: 'tabler-info-circle'
    }
  ];

  if (role === 'admin') {
    menuItems.push({
      label: 'Admin',
      href: '/admin',
      icon: 'tabler-shield'
    });
  } else if (role === 'student') {
    menuItems.push({
      label: 'Student',
      href: '/student',
      icon: 'tabler-school'
    });
  } else if (role === 'faculty') {
    menuItems.push({
      label: 'Faculty',
      href: '/faculty',
      icon: 'tabler-teacher'
    });
  } else if (role === 'study-program') {
    menuItems.push({
      label: 'Study Program',
      href: '/study-program',
      icon: 'tabler-book'
    });
  } else if (role === 'administration') {
    menuItems.push({
      label: 'Administration',
      href: '/administration',
      icon: 'tabler-building'
    });
  }

  return menuItems;
};

export default verticalMenuData;
