import React, { useEffect, useState } from 'react';
import { Project, PROJECTS } from '../projects';
import { ProjectCard } from './Cards';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Animation.css';  // Import the CSS for animations
import { EyeIcon } from '@heroicons/react/24/solid'

const sortedProjects = [...PROJECTS].sort((a, b) => b.year - a.year);

const allCategories = Array.from(new Set(sortedProjects.flatMap(project => project.categories)));

function calculateNumberOfLines(text: string, containerWidth: string) {
    // Create a temporary hidden div element
    const tempDiv = document.createElement('div');

    // Set the text content
    tempDiv.textContent = text;

    // Apply the necessary styles to the div
    tempDiv.style.fontSize = '0.875rem';
    tempDiv.style.width = containerWidth + 'px';
    tempDiv.style.lineHeight = '1.25rem';  // Use default line height
    tempDiv.style.position = 'absolute';  // Position it out of view
    tempDiv.style.visibility = 'hidden';  // Make it invisible
    tempDiv.style.whiteSpace = 'normal';  // Allow text wrapping

    // Append the div to the document body
    document.body.appendChild(tempDiv);

    // Calculate the number of lines
    const totalHeight = tempDiv.clientHeight;

    document.body.removeChild(tempDiv);

    return totalHeight;
}

const containerWidth = '464'; // in pixels

const Portfolio: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [visibleProjectsCount, setVisibleProjectsCount] = useState<number>(5);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(prevCategory => (prevCategory === category ? null : category));
        setVisibleProjectsCount(5);
    };

    const handleSeeMoreClick = () => {
        setVisibleProjectsCount(prevCount => prevCount + 1);
    };

    const filteredProjects = selectedCategory
        ? sortedProjects.filter(project => project.categories.includes(selectedCategory))
        : sortedProjects;

    const visibleProjects = filteredProjects.slice(0, visibleProjectsCount);

    const displayOneMoreProject = () => {
        if (visibleProjectsCount < filteredProjects.length) {
            return (
                <div onClick={handleSeeMoreClick} className="p-2 h-fit border-dashed border-2 rounded cursor-pointer text-center lg:p-4 lg:pt-3 lg:mb-4 hover:border-main-shade-300">
                    <EyeIcon className="w-8 h-8 mx-auto text-main-shade-400 mb-2" />
                    <p className="text-sm text-main-shade-600">Afficher un autre projet</p>
                </div>
            );
        } else {
            return null;
        }
    };

    const displayProjectsDesktop = (projects: Project[]) => {
        const column1: Project[] = [];
        const column2: Project[] = [];
        let column1_length: number = 0;
        let column2_length: number = 0;

        projects.forEach(project => {
            if (column1_length <= column2_length && column1.length <= column2.length) {
                column1.push(project);
                column1_length += calculateNumberOfLines(project.description, containerWidth) + 99; // +99 for the full card
            } else {
                column2.push(project);
                column2_length += calculateNumberOfLines(project.description, containerWidth) + 99;
            }
        });

        return (
            <div className="flex gap-2 lg:gap-4">
                <div className="w-1/2">
                    {column1.map(project => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                    {
                        column1_length <= column2_length && displayOneMoreProject()
                    }
                </div>
                <div className="w-1/2">
                    {column2.map(project => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                    {
                        column1_length > column2_length && displayOneMoreProject()
                    }
                </div>
            </div>
        );
    };

    const displayProjectsPhone = (projects: Project[]) => (
        <div className="flex flex-col gap-2">
            {projects.map(project => (
                <ProjectCard project={project} />
            ))}
            <div className='mt-2'>
                {displayOneMoreProject()}
            </div>
        </div>

    );

    return (
        <div>
            <div className="mb-4">
                <span className="font-light uppercase text-sm text-main-shade-400">Filter</span>
                <div className="mb-4 flex flex-wrap gap-1">
                    <button
                        className={`px-3 py-1 text-sm rounded-full ${selectedCategory === null ? 'bg-main-color text-white' : 'bg-main-shade-900 text-white'}`}
                        onClick={() => setSelectedCategory(null)}
                    >
                        All
                    </button>
                    {allCategories.map(category => (
                        <button
                            key={category}
                            className={`px-3 py-1 text-sm rounded-full ${selectedCategory === category ? 'bg-main-color text-white' : 'bg-main-shade-900 text-white'}`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {screenWidth < 1024
                ? displayProjectsPhone(visibleProjects)
                : displayProjectsDesktop(visibleProjects)}

            {/* {visibleProjects.length < filteredProjects.length && (
                <div className="text-center mt-4">
                    <button
                        className="px-4 py-1 bg-main-shade-900 text-main-shade-50 rounded-full"
                        onClick={handleSeeMoreClick}
                    >
                        Voir plus
                    </button>
                </div>
            )} */}
        </div>
    );
};

export default Portfolio;
