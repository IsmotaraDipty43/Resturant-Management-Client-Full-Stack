import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';

const AddReview = () => {
    const axiosPublic = useAxiosPublic();
    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [rating, setRating] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const reviewData = {
            name,
            details,
            rating: parseInt(rating), // Ensure the rating is a number
        };

        try {
            const response = await axiosPublic.post('/reviews', reviewData);

            if (response.status === 201) {
                setName('');
                setDetails('');
                setRating('');
                Swal.fire({
                    icon: 'success',
                    title: 'Thank you!',
                    text: 'Your review has been submitted.',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: 'Something went wrong. Please try again.',
                });
            }
        } catch (error) {
            console.error('Error submitting review:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Failed to connect to the server.',
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
                <h2 className="text-2xl font-bold mb-4">Add a Review</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <textarea
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        placeholder="Write your review here..."
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        required
                    />
                    <input
                        type="number"
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        placeholder="Rating (1-5)"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        min="1"
                        max="5"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    >
                        Submit Review
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddReview;
