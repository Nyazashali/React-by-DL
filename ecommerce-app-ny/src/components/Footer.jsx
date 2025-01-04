function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto px-4">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* About Us */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">About Us</h4>
                        <p className="text-sm text-gray-400">
                            Your Company is a leading provider of modern solutions. We aim to
                            deliver high-quality services and build lasting relationships.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="/about"
                                    className="text-gray-400 hover:text-white"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/services"
                                    className="text-gray-400 hover:text-white"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="text-gray-400 hover:text-white"
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/privacy-policy"
                                    className="text-gray-400 hover:text-white"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="/web-development"
                                    className="text-gray-400 hover:text-white"
                                >
                                    Web Development
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/app-development"
                                    className="text-gray-400 hover:text-white"
                                >
                                    App Development
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/seo-services"
                                    className="text-gray-400 hover:text-white"
                                >
                                    SEO Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/marketing"
                                    className="text-gray-400 hover:text-white"
                                >
                                    Digital Marketing
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>1234 Example Street, City, Country</li>
                            <li>Phone: (123) 456-7890</li>
                            <li>Email: info@yourcompany.com</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700 pt-6">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <p className="text-sm text-gray-400">
                            &copy; {currentYear} Your Company Name. All rights reserved.
                        </p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white"
                            >
                                Facebook
                            </a>
                            <a
                                href="https://www.twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white"
                            >
                                Twitter
                            </a>
                            <a
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;