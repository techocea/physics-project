
import { motion } from "framer-motion";

interface PageTitleProps {
    title: string;
    subtitle?: string;
}

export function PageTitle({ title, subtitle }: PageTitleProps) {
    return (
        <motion.div
            className="mb-10 text-center space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                {title}
            </h1>
            {subtitle && (
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}
