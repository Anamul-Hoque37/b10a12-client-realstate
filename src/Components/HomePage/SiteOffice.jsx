import React from "react";

const SiteOffice = () => {
    return (
        <section className="bg-gray-100 py-16 px-4 sm:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="text-center lg:text-left">
                    <h2 className="text-3xl font-bold text-gray-800">Our Office</h2>
                    <p className="text-gray-600 mt-4">
                        Visit us at our office to discuss your dream property and explore the options available. Our team is here to assist you with all your real estate needs.
                    </p>
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                        <p className="text-gray-600 mt-2">123 Real Estate Avenue, Rupgang, Narayanganj.</p>
                        <h3 className="text-lg font-semibold text-gray-800 mt-6">Contact</h3>
                        <p className="text-gray-600 mt-2">Phone: (+88) 01737712037</p>
                        <p className="text-gray-600">Email: anamul@realestate.com</p>
                    </div>
                </div>

                {/* Map Embed */}
                <div className="w-full h-64 lg:h-full">
                    <iframe
                        title="Office Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.4350955847615!2d90.55342151445504!3d23.784529392805054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b93485fffc4d%3A0x833e2a0f65b12f5b!2sRupshi%2C%20Rupganj%2C%20Narayanganj!5e0!3m2!1sen!2sbd!4v1693435154843!5m2!1sen!2sbd"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default SiteOffice;
