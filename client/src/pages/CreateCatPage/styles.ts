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
        color: 'white',
        textAlign: 'center',
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
        color: 'white',
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
    secondaryButton: {
        marginTop: 8,
        padding: '8px 12px',
        borderRadius: 4,
        border: '1px solid #2980b9',
        backgroundColor: '#3498db',
        color: '#fff',
        fontSize: '0.9rem',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#2980b9',
        },
        '&:disabled': {
            backgroundColor: '#95a5a6',
            border: '1px solid #95a5a6',
            cursor: 'not-allowed',
        },
    },
    preview: {
        textAlign: 'center',
    },
    imagePreview: {
        marginTop: 8,
        maxWidth: '100%',
        borderRadius: 8,
        boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
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
