
import React, { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "./ui/button";
// @ts-ignore
import test from "/o.png";


interface PDFViewerProps {
    totalPages: number;
}

export function PDFViewer({  totalPages }: PDFViewerProps) {
    const [currentPage, setCurrentPage] = useState(0);
    const [zoom, setZoom] = useState(1);
    const bookRef = useRef<any>(null);

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const handleZoomIn = () => {
        setZoom((prevZoom) => Math.min(prevZoom + 0.1, 1.5));
    };

    const handleZoomOut = () => {
        setZoom((prevZoom) => Math.max(prevZoom - 0.1, 0.5));
    };

    return (
        <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex justify-center mb-4 space-x-2">
                <Button
                    size="icon"
                    variant="outline"
                    className="text-black border-black"
                    onClick={handleZoomOut}
                    disabled={zoom <= 0.5}
                >
                    <ZoomOut className="h-4 w-4" />
                </Button>
                <Button
                    size="icon"
                    variant="outline"
                    className="text-black border-black"
                    onClick={handleZoomIn}
                    disabled={zoom >= 1.5}
                >
                    <ZoomIn className="h-4 w-4" />
                </Button>
            </div>

            <div
                className="relative"
                style={{
                    transform: `scale(${zoom})`,
                    transformOrigin: 'top center',
                    transition: 'transform 0.3s ease'
                }}
            >
                <HTMLFlipBook
                    width={500}
                    height={733}
                    size="fixed"
                    minWidth={300}
                    maxWidth={800}
                    minHeight={400}
                    maxHeight={1000}
                    showCover={true}
                    ref={bookRef}
                    onFlip={(e: any) => {
                        setCurrentPage(e.data);
                    }}
                    className="shadow-xl"
                    style={{}}
                    startPage={1}
                    drawShadow={true}
                    flippingTime={1000}
                    usePortrait={false}
                    startZIndex={0}
                    autoSize={false}
                    maxShadowOpacity={0.5}
                    mobileScrollSupport={true}
                    clickEventForward={true}
                    useMouseEvents={true}
                    swipeDistance={0}
                    showPageCorners={true}
                    disableFlipByClick={false}
                >
                    {pages.map((pageNum) => (
                        <div key={pageNum} className="relative">
                            <img
                                src={test}
                                alt={`Magazine page ${pageNum}`}
                                className="object-contain w-full h-full bg-white"
                            />
                            <span className="absolute bottom-2 right-4 text-black/70 text-sm">
                {pageNum}
              </span>
                        </div>
                    ))}
                </HTMLFlipBook>
            </div>

            <div className="flex justify-center items-center mt-6 gap-4">
                <Button
                    size="icon"
                    variant="outline"
                    className="text-black border-black"
                    onClick={() => bookRef.current?.pageFlip().flipPrev()}
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm text-black">
          Page {currentPage + 1} of {totalPages}
        </span>
                <Button
                    size="icon"
                    variant="outline"
                    className="text-black border-black"
                    onClick={() => bookRef.current?.pageFlip().flipNext()}
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </motion.div>
    );
}