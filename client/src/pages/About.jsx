import React from 'react';
import Header from '../components/HeaderProfile'; // or your general Header
import Footer from '../components/Footer';

export default function About() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-gray-900 text-white py-20">
                    <div className="max-w-6xl mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Lead CRM Lite</h1>
                        <p className="text-lg text-gray-300">Simplifying lead management for businesses of all sizes.</p>
                    </div>
                </section>

                {/* What We Do */}
                <section className="py-16 px-6 bg-white">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
                        <p className="text-gray-600 text-md">
                            Lead CRM Lite is built to streamline your customer relationship workflows.
                            From capturing leads to managing client follow-ups, we provide a simple,
                            intuitive interface that gets out of your way and lets you focus on what matters — growth.
                        </p>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="bg-gray-100 py-16 px-6">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-2xl font-semibold mb-10">Why Choose Us?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                                <h3 className="font-semibold text-lg mb-2">Simple & Fast</h3>
                                <p className="text-gray-600">Get started in minutes. No bloated features. Just clean lead management.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                                <h3 className="font-semibold text-lg mb-2">Secure & Reliable</h3>
                                <p className="text-gray-600">Your data is protected with top-tier security and always backed up.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                                <h3 className="font-semibold text-lg mb-2">Open & Friendly</h3>
                                <p className="text-gray-600">We're a transparent, responsive team here to support you.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Company Association Section */}
                <section className="bg-white py-16 px-6">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-2xl font-semibold mb-4">Built with Mentorship from Intern Pro</h2>
                        <p className="text-gray-600 text-md mb-6">
                            Lead CRM Lite was developed under the guidance and mentorship of <strong>Intern Pro</strong>,
                            a platform dedicated to helping students and early professionals grow through real-world experience and projects.
                        </p>

                        <div className="flex justify-center">
                            <a
                                href="https://internpro.tech" // replace with real site if needed
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-gray-900 text-white py-2 px-6 rounded hover:bg-gray-800 transition"
                            >
                                Learn More About Intern Pro
                            </a>
                        </div>
                    </div>
                </section>


                {/* CTA Section */}
                <section className="bg-blue-600 text-white py-12 px-6 text-center">
                    <h2 className="text-2xl font-semibold mb-4">Ready to get started?</h2>
                    <p className="mb-6">Join hundreds of users managing leads better, faster, and smarter.</p>
                    <a
                        href="/register"
                        className="inline-block bg-white text-blue-600 font-medium py-2 px-6 rounded hover:bg-gray-100 transition"
                    >
                        Create an Account
                    </a>
                </section>
            </main>

            <Footer />
        </div>
    );
}
