import React from "react";
import { useFeedbackMessageStyles } from "./styles";

interface IFeedbackMessageProps {
    success?: string | null;
    error?: string | null;
}

export const FeedbackMessage: React.FC<IFeedbackMessageProps> = React.memo(({ success, error }) => {
    const classes = useFeedbackMessageStyles();

    if (!success && !error) return null;

    return (
        <>
            {success && <p className={classes.success}>{success}</p>}
            {error && <p className={classes.error}>{error}</p>}
        </>
    );
});
