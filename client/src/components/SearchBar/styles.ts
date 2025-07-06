import { createUseStyles } from "react-jss";

export const useSearchBarStyles = createUseStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 16,
    },
    input: {
        flex: 1,
        padding: '8px 12px',
        border: '1px solid #ccc',
        borderRadius: 4,
        fontSize: '1rem',
    },
});