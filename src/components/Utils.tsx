import React from 'react';

interface SectionTitleProps {
    color?: 'light' | 'dark';
    center?: boolean;
    title: React.ReactNode;
    subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, color = 'light', subtitle, center }) => {
    return (
        <div className={`${center && 'text-center'}`}>
          <h2 className={`text-xl lg:text-3xl lg:mb-4 ${color === 'light' ? 'text-main-black' : 'text-main-white'}`}>
            {title}
          </h2>
          <p className={`${center && 'lg:max-w-2xl lg:mx-auto'} lg:pb-4`}>
            {subtitle}
          </p>
        </div>
    );
};