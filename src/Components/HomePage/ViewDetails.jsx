import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import User from '../../Shared/User';

const ViewDetails = () => {
    const currentUser = User()
    const { name, title, image, priceMin, priceMax, location, email, verifyStatus, _id } = useLoaderData();
    const timeStamp = new Date();
    const axiosSecure = useAxiosSecure();
    const [isModalOpen, setModalOpen] = useState(false);
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0);
    const handleAddWishlist = async () => {
        // now send the menu item data to the server with the image url
        const wishlist = {
            title: title,
            location: location,
            name: name,
            email: email,
            priceMin: priceMin,
            priceMax: priceMax,
            image: image,
            verifyStatus: verifyStatus,
            UserEmail: currentUser.email,
            id: _id
        }
        // 
        const addWishlist = await axiosSecure.post('/wishlist', wishlist);
        console.log(addWishlist.data)
        if (addWishlist.data.insertedId) {
            // show success popup
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${currentUser.name} is added to the Wishlist.`,
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `${currentUser.name} is already added to the Wishlist.`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    };
    const handleAddReview = async () => {
        if (!reviewText || rating <= 0) {
            alert('Please provide a review and rating.');
            return;
        }
        // now send the menu item data to the server with the image url
        const reviewList = {
            description: reviewText,
            rating: rating,
            title: title,
            location: location,
            name: name,
            email: email,
            priceMin: priceMin,
            priceMax: priceMax,
            image: image,
            verifyStatus: verifyStatus,
            reviewEmail: currentUser.email,
            reviewName: currentUser.name,
            reviewImage: currentUser.image,
            id: _id,
            createdAt: timeStamp
        }
        // 
        const addReviewList = await axiosSecure.post('/review', reviewList);
        console.log(addReviewList.data)
        if (addReviewList.data.insertedId) {
            // show success popup
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${currentUser.name} is added to the Review.`,
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `${currentUser.name} is already added to the Review.`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    };
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen flex flex-col p-8">
                <p className='text-2xl text-center font-medium'>Describe bellow details of {title}</p>
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={image}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="text-xl font-bold">
                            {location}
                        </p>
                        <h1 className="text-3xl font-bold">{name}</h1>
                        <div className='flex gap-6'>
                            <button onClick={handleAddWishlist} className="btn btn-primary">Add to Wishlist
                            </button>
                            {/* <button onClick={handleAddReview} className="btn btn-primary">Add A Review
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Add a Review Button */}
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setModalOpen(true)}>
                Add a Review
            </button>

            {/* Add Review Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-lg font-bold mb-4">Add a Review</h2>
                        <textarea
                            className="w-full p-2 border rounded mb-4"
                            rows="4"
                            placeholder="Write your review here..."
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                        ></textarea>
                        <input
                            type="number"
                            className="w-full p-2 border rounded mb-4"
                            placeholder="Rating (1-5)"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                        />
                        <div className="flex justify-end">
                            <button
                                className="px-4 py-2 bg-gray-400 text-white rounded mr-2"
                                onClick={() => setModalOpen(false)}
                            >
                                Cancel
                            </button>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleAddReview}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ViewDetails;