import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white">
            <div className="max-w-7xl mx-auto px-6 py-10 sm:px-6 lg:px-8">
                {/* Top Section */}
                <div className="hidden pb-3 sm:block md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">About Us</h2>
                        <p className="text-gray-400 text-sm">
                        Welcome to Dreamnest, where your dream home becomes a reality. We are a trusted real estate firm dedicated to connecting you with the perfect space to live, grow, and thrive.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                        <ul className="text-gray-400 text-sm space-y-2">
                            <li>
                                <a href="/about" className="hover:text-blue-400">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/find-tutors" className="hover:text-blue-400">
                                    All Properties
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-blue-400">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="/faq" className="hover:text-blue-400">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Contact</h2>
                        <ul className="text-gray-400 text-sm space-y-2">
                            <li>Email: <a href="mailto:Anamul.eee73@gmail.com" className="hover:text-blue-400">Anamul.eee73@gmail.com</a></li>
                            <li>Phone: +88017377102037</li>
                            <li>Address: 1664, Rupshi, Rupgang, Narayanganj, Bangladesh.</li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-400"
                            >
                                <i className="fab fa-facebook-f"></i> Facebook
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-400"
                            >
                                <i className="fab fa-twitter"></i> Twitter
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-400"
                            >
                                <i className="fab fa-instagram"></i> Instagram
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Bottom Section */}
                <div className="flex flex-col sm:flex-row justify-between items-center border-t-2 border-gray-300 pt-2">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Dreamnest. All Rights Reserved.
                    </p>
                    <ul className="flex space-x-4 text-gray-400 text-sm">
                        <li>
                            <a href="/privacy" className="hover:text-blue-400">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="/terms" className="hover:text-blue-400">
                                Terms of Service
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;