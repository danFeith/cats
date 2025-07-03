import React from 'react';
import { useCatCardStyles } from './styles';

interface ICatCardProps {
    image: string;
    fullName: string;
    description: string;
}

const CatCard: React.FC<ICatCardProps> = ({ image, fullName, description }) => {
    const classes = useCatCardStyles();

    return (
        <div className={classes.card}>
            <img src={image} alt={fullName} className={classes.image} />
            <div className={classes.details}>
                <h2 className={classes.name}>{fullName}</h2>
                <p className={classes.description}>{description}</p>
            </div>
        </div>
    );
};

export default React.memo(CatCard);
