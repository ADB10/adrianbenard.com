import React, { Children } from 'react';

interface ButtonActionProps {
    onClick: () => void;
    type?: 'primary' | 'secondary';
    children: React.ReactNode;
}

interface ButtonLinkProps {
    type?: 'primary' | 'secondary';
    link?: string
    children: React.ReactNode;
}

export const ButtonAction: React.FC<ButtonActionProps> = ({ onClick, type, children }) => {
    return (
        <div onClick={onClick} className={`button button-${type} inline-block px-6 py-2 rounded`}>
            <span>{children}</span>
        </div>
    );
};

export const ButtonLink: React.FC<ButtonLinkProps> = ({ type, link, children }) => {
    return (
        <div className={`button button-${type} inline-block px-6 py-2 rounded`}>
            <a href={link}>{children}</a>
        </div>
    );
};

