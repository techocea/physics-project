
import { useState, useEffect } from "react";
import { PageTitle } from "../../components/page-title";
import { PDFViewer } from "../../components/PDF-viewer";
import { motion } from "framer-motion";

const issues = [
    {
        id: "spring-2025",
        title: "Spring 2025",
        path: "/magazine/spring-2025",
        totalPages: 12,
        description: "Featuring an interview with Nobel Prize winner Dr. James Wilson and articles on quantum entanglement breakthroughs."
    },
    {
        id: "winter-2024",
        title: "Winter 2024",
        path: "/magazine/winter-2024",
        totalPages: 10,
        description: "Special edition on astrophysics discoveries with guest contributions from NASA researchers."
    },
    {
        id: "fall-2024",
        title: "Fall 2024",
        path: "/magazine/fall-2024",
        totalPages: 8,
        description: "Focusing on undergraduate research projects and the latest department updates."
    }
];

export default function MagazinePage() {
    const [selectedIssue, setSelectedIssue] = useState(issues[0].id);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const currentIssue = issues.find(issue => issue.id === selectedIssue) || issues[0];

    if (!mounted) return null;

    return (
        <div className="container mx-auto px-4 py-16">
            <PageTitle
                title="Physics Magazine"
                subtitle="Our quarterly publication showcasing research, interviews, and physics news"
            />

            <motion.div
                className="mt-8 max-w-4xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="bg-card rounded-lg p-6 shadow-lg border">
                    <PDFViewer totalPages={currentIssue.totalPages} />
                </div>
            </motion.div>
        </div>
    );
}