import React from 'react';

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
        <div onClick={onClick} className={`button button-${type} inline-block px-6 py-2 rounded border-2 border-main-shade-900 text-center hover:text-main-shade-900 hover:bg-main-shade-50 transition duration-300 ease-in-out`}>
            <span>{children}</span>
        </div>
    );
};

export const ButtonLink: React.FC<ButtonLinkProps> = ({ type, link, children }) => {
    return (
        <div className={`button button-${type} inline-block px-6 py-2 rounded ${type === 'primary' && "border-2 border-main-shade-900 hover:text-main-shade-900 hover:bg-main-shade-50 transition duration-300 ease-in-out"}`}>
            <a href={link}>{children}</a>
        </div>
    );
};