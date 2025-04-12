// components/HeroSection.tsx

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "https://images.pexels.com/photos/10629415/pexels-photo-10629415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/6647119/pexels-photo-6647119.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/6647010/pexels-photo-6647010.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5029859/pexels-photo-5029859.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/9034108/pexels-photo-9034108.jpeg?auto=compress&cs=tinysrgb&w=600",
];

export default function HeroSection() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full h-[92vh] overflow-hidden">
            <AnimatePresence>
                <motion.img
                    key={index}
                    src={images[index]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>

            {/* Darker overlay */}
            <div className="absolute inset-0 bg-black/60 z-10 flex flex-col justify-center items-center text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                    Connecting NGOs & Volunteers for Greater Impact
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-6 drop-shadow">
                    A dual platform where NGOs can manage activities and
                    volunteers can find meaningful opportunities.
                </p>
                <div className="flex gap-4 flex-wrap justify-center">
                    <Button className="border-white text-white hover:bg-white/10 hover:text-white cursor-pointer">
                        Join as Volunteer
                    </Button>
                    <Button
                        variant="outline"
                        className="border-white text-black hover:bg-white/10 hover:text-white cursor-pointer"
                    >
                        Register NGO
                    </Button>
                </div>
            </div>
        </section>
    );
}
