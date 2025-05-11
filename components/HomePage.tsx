"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Globe, GraduationCap, Users, Building } from "lucide-react";

export default function HomePage() {
    return (
        <div className="min-h-screen overflow-x-hidden bg-black text-white">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center px-4 py-10 relative">
                <motion.div
                    className="text-center space-y-6 max-w-3xl mx-auto pt-24 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-wider uppercase">
                        physics society
                        <br />
                        horizon
                    </h1>
                </motion.div>

                {/* Moon Image */}
                <div className="relative border-2 border-white w-full max-w-2xl h-64 md:h-96 mx-auto">
                    <motion.img
                        src="https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9vbnxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Moon"
                        className="w-full h-full object-contain"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                    />
                </div>

                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Grow With Us
                    </h2>
                </motion.div>


            </section>

            {/* Features Section */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <motion.div
                            className="flex flex-col items-center space-y-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="h-16 w-16 rounded-full border-2 border-white flex items-center justify-center mb-2">
                                <Globe className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold">Publishing</h3>
                            <p className="text-sm text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </motion.div>

                        <motion.div
                            className="flex flex-col items-center space-y-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="h-16 w-16 rounded-full border-2 border-white flex items-center justify-center mb-2">
                                <Users className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold">Career</h3>
                            <p className="text-sm text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </motion.div>

                        <motion.div
                            className="flex flex-col items-center space-y-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <div className="h-16 w-16 rounded-full border-2 border-white flex items-center justify-center mb-2">
                                <GraduationCap className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold">Education</h3>
                            <p className="text-sm text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </motion.div>

                        <motion.div
                            className="flex flex-col items-center space-y-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <div className="h-16 w-16 rounded-full border-2 border-white flex items-center justify-center mb-2">
                                <Building className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold">Meeting</h3>
                            <p className="text-sm text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Observatory Section */}
            <section className="py-16 px-4 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <motion.div
                            className="h-[400px] overflow-hidden rounded-lg"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
                                alt="Observatory"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        <motion.div
                            className="flex flex-col justify-center space-y-6"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl text-gray-400">What is Astronomy?</h3>
                            <h2 className="text-4xl font-bold leading-tight">
                                A New Dawn Of<br />Discovery
                            </h2>
                            <p className="text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel est et turpis faucibus mattis ut varius tellus. Sed eget ligula fermentum, viverra neque quis, scelerisque orci at tincidunt.
                            </p>
                            <div>
                                <Button className="rounded-full px-8">
                                    Learn More
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl text-gray-400">About Us</h3>
                            <h2 className="text-4xl font-bold leading-tight">
                                Astronomy<br />
                                Communities For<br />
                                Everyone
                            </h2>
                            <p className="text-gray-400">
                                Aenean sodales at nisi blandit feugiat. In feugiat ipsum et nulla condimentum posuere. Etiam porta feugiate a libero varius lectus.
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-2 gap-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="space-y-2">
                                <h2 className="text-5xl font-bold">2,950+</h2>
                                <p className="text-gray-400">Active Members</p>
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-5xl font-bold">12</h2>
                                <p className="text-gray-400">Years of Experience</p>
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-5xl font-bold">5</h2>
                                <p className="text-gray-400">Branch Locations</p>
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-5xl font-bold">24</h2>
                                <p className="text-gray-400">Observatory Zone</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Community Section */}
            <section className="py-16 px-4 bg-zinc-900">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <motion.div
                            className="h-[400px] overflow-hidden rounded-lg"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e"
                                alt="Astronomers"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl text-gray-400">Who We Are</h3>
                            <h2 className="text-4xl font-bold leading-tight">
                                A Community Of<br />
                                Astronomers
                            </h2>
                            <p className="text-gray-400">
                                In tempus sed turpis, ut ultrices dui rutilant. A integer at quam vel neque elementum ut placerat, elementum et dis. Mauris sollicitudin in massa congue facilisis.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}