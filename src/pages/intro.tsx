"use client";

import { motion } from "framer-motion";
import { PageTitle } from "../../components/page-title";
import { Card, CardContent } from "../../components/ui/card";

// Team member data - normally would be in a separate data file
const teamMembers = [
    {
        id: 1,
        name: "Dr. Elena Rodriguez",
        role: "Faculty Advisor",
        image: "/team/member1.jpg",
    },
    {
        id: 2,
        name: "James Chen",
        role: "President",
        image: "/team/member2.jpg",
    },
    {
        id: 3,
        name: "Sophia Kim",
        role: "Vice President",
        image: "/team/member3.jpg",
    },
    {
        id: 4,
        name: "Marcus Johnson",
        role: "Treasurer",
        image: "/team/member4.jpg",
    },
    {
        id: 5,
        name: "Aisha Patel",
        role: "Events Coordinator",
        image: "/team/member5.jpg",
    },
    {
        id: 6,
        name: "David Jackson",
        role: "Magazine Editor",
        image: "/team/member6.jpg",
    },
];

export default function Intro() {
    return (
        <div className="container mx-auto px-4 py-20">
            <PageTitle
                title="About Us"
                subtitle="Learn about our society's history, mission, and the team behind it"
            />

            <div className="space-y-16">
                {/* History Section */}
                <section>
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our History</h2>
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <p>
                                Founded in 1975, the University Physics Society began as a small group of passionate
                                undergraduate students seeking to extend their learning beyond the classroom.
                                What started as informal gatherings to discuss cutting-edge research papers has evolved
                                into one of the university's most active and respected academic societies.
                            </p>
                            <p>
                                Throughout the decades, we've hosted numerous Nobel laureates, organized international
                                physics conferences, and helped countless students launch successful careers in research,
                                industry, and education. Our alumni network spans across renowned institutions worldwide,
                                including CERN, NASA, and leading research universities.
                            </p>
                            <p>
                                Today, with over 200 active members, we continue to foster curiosity, collaboration, and
                                scientific excellence within our university community and beyond.
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* Mission & Vision Section */}
                <section className="bg-secondary/30 py-12 px-4 sm:px-8 rounded-xl">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Mission & Vision</h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-card p-6 rounded-lg shadow-md border">
                                <h3 className="text-xl font-semibold mb-3 gradient-text">Our Mission</h3>
                                <p className="text-muted-foreground">
                                    To cultivate a vibrant community where physics students and enthusiasts can
                                    explore their passion, exchange ideas, and collaborate on projects that advance
                                    our understanding of the physical world. We aim to supplement academic learning
                                    with practical experiences and professional development opportunities that prepare
                                    members for successful careers in physics and related fields.
                                </p>
                            </div>

                            <div className="bg-card p-6 rounded-lg shadow-md border">
                                <h3 className="text-xl font-semibold mb-3 gradient-text">Our Vision</h3>
                                <p className="text-muted-foreground">
                                    To become a globally recognized hub for physics education, innovation, and
                                    outreach. We envision a society where students from diverse backgrounds are
                                    empowered to pursue scientific inquiry, where mentorship bridges generations
                                    of physicists, and where our collective efforts contribute meaningfully to
                                    addressing the world's most pressing scientific challenges.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Team Members Section */}
                <section>
                    <motion.div
                        className="max-w-6xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Meet Our Team</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {teamMembers.map((member, index) => (
                                <motion.div
                                    key={member.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                >
                                    <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                                        <div className="relative h-64 w-full">
                                            <img
                                                src={member.image}
                                                alt={member.name}

                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                        </div>
                                        <CardContent className="p-4 text-center">
                                            <h3 className="text-xl font-bold">{member.name}</h3>
                                            <p className="text-muted-foreground">{member.role}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>
            </div>
        </div>
    );
}