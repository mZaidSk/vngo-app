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
    Search,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { AvatarImage } from "@radix-ui/react-avatar";
import { getAllActivities } from "@/store/slice/ActivitySlice";
import { Input } from "@/components/ui/input";

const VolunteerFeed = () => {
    const dispatch = useDispatch<AppDispatch>();
    const activitySelector = useSelector(
        (state: RootState) => state.activity.activities
    );

    const activities = activitySelector?.data || [];
    const [searchTerm, setSearchTerm] = useState("");

    const getActivities = async () => {
        dispatch(getAllActivities());
    };

    useEffect(() => {
        getActivities();
    }, []);

    const filteredActivities = activities.filter((activity: any) =>
        `${activity.title} ${activity.description}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 space-y-4 max-w-4xl mx-auto">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Volunteer Feed</h1>
                <Link to="/volunteer/opportunities">
                    <Button className="cursor-pointer">
                        Browse Opportunities
                    </Button>
                </Link>
            </div>

            {/* 🔍 Search Bar */}
            <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                    type="text"
                    placeholder="Search by title or description..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Sort / Filters */}
            <div className="flex gap-4 py-2">
                <select className="border rounded-md p-2 text-sm">
                    <option>Sort by: Recommended</option>
                </select>
                <select className="border rounded-md p-2 text-sm">
                    <option>My Skills</option>
                </select>
                <select className="border rounded-md p-2 text-sm">
                    <option>Nearby</option>
                </select>
            </div>

            {/* Activity Cards */}
            {filteredActivities.length > 0 ? (
                filteredActivities.map((activity: any) => (
                    <Card key={activity.id} className="rounded-xl shadow-md">
                        <CardContent className="p-4">
                            <div className="flex items-start gap-4">
                                <Avatar>
                                    <AvatarImage
                                        src={activity.ngoProfile?.logo_url}
                                        alt={
                                            activity.ngoProfile
                                                ?.organization_name
                                        }
                                    />
                                    <AvatarFallback>
                                        {activity.ngoProfile
                                            ?.organization_name?.[0] || "N"}
                                    </AvatarFallback>
                                </Avatar>

                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <Link
                                                to={`/ngo/profile/${activity.ngoProfile?.ngo_id}`}
                                            >
                                                <p className="font-semibold">
                                                    {
                                                        activity.ngoProfile
                                                            ?.organization_name
                                                    }
                                                </p>
                                            </Link>
                                            <p className="text-sm text-muted-foreground">
                                                {activity.ngoProfile?.city}
                                            </p>
                                        </div>
                                        <Badge variant="outline">
                                            {activity?.status}
                                        </Badge>
                                    </div>

                                    <div className="h-36 mt-4 rounded-lg">
                                        <img
                                            src={activity?.bannerImage}
                                            alt="Volunteer Opportunity Banner"
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
                                        {activity.skills?.map(
                                            (skill: any, i: number) => (
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
                                            /{activity.totalSpots} joined
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <Heart size={16} />{" "}
                                                {activity.likes || 0}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MessageCircle size={16} />{" "}
                                                {activity.comments || 0}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Share2 size={16} />{" "}
                                                {activity.shares || 0}
                                            </div>
                                        </div>
                                        <Link
                                            to={`/volunteer/activity/${activity.id}`}
                                        >
                                            <Button>View Details</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))
            ) : (
                <p className="text-muted-foreground text-center py-10">
                    No activities found.
                </p>
            )}
        </div>
    );
};

export default VolunteerFeed;
