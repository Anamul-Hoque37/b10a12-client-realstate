import React from 'react';

const MeetAgent = () => {
    const agents = [
        {
            id: 1,
            name: "John Doe",
            image: "https://i.ibb.co.com/gZqP551J/images-15.jpg",
            title: "Senior Real Estate Agent",
            experience: "10+ Years Experience",
            contact: "john@example.com",
        },
        {
            id: 2,
            name: "Jane Smith",
            image: "https://i.ibb.co.com/CK1X2BNx/images-16.jpg",
            title: "Luxury Property Specialist",
            experience: "8+ Years Experience",
            contact: "jane@example.com",
        },
        {
            id: 3,
            name: "Michael Brown",
            image: "https://i.ibb.co.com/y7JD20r/images-17.jpg",
            title: "Commercial Real Estate Expert",
            experience: "12+ Years Experience",
            contact: "michael@example.com",
        },
    ];
    return (
        <section className="py-10 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-6">Meet Our Agents</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {agents.map((agent) => (
                        <div key={agent.id} className="bg-white rounded-lg shadow-lg p-4 text-center">
                            <img
                                src={agent.image}
                                alt={agent.name}
                                className="w-24 h-24 mx-auto mb-4 rounded-full"
                            />
                            <h3 className="text-xl font-semibold">{agent.name}</h3>
                            <p className="text-gray-600">{agent.title}</p>
                            <p className="text-sm text-gray-500">{agent.experience}</p>
                            <p className="text-blue-500 mt-2">{agent.contact}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MeetAgent;