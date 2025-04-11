import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { CalendarIcon, Grid2X2Icon, UsersIcon } from "lucide-react";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { Link } from "react-router-dom";

// Mock Stats & Activities Data
const stats = [
    {
        label: "Total Activities",
        value: 24,
        icon: <CalendarIcon className="w-6 h-6 text-muted-foreground" />,
    },
    {
        label: "Upcoming Activities",
        value: 8,
        icon: <Grid2X2Icon className="w-6 h-6 text-muted-foreground" />,
    },
    {
        label: "Total Volunteers",
        value: 156,
        icon: <UsersIcon className="w-6 h-6 text-muted-foreground" />,
    },
];

const activities = [
    {
        id: 1,
        title: "Beach Cleanup Drive",
        date: "Mar 15, 2025",
        status: "Upcoming",
        description:
            "Join us for our monthly beach cleanup initiative to protect marine life and keep our shores clean.",
        volunteers: 45,
        time: "9:00 AM - 2:00 PM",
    },
    {
        id: 2,
        title: "Tree Plantation Campaign",
        date: "Apr 2, 2025",
        status: "Upcoming",
        description:
            "Be part of our tree planting mission to make the city greener and healthier.",
        volunteers: 30,
        time: "10:00 AM - 1:00 PM",
    },
    {
        id: 3,
        title: "Blood Donation Drive",
        date: "Feb 20, 2025",
        status: "Past",
        description:
            "Help save lives by donating blood. A small act of kindness can go a long way.",
        volunteers: 60,
        time: "11:00 AM - 3:00 PM",
    },
];

const Activity = () => {
    return (
        <div className="p-6 space-y-6">
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

                <Link to="add" className="ml-auto">
                    <Button className="cursor-pointer">
                        + Create Activity
                    </Button>
                </Link>
            </div>

            {/* Activities Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activities.map((activity) => (
                    <Card key={activity.id} className="overflow-hidden">
                        <div className="bg-muted h-32 flex items-center justify-center text-muted-foreground">
                            Activity Cover Image
                        </div>
                        <CardContent className="p-4 space-y-2">
                            <div className="text-sm text-blue-600 font-medium">
                                {activity.status} • {activity.date}
                            </div>
                            <h4 className="text-lg font-semibold">
                                {activity.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                {activity.description}
                            </p>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-muted-foreground">
                                    {activity.volunteers} Volunteers
                                </span>
                                <span className="text-muted-foreground">
                                    {activity.time}
                                </span>
                            </div>
                            <Link to="edit/3">
                                <Button className="w-full cursor-pointer">
                                    View Details
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <Button variant="outline" className="rounded-full">
                                1
                            </Button>
                        </PaginationItem>
                        <PaginationItem>
                            <Button variant="ghost">2</Button>
                        </PaginationItem>
                        <PaginationItem>
                            <Button variant="ghost">3</Button>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
};

export default Activity;
