import React, { Children } from 'react';
import { Project } from '../projects';
import { Review } from '../reviews';
import './Animation.css';  // Import CSS for animations
import { Service } from '../services';
import { ButtonAction } from './Button';

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
      <h4 className="font-bold">{project.name}</h4>
      <div className="my-2 h-[2px] w-full bg-gradient-to-r from-main-color to-white rounded-full"></div>

      <p className='text-sm'><span className="text-sm text-main-shade-400">{project.year}</span> | {project.description}</p>
      {/* <p className="text-sm text-gray-600">{project.year} | {project.type}</p> */}
      <div className="mt-2 flex flex-wrap gap-2">
        {project.languages.map(language => (
          <span key={language} className="text-xs bg-main-shade-100 text-main-shade-700 rounded-full px-2 py-1 text-sm hover:bg-main-shade-200 cursor-default transition duration-300 ease-in-out">
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
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {

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
        <div className="text-main-color">{renderStars()}</div>
      </div>
      <p className='text-sm'>{review.review}</p>
    </div>
  );
};


export interface ServiceCardProps {
  service: Service;
  buttonText?: string;
  buttonAction?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, buttonText, buttonAction }) => {
  return (
    <div className="bg-main-white text-main-shade-700 text-center rounded-lg shadow flex flex-col justify-between p-2 pt-4 lg:w-1/3 cursor-pointer hover:shadow-2xl transition duration-300 ease-in-out">
      <div className="header flex flex-col">
        <h5 className="text-main-shade-700 font-bold mb-2">{service.name}</h5>
        <p className="text-main-shade-600 mb-2 text-sm">{service.description}</p>
        <div className="text-center mx-auto">
          <p className="bg-main-color px-5 py-1 rounded-full text-center w-fit text-main-white font-semibold">
            {service.price} € / {service.pricePer}
          </p>
        </div>
      </div>
      <div className="bottom flex flex-col">
        <ul className="my-2 list-none text-left text-main-shade-600">
          {service.features.map((feature, index) => (
            <li className="bg-main-shade-50 px-2 py-1 mb-1 rounded text-xs hover:scale-105 transition duration-300" key={index}>{feature}</li>
          ))}
        </ul>
        <ButtonAction
          onClick={buttonAction || (() => { })}
          type="primary"
        >
          {buttonText}
        </ButtonAction>
      </div>
    </div>
  );
};