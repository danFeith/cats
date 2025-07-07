import React from "react";
import { useInputFieldStyles } from "./styles";

interface InputFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: "text" | "url" | "email" | "number" | "password";
    placeholder?: string;
    required?: boolean;
    className?: string;
}

export const InputField: React.FC<InputFieldProps> = React.memo((props) => {
    const { label, value, onChange, type = "text", placeholder, required = false, className } = props
    const classes = useInputFieldStyles()

    return (
        <label className={classes.label}>
            {label}
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                required={required}
                className={className}
            />
        </label>
    );
}
);
