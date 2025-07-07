import { Link, useLocation } from 'react-router-dom';
import { useSidebarStyles } from './styles';
import React from 'react';

export const Sidebar = React.memo(() => {
    const classes = useSidebarStyles();
    const location = useLocation();
    return (
        <div className={classes.sidebar}>
            <h2 className={classes.title}>Cats App</h2>
            <div className={classes.navList}>
                <div
                    className={`${classes.navItem} ${location.pathname === '/' ? classes.active : ''
                        }`}
                >
                    <Link to="/" className={classes.link}>
                        All Cats
                    </Link>
                </div>
                <div
                    className={`${classes.navItem} ${location.pathname === '/create' ? classes.active : ''
                        }`}
                >
                    <Link to="/create" className={classes.link}>
                        Create Cat
                    </Link>
                </div>
            </div>
        </div>
    );
});
