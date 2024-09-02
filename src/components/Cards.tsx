import React, { Children } from 'react';
import { Project } from '../projects';
import { Review } from '../reviews';
import './Animation.css';  // Import CSS for animations

interface ExperienceCardProps {
  stat: string,
  what: string,
  subject: string,
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ stat, what, subject }) => {
  return (
    <div className={`text-left px-2 flex flex-col`}>
      <p className='text-main-shade-400 uppercase'><span className="text-kanit text-highlight text-3xl">{stat}</span> {what}</p>
      <p className='uppercase  font-bold text-main-shade-600'>{subject}</p>
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="p-2 bg-main-white h-fit shadow rounded lg:p-4 lg:pt-3 lg:mb-4">
      <h4 className="text-xl font-bold">{project.name}</h4>
      <div className="my-2 h-[2px] w-full bg-gradient-to-r from-main-color to-white rounded-full"></div>
      <p className='text-sm'>{project.description}</p>
      {/* <p className="text-sm text-gray-600">{project.year} | {project.type}</p> */}
      <div className="mt-2 flex flex-wrap gap-2">
        {project.languages.map(language => (
          <span key={language} className="bg-main-shade-100 text-main-shade-700 rounded-full px-2 py-1 text-sm hover:bg-main-shade-200 cursor-default">
            {language}
          </span>
        ))}
      </div>
      {/* <div className="mt-2">
        {project.categories.map(category => (
          <span key={category} className="bg-blue-200 text-blue-800 rounded px-2 py-1 text-sm mr-2">
            {category}
          </span>
        ))}
      </div> */}
    </div>
  );
};

interface ReviewCardProps {
  review: Review;
  ref?: React.Ref<HTMLDivElement>; // Add the ref prop with the correct type
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review, ref }) => {

  const RenderStar = () => {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 6.15283L10.4963 5.33753L7.97165 0.379517L5.49551 5.36197L0 6.23089L3.97339 10.1255L3.10163 15.6206L8.03342 13.0451L12.9902 15.5723L12.0648 10.086L16 6.15283Z" fill="#78E1A3" stroke="#78E1A3" strokeWidth="0.422399" />
      </svg>
    )
  };

  const renderStars = () => {
    return <div className='flex gap-1'>
      <RenderStar />
      <RenderStar />
      <RenderStar />
      <RenderStar />
      <RenderStar />
    </div>
  };

  return (
    <div className="rounded-xl border border-main-shade-200 fade p-2 bg-main-white hover:border-main-color h-fit lg:p-4">
      <div className="header flex justify-between mb-2">
        <h4 className="font-bold">{review.name}</h4>
        <p className="text-main-color">{renderStars()}</p>
      </div>
      <p className='text-sm'>{review.review}</p>
    </div>
  );
};