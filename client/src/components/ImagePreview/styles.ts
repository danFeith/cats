import { createUseStyles } from "react-jss";

export const useImagePreviewStyles = createUseStyles({
    preview: {
        textAlign: 'center',
    },
    imagePreview: {
        marginTop: 8,
        maxWidth: '100%',
        borderRadius: 8,
        boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    },
})