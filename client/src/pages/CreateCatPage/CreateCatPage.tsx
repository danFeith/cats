import React, { useCallback, useState } from 'react';
import { useCreateCatPageStyles } from './styles';
import { useCatsContext } from '../../context/CatContext';
import { Button } from '../../components/Button';
import { ImagePreview } from '../../components/ImagePreview';
import { FeedbackMessage } from '../../components/FeedbackMessage/FeedbackMessage';
import { InputField } from '../../components/InputField';

export const CreateCatPage = () => {
    const classes = useCreateCatPageStyles();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { createCat, loading, fetchRandomCatImage, randomImageLoading } = useCatsContext();

    const clearForm = useCallback(() => {
        setFirstName('');
        setLastName('');
        setDescription('');
        setImage('');
    }, []);

    const handleGetRandomImage = useCallback(async () => {
        setErrorMessage('');
        try {
            const randomImageUrl = await fetchRandomCatImage();
            setImage(randomImageUrl);
        } catch (error) {
            console.error('Error fetching random image:', error);
            setErrorMessage('Could not fetch random image. Try again.');
        }
    }, [fetchRandomCatImage]);


    const handleSubmit = useCallback(async (e: React.FormEvent) => {
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
    }, [createCat, clearForm, firstName, lastName, description, image]);

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Create New Cat</h1>
            <form onSubmit={handleSubmit} className={classes.form}>
                <InputField
                    label="First Name:"
                    value={firstName}
                    onChange={setFirstName}
                    placeholder="Enter first name"
                    required
                    className={classes.input}
                />

                <InputField
                    label="Last Name:"
                    value={lastName}
                    onChange={setLastName}
                    placeholder="Enter last name"
                    required
                    className={classes.input}
                />

                <InputField
                    label="Description:"
                    value={description}
                    onChange={setDescription}
                    placeholder="Enter description"
                    required
                    className={classes.input}
                />

                <InputField
                    label="Image URL:"
                    value={image}
                    onChange={setImage}
                    type="url"
                    placeholder="Paste image URL"
                    required
                    className={classes.input}
                />
                <Button
                    type="button"
                    onClick={handleGetRandomImage}
                    className={classes.secondaryButton}
                    disabled={randomImageLoading}
                >
                    {randomImageLoading ? 'Fetching...' : 'Get Random Cat Image'}
                </Button>

                {image && <ImagePreview src={image} />}

                <Button
                    type="submit"
                    className={classes.button}
                    disabled={loading}
                >
                    {loading ? 'Creating...' : 'Create Cat'}
                </Button>

                <FeedbackMessage error={errorMessage} success={successMessage} />
            </form>
        </div>
    );
};
