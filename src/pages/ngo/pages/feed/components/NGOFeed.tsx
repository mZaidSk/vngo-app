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
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { getAllActivities } from "@/store/slice/ActivitySlice";
import { useEffect } from "react";
import { AvatarImage } from "@radix-ui/react-avatar";

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
    const dispatch = useDispatch<AppDispatch>();
    const activitySelector = useSelector(
        (state: RootState) => state.activity.activities
    );

    const activities = activitySelector?.data;

    const getActivities = async () => {
        dispatch(getAllActivities());
    };

    useEffect(() => {
        getActivities();
    }, []);

    return (
        <div className="p-6 space-y-4 max-w-4xl mx-auto">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">NGO Activities Feed</h1>
                <Link to={"/ngo/activities/add"}>
                    <Button className="cursor-pointer">
                        + Create Activity
                    </Button>
                </Link>
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

            {activities?.length &&
                activities.map((activity: any, index: any) => (
                    <Card key={index} className="rounded-xl shadow-md">
                        <CardContent className="p-4">
                            <div className="flex items-start gap-4">
                                <Avatar>
                                    <AvatarImage
                                        src={activity?.ngoProfile?.logo_url}
                                        alt={
                                            activity?.ngoProfile
                                                ?.organization_name
                                        }
                                    />
                                    <AvatarFallback>
                                        {
                                            activity?.ngoProfile
                                                ?.organization_name[0]
                                        }
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <Link
                                                to={`/ngo/profile/${activity?.ngoProfile}`}
                                            >
                                                <p className="font-semibold">
                                                    {
                                                        activity?.ngoProfile
                                                            ?.organization_name
                                                    }
                                                </p>
                                            </Link>
                                            <p className="text-sm text-muted-foreground">
                                                {activity?.ngoProfile?.city}
                                            </p>
                                        </div>
                                        <Badge variant="outline">
                                            {activity?.status}
                                        </Badge>
                                    </div>
                                    <div className="h-36 mt-4 rounded-lg">
                                        <img
                                            src={activity?.bannerImage}
                                            alt="NGO Cover Banner"
                                            className="w-full h-full object-cover rounded-sm"
                                        />
                                    </div>
                                    <h2 className="mt-4 text-lg font-medium">
                                        {activity.title}
                                    </h2>
                                    <p className="text-sm text-muted-foreground">
                                        {activity.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {activity.skills.map(
                                            (skill: any, i: any) => (
                                                <Badge
                                                    key={i}
                                                    variant="secondary"
                                                >
                                                    #{skill}
                                                </Badge>
                                            )
                                        )}
                                    </div>

                                    <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />{" "}
                                            {activity.startDate} to{" "}
                                            {activity.endDate}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock size={14} />{" "}
                                            {activity.startTime} to{" "}
                                            {activity.endTime} (
                                            {activity.duration})
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Users size={14} />{" "}
                                            {Math.abs(
                                                activity.spotsLeft -
                                                    activity.totalSpots
                                            )}
                                            /{activity.totalSpots} volunteers
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <Heart size={16} />{" "}
                                                {activity?.likes || 33}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MessageCircle size={16} />{" "}
                                                {activity?.comments || 23}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Share2 size={16} />{" "}
                                                {activity?.shares || 3}
                                            </div>
                                        </div>
                                        <Link
                                            to={`/ngo/activities/${activity?.id}`}
                                        >
                                            <Button className="cursor-pointer">
                                                View Details
                                            </Button>
                                        </Link>
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
