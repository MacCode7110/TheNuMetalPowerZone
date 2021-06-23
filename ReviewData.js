//We can create a javascript file entirely dedicated to storing data that can be statically loaded onto the website
    //In this case, band reviews can be statically loaded
    //We can declared a variable of type array and allow it to hold a list of objects - each object can hold a set of key/value pairs

    const reviewsList = [ //a constant array of key-value pairs
        {
            id: 'r1',
            title: 'Tallah - Matriphagy',
            review: '...',
            date: '...',
            image: 'images/Tallah Matriphagy Cover.jpg',
            isMetal: true,
        },
        
        {
            id: 'r2',
            title: 'Dropout Kings - Audiodope',
            review: '...',
            date: '...',
            image: 'images/Dropout Kings Audiodope.jpg',
            isMetal: true,
        },
        
        {
            id: 'r3',
            title: 'Dropout Kings - GlitchGang',
            review: '...',
            date: '...',
            image: 'images/Dropout Kings Glitchgang.jpg',
            isMetal: true,
        },
        
        {
            id: 'r4',
            title: 'Weight of Silence - Give the People What they Want',
            review: '...',
            date: '...',
            image: 'images/The Weight of Silence Give The People What They Want.jpg',
            isMetal: true,
        },
        
        ];
        
        export function getReviewByID(id)
        {
            return reviewsList.find(review => (review.id === id)); //if the parameter id is strictly equal to the current review's id in the array of reviews, then true is returned and sent to the find function as an argument, and an indicator that the corresponding review has been located.
        }
        
        export function getMetalReviews()
        {
            return reviewsList.filter((review) => review.isMetal);
        }
        