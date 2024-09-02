// src/components/ExternalLinks.tsx
// src/components/LinkItem.tsx
import React from 'react';

interface LinkItemProps {
  label: string;
  linkName: string;
  href_?: string;
  isExternal?: boolean;
  onClick?: () => void;
}

const LinkItem: React.FC<LinkItemProps> = ({ label, linkName, href_, isExternal, onClick }) => {
  return (
    <div className="mb-3 lg:text-lg">
      <h4 className="uppercase text-main-shade-50">{label}</h4>
      <a
        className="text-main-white font-semibold"
        href={href_}
        onClick={onClick}
        target={isExternal ? '_blank' : '_self'}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {linkName}
      </a>
    </div>
  );
};

const ExternalLinks: React.FC = () => {
  return (
    <div className="">
      <LinkItem
        label="Book a free call"
        linkName="calendly.com/adrianbenard/free-call"
        onClick={() => {
          (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/adrianbenard/free-call' });
          return false;
        }}
      />
      <LinkItem
        label="Phone"
        linkName="+33 07 81 02 10 90"
        href_="tel:+330781021090"
      />
      <LinkItem
        label="Email"
        linkName="contact@adrianbenard.com"
        href_="mailto:contact@adrianbenard.com"
      />
      <LinkItem
        label="Linkedin"
        linkName="linkedin.com/in/adrianbenard/"
        href_="https://www.linkedin.com/in/adrianbenard/"
        isExternal={true}
      />
      <LinkItem
        label="Github"
        linkName="github.com/ADB10"
        href_="https://github.com/ADB10"
        isExternal={true}
      />
    </div>
  );
};

export default ExternalLinks;
