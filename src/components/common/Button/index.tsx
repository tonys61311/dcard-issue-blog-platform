// Button.tsx
import React, { ComponentPropsWithoutRef } from 'react';
import { IconType } from 'react-icons';
import styles from './Button.module.css'; // 假设使用 CSS Modules

export enum ButtonVariant {
    Default = "default",
    Outline = "outline",
    Text = "text",
}

type ButtonProps = {
    icon?: IconType;
    variant?: ButtonVariant;
} & ComponentPropsWithoutRef<'button'>;

const variantClassName = (variant: ButtonVariant) => {
    switch (variant) {
        case ButtonVariant.Default:
            return styles.default;
        case ButtonVariant.Outline:
            return styles.outline;
        case ButtonVariant.Text:
            return styles.text;
        default:
            return '';
    }
};

export default function Button({
    children,
    className = '',
    icon: Icon,
    variant = ButtonVariant.Default,
    ...props
}: ButtonProps) {
    const IconComponent = Icon && <Icon className={`text-lg ${children ? 'mr-3' : ''}`} /> ;

    return (
        <button
            className={`${variantClassName(variant)} ${className}`}
            {...props}
        >
            {IconComponent}
            {children}
        </button>
    );
}
