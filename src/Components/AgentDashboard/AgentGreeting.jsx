import React from 'react';

const AgentGreeting = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-500 via-slate-200 to-purple-300 flex items-center justify-center">
            <div className="bg-white p-10 rounded-2xl shadow-2xl text-center max-w-md">
                <h1 className="text-4xl font-bold text-gray-800">Welcome, Agent!</h1>
                <p className="text-gray-600 mt-4">
                    We’re glad to have you on board. Stay focused, and let’s achieve great things together.
                </p>
            </div>
        </div>
    );
};

export default AgentGreeting;