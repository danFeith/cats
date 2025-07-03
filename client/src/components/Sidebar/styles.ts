import { createUseStyles } from 'react-jss';

export const useSidebarStyles = createUseStyles({
  sidebar: {
    width: 200,
    backgroundColor: '#2c3e50',
    color: '#fff',
    padding: 16,
    height: '100vh',
  },
  title: {
    marginTop: 0,
    fontSize: '1.5rem',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
  },
  navItem: {
    margin: '1rem 0',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  active: {
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
});
