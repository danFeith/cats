import React, { memo, useState } from 'react';
import axios from 'axios';
import { useCreateCatPageStyles } from './styles';

export const CreateCatPage = memo(() => {
    const classes = useCreateCatPageStyles();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage('');
        setErrorMessage('');

        try {
            await axios.post('http://localhost:5000/cat', {
                firstName,
                lastName,
                description,
                image,
            });
            setSuccessMessage('Cat created successfully!');
            clearForm()
        } catch (error) {
            console.error('Error creating cat:', error);
            setErrorMessage('Failed to create cat. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const clearForm = () => {
        setFirstName('');
        setLastName('');
        setDescription('');
        setImage('');
    }
    const onFirstNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)
    const onLastNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)
    const onDescriptionInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)
    const onImageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setImage(e.target.value)


    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Create New Cat</h1>
            <form onSubmit={handleSubmit} className={classes.form}>
                <label className={classes.label}>
                    First Name:
                    <input
                        type="text"
                        value={firstName}
                        onChange={onFirstNameInputChange}
                        className={classes.input}
                        required
                    />
                </label>

                <label className={classes.label}>
                    Last Name:
                    <input
                        type="text"
                        value={lastName}
                        onChange={onLastNameInputChange}
                        className={classes.input}
                        required
                    />
                </label>

                <label className={classes.label}>
                    Description:
                    <textarea
                        value={description}
                        onChange={onDescriptionInputChange}
                        className={classes.textarea}
                        required
                    />
                </label>

                <label className={classes.label}>
                    Image URL:
                    <input
                        type="url"
                        value={image}
                        onChange={onImageInputChange}
                        className={classes.input}
                        required
                    />
                </label>

                <button
                    type="submit"
                    className={classes.button}
                    disabled={loading}
                >
                    {loading ? 'Creating...' : 'Create Cat'}
                </button>

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

