
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
//@ts-ignore
import test from "../public/test.jpg";
import React, {useState} from "react";
import { Card, CardContent } from "./ui/card";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import {Button} from "./ui/button";

export interface EventType {
    id: string;
    title: string;
    date: string;
    location: string;
    meetingInfo: string[];
    image: string;
}

interface EventCardProps {
    event: EventType;
    index: number;
}

export default function NewsCard({ event, index }: EventCardProps){
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
            >
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow group">
                    <div className="relative h-48 w-full overflow-hidden">
                        <img
                            src={test}
                            alt={event.title}
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"

                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/70 text-white px-2 py-1 rounded-md text-sm">
                            <Calendar className="h-4 w-4" />
                            {/*<span>{formatDate(event.date)}</span>*/}
                        </div>
                    </div>
                    <CardContent className="p-4 flex flex-col justify-between h-[calc(100%-12rem)]">
                        <div>
                            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                        </div>
                        <Button onClick={() => setIsDialogOpen(true)} className="w-full">
                            View Details
                        </Button>
                    </CardContent>
                </Card>
            </motion.div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-2xl max-h-[640px] py-8 overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="text-2xl text-black">{event.title}</DialogTitle>
                        <DialogDescription className="flex items-center gap-2 text-primary">
                            <Calendar className="h-4 w-4" />
                            {/*{formatDate(event.date)} • {event.location}*/}
                        </DialogDescription>
                    </DialogHeader>

                    <div className="relative h-64 w-full my-4">
                        <img
                            src={test}
                            alt={event.title}
                            className="object-cover rounded-md"
                            sizes="(max-width: 768px) 100vw, 800px"
                        />
                    </div>

                    <div className="space-y-4 max-h-[40vh]">
                        {event.meetingInfo.map((paragraph:string, i:number) => (
                            <p key={i} className="text-black">{paragraph}</p>
                        ))}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}