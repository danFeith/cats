import { createUseStyles } from 'react-jss';

export const useMiceListStyles = createUseStyles({
    miceGrid: {
        display: 'grid',
        padding: 8,
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
        gap: 8,
    },
    mouseItem: {
        backgroundColor: '#ecf0f1',
        padding: 8,
        borderRadius: 6,
        textAlign: 'center',
        fontSize: '0.9rem',
        color: '#2c3e50',
    },
    noMiceMessage: {
        color: 'black'
    }
});
