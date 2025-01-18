import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import User from '../../Shared/User';

const ViewDetails = () => {
    const data = User()
    const { name, title, image, priceMin, priceMax, location, email, verifyStatus, _id } = useLoaderData();

    const axiosSecure = useAxiosSecure();
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
            UserEmail: data.email,
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
                title: `${data.name} is added to the Wishlist.`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    };
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={image}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="py-6">
                            {location}
                        </p>
                        <h1 className="text-3xl font-bold">{name}</h1>
                        <button onClick={handleAddWishlist} className="btn btn-primary">Add to Wishlist`
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;