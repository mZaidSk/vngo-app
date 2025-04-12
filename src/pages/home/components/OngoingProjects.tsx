import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const OngoingProjects = () => {
    const projects = [
        {
            title: "Beach Clean-up Drive",
            category: "Environmental Clean-up",
            description: "Join us in protecting our oceans and marine life.",
            img: "https://images.pexels.com/photos/9034676/pexels-photo-9034676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            title: "Education Support",
            category: "Teaching Kids",
            description: "Help children learn and grow through education.",
            img: "https://images.pexels.com/photos/6986430/pexels-photo-6986430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            title: "Food Bank Program",
            category: "Food Distribution",
            description: "Support our mission to end hunger in communities.",
            img: "https://images.pexels.com/photos/6591154/pexels-photo-6591154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
    ];

    return (
        <div className="px-4 py-12 max-w-7xl mx-auto text-center" id="projects">
            <h2 className="text-2xl font-semibold mb-10">Ongoing Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <Card key={index} className="overflow-hidden rounded-2xl">
                        {/* Project Image */}
                        <img
                            src={project.img}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />

                        <CardContent className="p-5 space-y-2 text-left">
                            {/* Category Label */}
                            <div className="text-xs uppercase text-gray-500 font-medium tracking-wide">
                                {project.category}
                            </div>
                            {/* Title */}
                            <h3 className="text-lg font-semibold text-gray-800">
                                {project.title}
                            </h3>
                            {/* Description */}
                            <p className="text-sm text-gray-600">
                                {project.description}
                            </p>
                            {/* Button */}
                            <Button className="bg-gray-900 text-white w-full hover:bg-gray-800">
                                Join Now
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default OngoingProjects;
