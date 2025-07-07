import React, { memo, useCallback, useEffect, useState } from 'react';
import { useCatCardStyles } from './styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Button } from '../Button';
import { MiceSection } from '../MiceSection';

interface ICatCardProps {
    id: number;
    image: string;
    fullName: string;
    description: string;
    onDeleteCat: (id: number) => void;
    isSearchActive: boolean;
}

const HIDE_MICE_SECTION_BUTTON_TEXT = "Hide Mice"
const SHOW_MICE_SECTION_BUTTON_TEXT = "Show Mice"

export const CatCard: React.FC<ICatCardProps> = memo(({ id, image, fullName, description, onDeleteCat, isSearchActive }) => {
    const [showMiceSetion, setShowMiceSection] = useState(false);
    const classes = useCatCardStyles({ isMouseCardOpen: showMiceSetion });

    useEffect(() => {
        if (isSearchActive) setShowMiceSection(true)
    }, [isSearchActive])

    const handleDelete = useCallback(async () => {
        await onDeleteCat(id);
    }, [id, onDeleteCat]);

    const toggleMiceSection = useCallback(() => {
        setShowMiceSection((prev) => !prev);
    }, []);


    return (
        <div className={classes.cardContainer}>
            <div className={classes.cardBody}>
                <img src={image} alt={fullName} className={classes.image} />
                <div className={classes.details}>
                    <h2 className={classes.name}>{fullName}</h2>
                    <p className={classes.description}>{description}</p>
                </div>
                <div className={classes.actions}>
                    <Button
                        className={classes.miceButton}
                        onClick={toggleMiceSection}
                    >
                        {showMiceSetion ? HIDE_MICE_SECTION_BUTTON_TEXT : SHOW_MICE_SECTION_BUTTON_TEXT}
                        <FontAwesomeIcon
                            icon={showMiceSetion ? faChevronUp : faChevronDown}
                            className={classes.chevron}
                        />
                    </Button>
                    <Button
                        className={classes.deleteButton}
                        onClick={handleDelete}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>
                </div>
            </div>
            {showMiceSetion && <MiceSection catId={id} />}
        </div>
    );
});

