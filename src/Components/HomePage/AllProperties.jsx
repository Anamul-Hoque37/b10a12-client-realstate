import React, { useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import User from '../../Shared/User';
import { Link } from 'react-router-dom';


const AllProperties = () => {
    const currentUser = User();
    const axiosSecure = useAxiosSecure();
    const [search, setSearch] = useState('')
    const verifyStatus = 'verify';

    const { data: properties = [] } = useQuery({
        queryKey: ['verifyStatus', verifyStatus, search],
        queryFn: async () => {
            const res = await axiosSecure.get(`/properties?verifyStatus=${verifyStatus}&search=${search}`);
            return res.data;
        }
    }) 

    const [sortOrder, setSortOrder] = useState("default"); // "asc", "desc", "default"
    const sortedProperty = [...properties].sort((a, b) => {
        if (sortOrder === "asc") return a.priceMin - b.priceMin;
        if (sortOrder === "desc") return b.priceMax - a.priceMax;
        return 0; // Default order
    });
    return (
        <div className='min-h-screen p-4'>
            <div className='flex flex-col md:flex-row justify-center items-center gap-5 py-5'>
                <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-80 focus-within:border-blue-400 focus-within:ring-blue-300'>
                    <input
                        className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                        type='text'
                        name='search'
                        onKeyUp={(e) => setSearch(e.target.value)}
                        // onChange={handleSearchChange}
                        placeholder='Search By Location'
                        aria-label='Search By Location'
                    />
                    <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                        Search
                    </button>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center md:justify-between'>
                <h1 className="text-2xl font-bold mb-4">All Properties: {properties.length}</h1>
                {/* Dropdown for Sorting */}
                <div className="mb-4 flex justify-center bg-white p-2 rounded-md items-center gap-2">
                    <label htmlFor="sort" className="block mb-2 text-xl font-bold text-gray-700">
                        Sort by Price
                    </label>
                    <select
                        id="sort"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="default">Default Order</option>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    sortedProperty.map((property) => (
                        <div key={property._id} className="card bg-base-100 shadow-xl">
                            <figure className='w-full h-1/2'>
                                <img
                                    className='h-full w-full'
                                    src={property.image}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body bg-white h-1/2">
                                <h2 className="card-title">
                                    Verification!
                                    <div className="badge badge-secondary bg-purple-500 p-3">
                                        {property?.verifyStatus === 'verify' ? "verified" : property?.verifyStatus === 'reject' ? "rejected" : "pending"}
                                    </div>
                                </h2>
                                <div className='flex justify-between items-start'>
                                    <div className='flex flex-col gap-0'>
                                        <p>{property.title}</p>
                                        <p>{property.location}</p>
                                        <p>{property.name}</p>
                                        <p>{property?.priceMin} _ {property?.priceMax}</p>
                                    </div>
                                    <div className='w-16 h-16 border'>
                                        <img className='h-full w-full' src={currentUser.image} alt={currentUser.name} />
                                    </div>
                                </div>
                                <div className="card-actions justify-end">
                                    <Link to={`/view-details/${property._id}`}>
                                        <button className="btn btn-primary bg-fuchsia-700 hover:bg-fuchsia-900">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AllProperties;