import React from 'react';
import User from '../../Shared/User';
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProperty = () => {
    const currentUser = User()
    console.log(currentUser)

    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const menuItem = {
                title: data.title,
                location: data.location,
                name: data.name,
                email: data.email,
                priceMin: parseFloat(data.priceMin),
                priceMax: parseFloat(data.priceMax),
                image: res.data.data.display_url
            }
            // 
            const menuRes = await axiosSecure.post('/property', menuItem);
            console.log(menuRes.data)
            if (menuRes.data.insertedId) {
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${currentUser.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image url', res.data);
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
                                        placeholder="Property Title"
                                        {...register('title', { required: true })}
                                        required
                                        className="input input-bordered w-full" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Property Location</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Property Location"
                                        {...register('location', { required: true })}
                                        required
                                        className="input input-bordered w-full" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Agent Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Property Location"
                                        {...register('name', { required: true })}
                                        required
                                        className="input input-bordered w-full" defaultValue={currentUser?.name} readOnly />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Agent Email</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Property Location"
                                        {...register('email', { required: true })}
                                        required
                                        className="input input-bordered w-full" defaultValue={currentUser?.email} readOnly/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price min</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Price"
                                        {...register('priceMin', { required: true })}
                                        className="input input-bordered w-full" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price max</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Price"
                                        {...register('priceMax', { required: true })}
                                        className="input input-bordered w-full" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input {...register('image', { required: true })} type="file" className="file-input w-full border border-gray-300 max-w-full" />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-fuchsia-700 hover:bg-fuchsia-900">Add a property</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddProperty;