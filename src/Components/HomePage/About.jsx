import React from 'react';

const About = () => {
    return (
        <section className="py-10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0">
                    <img
                        src="https://i.ibb.co.com/842CSjPp/realestate.jpg"
                        alt="About Us"
                        className="rounded-lg shadow-lg w-full"
                    />
                </div>
                <div className="md:w-1/2  md:pl-10">
                    <div className='p-4 rounded-md bg-slate-50'>
                        <h2 className="text-3xl text-black font-bold mb-4">About Us</h2>
                        <p className="text-black mb-4">
                            We are a trusted real estate agency committed to helping you find your dream home.
                            With over 10 years of experience, we specialize in residential and commercial properties, ensuring
                            a seamless buying and selling experience.
                        </p>
                        <p className="text-black">
                            Our mission is to provide top-notch service, expert guidance, and a smooth transaction process.
                            Whether you're buying, selling, or investing, we're here to support you every step of the way.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;