import { createUseStyles } from 'react-jss';

export const useCreateCatPageStyles = createUseStyles({
    container: {
        padding: 16,
        maxWidth: 500,
        margin: '0 auto',
    },
    title: {
        fontSize: '2rem',
        marginBottom: 16,
        color: 'while'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
    },
    label: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '1rem',
        color: 'while'
    },
    input: {
        padding: 8,
        borderRadius: 4,
        border: '1px solid #ccc',
        marginTop: 4,
    },
    textarea: {
        padding: 8,
        borderRadius: 4,
        border: '1px solid #ccc',
        marginTop: 4,
        resize: 'vertical',
    },
    button: {
        padding: '10px 16px',
        borderRadius: 4,
        border: 'none',
        backgroundColor: '#27ae60',
        color: '#fff',
        fontSize: '1rem',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#219150',
        },
        '&:disabled': {
            backgroundColor: '#bdc3c7',
            cursor: 'not-allowed',
        },
    },
    success: {
        color: '#27ae60',
        marginTop: 8,
    },
    error: {
        color: '#e74c3c',
        marginTop: 8,
    },
});
