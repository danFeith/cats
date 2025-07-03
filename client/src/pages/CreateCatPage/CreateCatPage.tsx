import React, { memo, useState } from 'react';
import { useCreateCatPageStyles } from './styles';
import { useCatsContext } from '../../context/CatContext';
import { Button } from '../../components/Button';

export const CreateCatPage = memo(() => {
    const classes = useCreateCatPageStyles();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { createCat, loading, fetchRandomCatImage, randomImageLoading } = useCatsContext();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('');
        setErrorMessage('');

        try {
            await createCat({ firstName, lastName, description, image });
            setSuccessMessage('Cat created successfully!');
            clearForm();
        } catch (error) {
            console.error('Error creating cat:', error);
            setErrorMessage('Failed to create cat. Please try again.');
        }
    };

    const handleGetRandomImage = async () => {
        setErrorMessage('');
        try {
            const randomImageUrl = await fetchRandomCatImage();
            setImage(randomImageUrl);
        } catch (error) {
            console.error('Error fetching random image:', error);
            setErrorMessage('Could not fetch random image. Try again.');
        }
    };

    const clearForm = () => {
        setFirstName('');
        setLastName('');
        setDescription('');
        setImage('');
    };

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Create New Cat</h1>
            <form onSubmit={handleSubmit} className={classes.form}>
                <label className={classes.label}>
                    First Name:
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className={classes.input}
                        required
                    />
                </label>

                <label className={classes.label}>
                    Last Name:
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className={classes.input}
                        required
                    />
                </label>

                <label className={classes.label}>
                    Description:
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className={classes.textarea}
                        required
                    />
                </label>

                <label className={classes.label}>
                    Image URL:
                    <input
                        type="url"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className={classes.input}
                        required
                    />
                    <Button
                        type="button"
                        onClick={handleGetRandomImage}
                        className={classes.secondaryButton}
                        disabled={randomImageLoading}
                    >
                        {randomImageLoading ? 'Fetching...' : 'Get Random Cat Image'}
                    </Button>
                </label>

                {image && (
                    <div className={classes.preview}>
                        <img
                            src={image}
                            alt="Cat Preview"
                            className={classes.imagePreview}
                        />
                    </div>
                )}

                <Button
                    type="submit"
                    className={classes.button}
                    disabled={loading}
                >
                    {loading ? 'Creating...' : 'Create Cat'}
                </Button>

                {successMessage && (
                    <p className={classes.success}>{successMessage}</p>
                )}
                {errorMessage && (
                    <p className={classes.error}>{errorMessage}</p>
                )}
            </form>
        </div>
    );
});
