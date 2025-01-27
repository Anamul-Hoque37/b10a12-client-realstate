import React from "react";

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      image: "https://i.ibb.co.com/2g1wzV6/download-18.jpg", // Replace with property image URL
      title: "Luxury Villa in Beverly Hills",
      price: "$500,000",
      description: "A stunning villa with breathtaking views and modern amenities.",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/fxH56hy/download-19.jpg",
      title: "Cozy Apartment in New York",
      price: "$450,000",
      description: "A stylish apartment in the heart of the city with excellent connectivity.",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/7GN4vXp/download-20.jpg",
      title: "Beachfront House in Malibu",
      price: "$300,000",
      description: "Wake up to the sound of waves in this beautiful beachfront home.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Featured Properties
        </h2>
        <p className="text-gray-600 text-center mt-4">
          Discover your dream home from our handpicked selection of luxury properties.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {property.title}
                </h3>
                <p className="text-gray-600 mt-2">{property.description}</p>
                <p className="text-lg font-bold text-blue-600 mt-4">
                  {property.price}
                </p>
                {/* <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-300">
                  View Details
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
