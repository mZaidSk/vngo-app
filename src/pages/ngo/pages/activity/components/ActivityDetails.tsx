import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const ActivityDetails = () => {
    return (
        <ScrollArea className="p-4 space-y-4 max-w-4xl mx-auto">
            {/* Banner */}
            <Card className="h-48 bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">
                    Activity Banner Image
                </span>
            </Card>

            {/* Title and NGO */}
            <div>
                <h1 className="text-2xl font-semibold">
                    Tree Plantation Drive 2025 <Badge>Upcoming</Badge>
                </h1>
                <p className="text-muted-foreground mt-1">
                    Making our city greener, one tree at a time. Join us in our
                    mission to create a sustainable future.
                </p>

                <Card className="mt-4">
                    <CardContent className="p-4 flex items-center gap-4">
                        <Avatar>
                            <span>🌿</span>
                        </Avatar>
                        <div>
                            <h2 className="text-lg font-medium">
                                Green Earth Foundation
                            </h2>
                            <div className="text-sm text-muted-foreground">
                                Mumbai, India
                            </div>
                            <div className="text-sm">
                                contact@greenearth.org | +91 98765 43210
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* About the Activity */}
            <Card>
                <CardContent className="p-4 space-y-2">
                    <h3 className="text-lg font-medium">About the Activity</h3>
                    <p>
                        Join us in this mega plantation drive where we plant
                        10,000 trees! Help improve air quality, conserve
                        biodiversity, and create habitats for local wildlife.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Goal: Plant 10,000 trees</li>
                        <li>Open to all ages</li>
                        <li>Free participation</li>
                        <li>Certificates provided to volunteers</li>
                    </ul>
                    <p className="font-semibold">Past Events:</p>
                    <p>
                        Last year we planted 8000 trees with the help of 500
                        volunteers.
                    </p>
                </CardContent>
            </Card>

            {/* Schedule */}
            <Card>
                <CardContent className="p-4 grid grid-cols-2 gap-4">
                    <div>
                        <p>
                            <strong>Start Date:</strong> March 5, 2025
                        </p>
                        <p>
                            <strong>Time:</strong> 9:00 AM – 5:00 PM
                        </p>
                    </div>
                    <div>
                        <p>
                            <strong>End Date:</strong> March 5, 2025
                        </p>
                        <p>
                            <strong>Duration:</strong> 8 hours
                        </p>
                    </div>
                    <p className="col-span-2 text-muted-foreground text-sm">
                        Timezone: GMT (UTC+5:30)
                    </p>
                </CardContent>
            </Card>

            {/* Location */}
            <Card>
                <CardContent className="p-4 space-y-2">
                    <h3 className="text-lg font-medium">Venue & Location</h3>
                    <p>
                        Sanjay Gandhi National Park, Mumbai, Maharashtra 400066
                    </p>
                    <div className="h-48 bg-muted flex items-center justify-center rounded">
                        <span className="text-muted-foreground">
                            Google Maps Embed
                        </span>
                    </div>
                </CardContent>
            </Card>

            {/* Sidebar Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="md:col-span-2">
                    <CardContent className="p-4">
                        <h3 className="text-lg font-medium mb-2">Gallery</h3>
                        <div className="flex gap-2">
                            <div className="flex-1 h-24 bg-muted flex items-center justify-center rounded">
                                Image 1
                            </div>
                            <div className="flex-1 h-24 bg-muted flex items-center justify-center rounded">
                                Image 2
                            </div>
                            <div className="flex-1 h-24 bg-muted flex items-center justify-center rounded">
                                Image 3
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-4 space-y-4">
                        <h3 className="font-semibold">265 slots</h3>
                        <Button className="w-full">Join Now</Button>
                        <div>
                            <h4 className="font-medium">
                                Volunteer Requirements
                            </h4>
                            <ul className="list-disc text-sm pl-5 space-y-1">
                                <li>Minimum age: 12</li>
                                <li>Team spirit</li>
                                <li>App usage knowledge</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium">Rules & Guidelines</h4>
                            <ul className="list-disc text-sm pl-5 space-y-1">
                                <li>Wear comfortable clothes</li>
                                <li>Stay hydrated</li>
                                <li>Follow safety instructions</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium">Weather Advisory</h4>
                            <p className="text-sm">
                                Carry water, rain gear. Rescheduling in case of
                                heavy rainfall.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Comments */}
            <Card>
                <CardContent className="p-4">
                    <h3 className="text-lg font-medium mb-2">Comments</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                        24 comments
                    </div>
                    <Textarea
                        placeholder="Write a comment..."
                        className="mt-2"
                    />
                    <Button className="mt-2">Post Comment</Button>
                </CardContent>
            </Card>
        </ScrollArea>
    );
};

export default ActivityDetails;
