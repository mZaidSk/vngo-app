import { Card, CardContent } from "@/components/ui/card";
import {
    UserPlus,
    Handshake,
    Heart,
    LineChart,
    ListChecks,
    Users,
    BarChart3,
} from "lucide-react";

const HowItWorksSection = () => {
    const howItWorks = [
        {
            icon: <UserPlus className="h-8 w-8 text-gray-800" />,
            title: "Sign Up",
            description: "Create your volunteer profile",
        },
        {
            icon: <Handshake className="h-8 w-8 text-gray-800" />,
            title: "Get Matched",
            description: "Find projects that suit you",
        },
        {
            icon: <Heart className="h-8 w-8 text-gray-800" />,
            title: "Volunteer",
            description: "Make a difference",
        },
        {
            icon: <LineChart className="h-8 w-8 text-gray-800" />,
            title: "Track Impact",
            description: "See your contribution",
        },
    ];

    const tools = [
        {
            icon: <ListChecks className="h-6 w-6 text-gray-800" />,
            title: "Project Management",
            description:
                "Create, track, and manage multiple volunteer projects efficiently.",
        },
        {
            icon: <Users className="h-6 w-6 text-gray-800" />,
            title: "Volunteer Coordination",
            description:
                "Screen applications, schedule shifts, and communicate with volunteers.",
        },
        {
            icon: <BarChart3 className="h-6 w-6 text-gray-800" />,
            title: "Impact Analytics",
            description:
                "Measure and report on your organization's community impact.",
        },
    ];

    return (
        <div className="bg-accent" id="about">
            <div className="px-4 py-12 max-w-7xl mx-auto text-center">
                {/* How It Works */}
                <h2 className="text-2xl font-semibold mb-10">How It Works</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-20">
                    {howItWorks.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-2"
                        >
                            {item.icon}
                            <h3 className="font-semibold">{item.title}</h3>
                            <p className="text-sm text-gray-600">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* NGO Management Tools */}
                <h2 className="text-2xl font-semibold mb-10">
                    NGO Management Tools
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {tools.map((tool, index) => (
                        <Card key={index} className="text-left">
                            <CardContent className="p-6 space-y-4">
                                <div className="flex items-center gap-3">
                                    {tool.icon}
                                </div>
                                <h3 className="font-semibold">{tool.title}</h3>
                                <p className="text-sm text-gray-600">
                                    {tool.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowItWorksSection;
