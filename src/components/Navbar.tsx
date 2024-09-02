import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  const toggleMenu = () => setIsOpen(prevState => !prevState);

  // Define NavLink as a component
  const NavLink: React.FC<{ name: string; href_: string }> = ({ name, href_ }) => {
    const isActive = href_.substring(1) === activeSection;
    return (
      <a
        href={href_}
        className={`block px-4 py-2 lg:inline-block lg:px-2 lg:py-1 hover:text-main-shade-900 ${isActive ? 'font-semibold text-main-shade-900' : ''}`}
        onClick={() => setIsOpen(false)}
      >
        {name}
      </a>
    );
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjust this value to determine when a section is considered active
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="bg-main-shade-50 text-main-shade-600 sticky top-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="font-bold text-main-black">
          <a href="/">adrianbenard.com</a>
        </div>
        <button
          className="block lg:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          <span className="inline-block">☰</span>
        </button>
        <div className={`lg:flex lg:items-center lg:space-x-6 ${isOpen ? 'block' : 'hidden'} absolute lg:relative top-16 left-0 right-0 bg-main-shade-50 lg:bg-transparent lg:flex lg:space-x-6 lg:top-auto lg:left-auto lg:right-auto`}>
          <NavLink name="Accueil" href_="#hero" />
          <NavLink name="À propos" href_="#about" />
          <NavLink name="Projets" href_="#projects" />
          <NavLink name="Services" href_="#services" />
          <NavLink name="Avis" href_="#reviews" />
          <NavLink name="Contact" href_="#contact" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
