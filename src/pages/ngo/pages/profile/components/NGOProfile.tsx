import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Globe, Twitter, Instagram, Linkedin } from "lucide-react";

export default function NGOProfile() {
    const [statusFilter, setStatusFilter] = useState("All Status");
    const [sortBy, setSortBy] = useState("Newest");

    return (
        <div className="p-4 space-y-6 max-w-6xl mx-auto">
            {/* Cover Banner Placeholder */}
            <div className="bg-muted h-32 rounded-xl flex items-center justify-center text-muted-foreground">
                [NGO Cover Banner]
            </div>

            {/* NGO Info Card */}
            <Card className="shadow-md">
                <CardContent className="flex items-center gap-4 p-6">
                    <Avatar className="w-16 h-16">
                        <AvatarImage src="" alt="NGO Logo" />
                        <AvatarFallback>GE</AvatarFallback>
                    </Avatar>
                    <div>
                        <div className="flex items-center gap-2">
                            <h2 className="text-lg font-semibold">
                                Green Earth Initiative
                            </h2>
                            <Badge variant="outline">Verified</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            New York, United States
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Dedicated to creating a sustainable future through
                            environmental conservation and community engagement.
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                    <p className="text-xl font-bold">156</p>
                    <p className="text-sm text-muted-foreground">
                        Activities Conducted
                    </p>
                </div>
                <div>
                    <p className="text-xl font-bold">2,500+</p>
                    <p className="text-sm text-muted-foreground">
                        Active Volunteers
                    </p>
                </div>
                <div>
                    <p className="text-xl font-bold">10</p>
                    <p className="text-sm text-muted-foreground">
                        Years of Operation
                    </p>
                </div>
                <div>
                    <p className="text-xl font-bold">5</p>
                    <p className="text-sm text-muted-foreground">Focus Areas</p>
                </div>
            </div>

            {/* Activity Cards */}
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <Input
                        placeholder="Search activities..."
                        className="w-1/3"
                    />
                    <div className="flex gap-2">
                        <select
                            className="border rounded p-2"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option>All Status</option>
                            <option>Upcoming</option>
                            <option>Ongoing</option>
                            <option>Completed</option>
                        </select>
                        <select
                            className="border rounded p-2"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option>Newest</option>
                            <option>Oldest</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        {
                            title: "Tree Plantation Drive",
                            date: "Mar 15, 2025",
                            status: "Upcoming",
                            desc: "Join us to plant 10,000 trees in Central Park.",
                            volunteers: 56,
                            time: "9:00 AM",
                            cta: "Join Now",
                        },
                        {
                            title: "Clean Water Initiative",
                            date: "Feb - Apr, 2025",
                            status: "Ongoing",
                            desc: "Providing clean drinking water to rural communities.",
                            volunteers: 30,
                            comments: 25,
                            cta: "View Details",
                        },
                        {
                            title: "Food Distribution Drive",
                            date: "Jan 20, 2025",
                            status: "Completed",
                            desc: "Provided meals to 500+ families.",
                            volunteers: 62,
                            comments: 43,
                            cta: "See Highlights",
                        },
                    ].map((activity, i) => (
                        <Card key={i} className="shadow-sm">
                            <CardContent className="space-y-2 p-4">
                                <div className="h-24 bg-muted flex items-center justify-center rounded-md">
                                    [Activity Image]
                                </div>
                                <Badge variant="secondary">
                                    {activity.status}
                                </Badge>
                                <h3 className="font-semibold">
                                    {activity.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {activity.desc}
                                </p>
                                <div className="text-xs text-muted-foreground">
                                    👥 {activity.volunteers} volunteers &nbsp;
                                    ⏰ {activity.time || activity.date}
                                </div>
                                <Button variant="outline" className="w-full">
                                    {activity.cta}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Impact Gallery */}
            <div>
                <h3 className="text-lg font-semibold mb-2">Impact Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Image 1", "Image 2", "Image 3", "Image 4"].map(
                        (label, idx) => (
                            <div
                                key={idx}
                                className="h-24 bg-muted flex items-center justify-center rounded-md"
                            >
                                {label}
                            </div>
                        )
                    )}
                </div>
            </div>

            {/* Call to Action */}
            <Card className="bg-primary text-primary-foreground text-center">
                <CardContent className="p-6 space-y-4">
                    <h2 className="text-xl font-bold">
                        Make a Difference Today
                    </h2>
                    <p>
                        Join our community of volunteers and help us create
                        positive change in this world.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button variant="secondary">Become a Volunteer</Button>
                        <Button variant="ghost">Support Us</Button>
                    </div>
                </CardContent>
            </Card>

            {/* Footer */}
            <footer className="mt-10 text-muted-foreground text-sm">
                <Separator className="mb-6" />
                <div className="flex flex-col md:flex-row justify-between gap-6 px-2 md:px-4">
                    {/* About & Contact */}
                    <div className="flex-1 space-y-2">
                        <h4 className="text-foreground font-medium">
                            Green Earth Initiative
                        </h4>
                        <p>
                            Making our world a better place, one step at a time.
                        </p>
                        <div className="space-y-1">
                            <p>
                                Email:{" "}
                                <a
                                    href="mailto:contact@gei.org"
                                    className="hover:underline"
                                >
                                    contact@gei.org
                                </a>
                            </p>
                            <p>Phone: (123) 123-4567</p>
                        </div>
                    </div>

                    {/* Follow & Subscribe */}
                    <div className="flex-1 space-y-3">
                        <div>
                            <h4 className="text-foreground font-medium">
                                Stay Connected
                            </h4>
                            <div className="flex items-center gap-3 mt-1">
                                {/* Social Media Icons */}
                                <Globe size={20} />
                                <Twitter size={20} />
                                <Instagram size={20} />
                                <Linkedin size={20} />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-foreground font-medium mt-3">
                                Subscribe
                            </h4>
                            <div className="flex items-center gap-2 mt-1">
                                <Input
                                    placeholder="Your email"
                                    className="h-8 text-sm"
                                />
                                <Button size="sm">Subscribe</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-center text-xs pt-6 text-muted-foreground">
                    © 2025 Green Earth Initiative. All rights reserved.
                </p>
            </footer>
        </div>
    );
}
