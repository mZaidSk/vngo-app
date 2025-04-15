import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export function NGOActivities({ activities, isOwner }: any) {
    const [statusFilter, setStatusFilter] = useState("All Status");
    const [sortBy, setSortBy] = useState("Newest");

    const hasActivities = activities && activities.length > 0;

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <Input placeholder="Search activities..." className="w-1/3" />
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

            {hasActivities ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {activities.map((activity: any, i: number) => (
                        <Card key={i} className="shadow-sm">
                            <CardContent className="flex flex-col justify-between h-full space-y-2">
                                <div className="space-y-2">
                                    <img
                                        src={
                                            activity?.bannerImage ||
                                            "https://via.placeholder.com/300x100"
                                        }
                                        alt={activity.title}
                                        className="h-32 w-full object-cover rounded-md"
                                    />
                                    <Badge variant="secondary">
                                        {activity.status}
                                    </Badge>
                                    <h3 className="font-semibold">
                                        {activity.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {activity.description}
                                    </p>
                                    <div className="text-xs text-muted-foreground space-y-1">
                                        <div>
                                            👥 {activity.totalSpots} volunteers
                                        </div>
                                        <div>
                                            🗓️ {activity.startDate} –{" "}
                                            {activity.endDate}
                                        </div>
                                        <div>
                                            ⏰ {activity.startTime} –{" "}
                                            {activity.endTime}
                                        </div>
                                    </div>
                                </div>

                                <Link to={`/ngo/activities/${activity.id}`}>
                                    <Button className="w-full cursor-pointer">
                                        View Details
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            ) : (
                <div className="text-center py-10 space-y-4">
                    <p className="text-muted-foreground text-lg">
                        No activities available.
                    </p>
                    {isOwner && (
                        <Link to={"/ngo/activities/form"}>
                            <Button
                                variant="default"
                                className="cursor-pointer"
                            >
                                Create Activity
                            </Button>
                        </Link>
                    )}
                </div>
            )}
        </div>
    );
}
