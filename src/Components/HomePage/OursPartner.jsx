import React from 'react';

const OursPartner = () => {
    const partners = [
        {
          id: 1,
          name: "Real Estate Association",
          logo: "https://i.ibb.co.com/844ZRVmK/images-18.jpg",
        },
        {
          id: 2,
          name: "Top Mortgage Lenders",
          logo: "https://i.ibb.co.com/TDNJ1pcn/images-2.png",
        },
        {
          id: 3,
          name: "Luxury Homes Network",
          logo: "https://i.ibb.co.com/B5pV6ZN9/images-1.png",
        },
      ];
    return (
        <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Our Partners & Affiliations</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {partners.map((partner) => (
              <div key={partner.id} className="bg-gray-100 rounded-lg shadow-lg p-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-24 h-24 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">{partner.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default OursPartner;