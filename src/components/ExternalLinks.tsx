// src/components/ExternalLinks.tsx
// src/components/LinkItem.tsx
import React from 'react';

interface LinkItemProps {
  name: string;
  href_: string;
  isMailto?: boolean;
  isExternal?: boolean;
  onClick?: () => void;
}

const LinkItem: React.FC<LinkItemProps> = ({ name, href_, isMailto, isExternal, onClick }) => {
  return (
    <div className="mb-3">
      <h4 className="uppercase text-main-shade-50">{name}</h4>
      <a
        className="text-main-white font-semibold"
        href={href_}
        onClick={onClick}
        target={isExternal ? '_blank' : '_self'}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...(isMailto ? { href_: `mailto:${href_}` } : {})}
      >
        {href_}
      </a>
    </div>
  );
};

const ExternalLinks: React.FC = () => {
  return (
    <div className="">
      <LinkItem
        name="Book a free call"
        href_="https://calendly.com/adrianbenard/free-call"
        onClick={() => {
          (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/adrianbenard/free-call' });
          return false;
        }}
      />
      <LinkItem
        name="Phone"
        href_="+330781021090"
        isMailto={false}
      />
      <LinkItem
        name="Email"
        href_="contact@adrianbenard.com"
        isMailto={true}
      />
      <LinkItem
        name="Linkedin"
        href_="https://www.linkedin.com/in/adrianbenard/"
        isExternal={true}
      />
      <LinkItem
        name="Github"
        href_="https://github.com/ADB10"
        isExternal={true}
      />
    </div>
  );
};

export default ExternalLinks;
