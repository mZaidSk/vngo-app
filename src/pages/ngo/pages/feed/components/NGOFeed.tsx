import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
    Calendar,
    Clock,
    Users,
    Heart,
    MessageCircle,
    Share2,
} from "lucide-react";

const activities = [
    {
        ngoName: "Green Earth Foundation",
        location: "Mumbai, India",
        status: "Upcoming",
        title: "Tree Plantation Drive 2025",
        description:
            "Join us in our mission to make the city greener. We aim to plant 1000 trees across multiple locations in Mumbai.",
        tags: ["Environment", "TreePlantation"],
        date: "Mar 15, 2025",
        time: "9:00 AM - 5:00 PM",
        volunteers: 124,
        likes: 245,
        comments: 18,
        shares: 8,
        buttonLabel: "Join Now",
    },
    {
        ngoName: "Education For All",
        location: "Delhi, India",
        status: "Ongoing",
        title: "Digital Literacy Program",
        description:
            "Teaching basic computer skills to underprivileged children. Weekly classes with hands-on training.",
        tags: ["Education", "Digital"],
        date: "Jan - Jun 2025",
        time: "Weekends",
        volunteers: 45,
        likes: 182,
        comments: 24,
        shares: 6,
        buttonLabel: "View Details",
    },
];

const NGOFeed = () => {
    return (
        <div className="p-6 space-y-4 max-w-4xl mx-auto">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">NGO Activities Feed</h1>
                <Button>+ Create Activity</Button>
            </div>

            {/* Filters */}
            <div className="flex gap-4 py-2">
                <select className="border rounded-md p-2 text-sm">
                    <option>Sort by: Latest</option>
                </select>
                <select className="border rounded-md p-2 text-sm">
                    <option>All Categories</option>
                </select>
                <select className="border rounded-md p-2 text-sm">
                    <option>All Locations</option>
                </select>
            </div>

            {activities.map((activity, index) => (
                <Card key={index} className="rounded-xl shadow-md">
                    <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                            <Avatar>
                                <AvatarFallback>
                                    {activity.ngoName[0]}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-semibold">
                                            {activity.ngoName}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {activity.location}
                                        </p>
                                    </div>
                                    <Badge variant="outline">
                                        {activity.status}
                                    </Badge>
                                </div>
                                <div className="bg-muted h-32 mt-4 rounded-lg flex items-center justify-center text-muted-foreground">
                                    Activity Cover Image
                                </div>
                                <h2 className="mt-4 text-lg font-medium">
                                    {activity.title}
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                    {activity.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-2">
                                    {activity.tags.map((tag, i) => (
                                        <Badge key={i} variant="secondary">
                                            #{tag}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} /> {activity.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock size={14} /> {activity.time}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Users size={14} />{" "}
                                        {activity.volunteers} volunteers
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mt-4">
                                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Heart size={16} /> {activity.likes}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MessageCircle size={16} />{" "}
                                            {activity.comments}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Share2 size={16} />{" "}
                                            {activity.shares}
                                        </div>
                                    </div>
                                    <Button>{activity.buttonLabel}</Button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default NGOFeed;
