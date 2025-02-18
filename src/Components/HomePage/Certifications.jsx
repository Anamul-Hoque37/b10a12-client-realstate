import React from "react";

const certification = [
  {
    id: 1,
    title: "Certified Residential Specialist (CRS)",
    issuer: "National Association of Realtors",
    image: "https://i.ibb.co.com/FkSqDDBk/crs-logo.png",
  },
  {
    id: 2,
    title: "Accredited Buyer's Representative (ABR)",
    issuer: "Real Estate Buyer's Agent Council",
    image: "https://i.ibb.co.com/8nwDxRfL/ABR.jpg",
  },
  {
    id: 3,
    title: "Luxury Home Marketing Specialist (LHMS)",
    issuer: "The Institute for Luxury Home Marketing",
    image: "https://i.ibb.co.com/PvbKx3fF/images-1.png",
  },
];

const Certifications = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          Real Estate Certifications & Awards
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {certification.map((cert) => (
            <div
              key={cert.id}
              className="bg-gray-100 rounded-lg shadow-lg p-4 text-center"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-xl text-black font-semibold">{cert.title}</h3>
              <p className="text-gray-600">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
