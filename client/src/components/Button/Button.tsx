import React, { type ReactNode } from "react";

interface IButtonProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
    disabled?: boolean
}

export const Button = React.memo(({ children, onClick, className, type, disabled }: IButtonProps) => {
    return <button disabled={disabled} type={type} className={className} onClick={onClick}>{children}</button>
})

