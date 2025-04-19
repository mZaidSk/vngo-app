// ActivityView.tsx
import { Link } from "react-router-dom";
import { CalendarIcon, Grid2X2Icon, UsersIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const ActivityView = ({ activities }: { activities: any[] }) => {
    const authSelector = useSelector((state: RootState) => state.auth.user);

    const stats = [
        {
            label: "Total Activities",
            value: activities.length,
            icon: <CalendarIcon className="w-6 h-6 text-muted-foreground" />,
        },
        {
            label: "Upcoming Activities",
            value: activities.filter((a) => a.status === "Upcoming").length,
            icon: <Grid2X2Icon className="w-6 h-6 text-muted-foreground" />,
        },
    ];

    return (
        <div className="p-6 space-y-6 max-w-6xl mx-auto">
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {stats.map((stat, idx) => (
                    <Card key={idx}>
                        <CardContent className="flex items-center justify-between px-4">
                            <div>
                                <p className="text-sm text-gray-500">
                                    {stat.label}
                                </p>
                                <h3 className="text-2xl font-semibold">
                                    {stat.value}
                                </h3>
                            </div>
                            {stat.icon}
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Filters Section */}
            <div className="flex flex-wrap gap-4 items-center">
                <Input
                    placeholder="Search activities..."
                    className="max-w-xs"
                />
                <Select>
                    <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder="All Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="upcoming">Upcoming</SelectItem>
                        <SelectItem value="past">Past</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="environment">Environment</SelectItem>
                        <SelectItem value="health">Health</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort By: Newest First" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="newest">Newest First</SelectItem>
                        <SelectItem value="oldest">Oldest First</SelectItem>
                    </SelectContent>
                </Select>
                <Button variant="ghost">Reset Filters</Button>

                {authSelector?.data?.role === "NGO" && (
                    <Link to="form" className="ml-auto">
                        <Button className="cursor-pointer">
                            + Create Activity
                        </Button>
                    </Link>
                )}
            </div>

            {/* Activities Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activities.length > 0 ? (
                    activities.map((activity: any) => (
                        <Card key={activity.id} className="overflow-hidden">
                            <div className="h-32 w-full bg-muted flex items-center justify-center">
                                {activity.bannerImage ? (
                                    <img
                                        src={activity.bannerImage}
                                        alt={activity.title}
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <span className="text-muted-foreground">
                                        No Image Available
                                    </span>
                                )}
                            </div>
                            <CardContent className="flex flex-col justify-between h-full p-4 space-y-2">
                                <div className="space-y-2">
                                    <div className="text-sm text-blue-600 font-medium">
                                        {activity.status} •{" "}
                                        {new Date(
                                            activity.startDate
                                        ).toLocaleDateString()}
                                    </div>
                                    <h4 className="text-lg font-semibold">
                                        {activity.title}
                                    </h4>
                                    <p className="text-sm text-muted-foreground line-clamp-2">
                                        {activity.description}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-muted-foreground">
                                            {activity.spotsLeft ?? 0} Spots Left
                                        </span>
                                        <span className="text-muted-foreground">
                                            {activity.duration}
                                        </span>
                                    </div>
                                    <Link to={`${activity.id}`}>
                                        <Button className="w-full cursor-pointer">
                                            View Details
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <div className="col-span-full text-center text-muted-foreground text-lg py-10 h-72">
                        No Activities Available
                    </div>
                )}
            </div>
        </div>
    );
};

export default ActivityView;
