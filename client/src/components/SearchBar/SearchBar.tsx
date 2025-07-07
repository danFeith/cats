import React, { memo } from 'react';
import { useSearchBarStyles } from './styles';
import { useDebouncedCallback } from 'use-debounce';

const SEARCHBAR_PLACEHOLDER = "Search cats by name or mouse...";
const DEBOUNCE_DELAY = 500;

interface SearchBarProps {
    onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = memo(({ onSearch }) => {
    const classes = useSearchBarStyles();
    const debouncedSearch = useDebouncedCallback(onSearch, DEBOUNCE_DELAY);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        debouncedSearch(e.target.value);
    };

    return (
        <div className={classes.container}>
            <input
                type="text"
                placeholder={SEARCHBAR_PLACEHOLDER}
                onChange={handleInputChange}
                className={classes.input}
            />
        </div>
    );
});
