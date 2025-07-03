import { createUseStyles } from 'react-jss';

export const useAppStyles = createUseStyles({
    container: {
        display: 'flex',
        height: '100vh',
    },
    content: {
        flex: 1,
        padding: 16,
        overflowY: 'auto',
    },
});
