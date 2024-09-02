// src/components/ReviewList.tsx
import React, { useEffect, useState } from 'react';
import { Review, REVIEWS } from '../reviews';
import { ReviewCard } from './Cards';
import { EyeIcon } from '@heroicons/react/24/solid';

// Utility function to shuffle an array
// function shuffleArray(array: Review[]): Review[] {
//     return array
//         .map(value => ({ value, sort: Math.random() }))
//         .sort((a, b) => a.sort - b.sort)
//         .map(({ value }) => value);
// }

const Reviews: React.FC = () => {
    const [visibleReviewsCount, setVisibleReviewsCount] = useState<number>(10);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Sort reviews by star rating in descending order
    // const shuffledReviews = shuffleArray(REVIEWS);

    // Get the currently visible reviews based on the count
    const visibleReviews = REVIEWS.slice(0, visibleReviewsCount);

    const handleSeeMoreClick = () => {
        setVisibleReviewsCount(prevCount => prevCount + 3);
    };

    const displayReviewsDesktop = (reviews: Review[]) => {
        const column1: Review[] = [];
        const column2: Review[] = [];
        const column3: Review[] = [];
        let column1_length: number = 0;
        let column2_length: number = 0;
        let column3_length: number = 0;

        // reviews.forEach(review => {
        //     if (column1_length <= column2_length) {
        //         if (column1_length <= column3_length) {
        //             column1.push(review);
        //             column1_length += review.review.length + review.name.length;
        //         } else {
        //             column3.push(review);
        //             column3_length += review.review.length + review.name.length;
        //         }
        //     } else {
        //         if (column2_length <= column3_length) {
        //             column2.push(review);
        //             column2_length += review.review.length + review.name.length;
        //         } else {
        //             column3.push(review);
        //             column3_length += review.review.length + review.name.length;
        //         }
        //     }
        // });

        reviews.forEach(review => {
            if (column1_length <= column2_length) {
                if (column1_length <= column3_length) {
                    column1.push(review);
                    column1_length += 2;
                } else {
                    column3.push(review);
                    column3_length += 2;
                }
            } else {
                if (column2_length <= column3_length) {
                    column2.push(review);
                    column2_length += 1.5;
                } else {
                    column3.push(review);
                    column3_length += 2;
                }
            }
        });

        return (
            <div className="flex gap-2 lg:gap-4">
                <div className="w-1/3 flex flex-col justify-center gap-2 lg:gap-4">
                    {column1.map((review, index) => (
                        <ReviewCard key={index} review={review} />
                    ))}
                </div>
                <div className="w-1/3 flex flex-col justify-center gap-2 lg:gap-4">
                    {column2.map((review, index) => (
                        <ReviewCard key={index} review={review} />
                    ))}
                </div>
                <div className="w-1/3 flex flex-col justify-center gap-2 lg:gap-4">
                    {column3.map((review, index) => (
                        <ReviewCard key={index} review={review} />
                    ))}
                    <div onClick={handleSeeMoreClick} className="p-2 h-fit border-dashed border border-main-shade-200 rounded-xl cursor-pointer text-center lg:p-4 lg:pt-3 lg:mb-4 hover:bg-main-white hover:border-solid">
                        <EyeIcon className="w-8 h-8 mx-auto text-main-shade-400 mb-2"/>
                        <p className="text-sm text-main-shade-600">Voir tous mes avis</p>
                    </div>
                </div>
            </div>
        );
    };

    const displayProjectsPhone = (reviews: Review[]) => {
        return (
            <div className='flex flex-col gap-2'>
                {reviews.map((review, index) => (
                    <ReviewCard key={index} review={review} />
                ))}
            </div>
        );
    };

    return (
        <div>
            {screenWidth < 1024
                ? displayProjectsPhone(visibleReviews)
                : displayReviewsDesktop(visibleReviews)}

            {/* <div className="review-list lg:grid lg:grid-cols-3 lg:gap-4">
                {visibleReviews.map((review, index) => (
                    <ReviewCard key={index} review={review} />
                ))}
            </div> */}
            {/* {visibleReviews.length < shuffledReviews.length && (
                <div className="text-center mt-4 lg:mt-0">
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

export default Reviews;
