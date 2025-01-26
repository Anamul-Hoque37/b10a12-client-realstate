import React from 'react';
import User from '../../Shared/User';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const MakeOffer = () => {
    const currentUser = User();
    const { name, title, image, location, _id } = useLoaderData();
    const { register, handleSubmit } = useForm();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        console.log(data)
        // now send the menu item data to the server with the image url
        const makeOffer = {
            title: data.title,
            location: data.location,
            name: data.name,
            image: image,
            buyerName: data.buyerName,
            buyerEmail: data.buyerEmail,
            offerPrice: parseInt(data.offerPrice),
            date: data.date,
            id: _id
        }
        // 
        const offerData = await axiosSecure.post('/bought', makeOffer);
        console.log(offerData.data)
        if (offerData.data.insertedId) {
            // show success popup
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is Offered the Property.`,
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/user/wishlist')
        }else{
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `${data.name} is Offered the Property already added.`,
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/user/wishlist')
        }
    };
    return (
        <div>
            <div className="hero p-8 bg-base-200 min-h-screen">
                <div className="hero-content bg-white rounded-md w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] flex-col">
                    <div className="card bg-white w-full shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className='grid grid-cols-1'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Property Title</span>
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue={title}
                                        placeholder="Property Title"
                                        {...register('title', { required: true })}
                                        required
                                        className="input input-bordered w-full" readOnly/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Property Location</span>
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue={location}
                                        placeholder="Property Location"
                                        {...register('location', { required: true })}
                                        required
                                        className="input input-bordered w-full" readOnly/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Agent Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Agent Name"
                                        {...register('name', { required: true })}
                                        required
                                        className="input input-bordered w-full" defaultValue={name} readOnly />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Buyer Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Buyer Name"
                                        {...register('buyerName', { required: true })}
                                        required
                                        className="input input-bordered w-full" defaultValue={currentUser.name} readOnly />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Buyer Email</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Property Location"
                                        {...register('buyerEmail', { required: true })}
                                        required
                                        className="input input-bordered w-full" defaultValue={currentUser.email} readOnly />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Offer Price</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Offer Price"
                                        {...register('offerPrice', { required: true })}
                                        className="input input-bordered w-full" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Buying Date</span>
                                    </label>
                                    <input
                                        type="date"
                                        placeholder="Date"
                                        {...register('date', { required: true })}
                                        className="input input-bordered w-full" />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-fuchsia-700 hover:bg-fuchsia-900">Offer Button</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeOffer;