import { Card, CardContent } from "@/components/ui/card";

const VolunteerTestimonials = () => {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Environmental Volunteer",
            message:
                "Volunteering through this platform has been an incredible experience. I've met amazing people and made a real difference.",
            avatar: "https://api.dicebear.com/6.x/thumbs/svg?seed=Sarah", // Placeholder avatar
        },
        {
            name: "Michael Chen",
            role: "Education Volunteer",
            message:
                "The platform made it easy to find opportunities that matched my skills and interests. Highly recommended!",
            avatar: "https://api.dicebear.com/6.x/thumbs/svg?seed=Michael",
        },
    ];

    return (
        <section className="px-4 py-16 max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-10">
                What Our Volunteers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, idx) => (
                    <Card
                        key={idx}
                        className="text-left rounded-2xl p-6 flex gap-4 items-start"
                    >
                        <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <CardContent className="p-0 space-y-1">
                            <h4 className="font-semibold">
                                {testimonial.name}
                            </h4>
                            <p className="text-sm text-gray-500">
                                {testimonial.role}
                            </p>
                            <p className="text-sm mt-2 text-gray-700">
                                "{testimonial.message}"
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default VolunteerTestimonials;
