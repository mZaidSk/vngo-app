import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import {
    Link as LinkIcon,
    Twitter as TwitterIcon,
    Pin as PinIcon,
    Facebook as FacebookIcon,
    Instagram as InstagramIcon,
    Globe as GlobeIcon,
    Paperclip as PaperclipIcon,
    Users,
} from "lucide-react";

import { AvatarFallback } from "@radix-ui/react-avatar";
import { Link } from "react-router-dom";

const ActivityDetails = () => {
    return (
        <div className="p-4 space-y-6 max-w-6xl mx-auto">
            {/* Banner */}
            <Card className="h-48 bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">
                    Activity Banner Image
                </span>
            </Card>

            {/* Title and NGO */}
            <div className="my-6">
                <h1 className="text-2xl font-semibold">
                    Tree Plantation Drive 2025 <Badge>Upcoming</Badge>
                </h1>
                <p className="text-muted-foreground mt-1">
                    Making our city greener, one tree at a time. Join us in our
                    mission to create a sustainable future.
                </p>

                <Card className="mt-4">
                    <CardContent className="px-4 space-y-2">
                        <div className="flex items-start gap-4">
                            {/* Avatar */}
                            <Avatar className="w-12 h-12">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                                {/* Replace with actual image or emoji */}
                            </Avatar>

                            {/* Organization Info */}
                            <div>
                                <h2 className="text-base font-semibold">
                                    Green Earth Foundation
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                    Mumbai, India
                                </p>
                                {/* Social Icons */}
                                <div className="flex gap-3 mt-2 text-muted-foreground">
                                    <FacebookIcon className="w-4 h-4 cursor-pointer" />
                                    <TwitterIcon className="w-4 h-4 cursor-pointer" />
                                    <InstagramIcon className="w-4 h-4 cursor-pointer" />
                                    <GlobeIcon className="w-4 h-4 cursor-pointer" />
                                </div>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="grid grid-cols-2 gap-y-2 text-sm">
                            <div>
                                <p className="text-muted-foreground">
                                    Contact Email
                                </p>
                                <p className="font-medium">
                                    contact@greenearth.org
                                </p>
                            </div>
                            <div>
                                <p className="text-muted-foreground">Phone</p>
                                <p className="font-medium">+91 98765 43210</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Sidebar Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 space-y-6">
                    {/* About the Activity */}
                    <Card>
                        <CardContent className="p-4 space-y-2">
                            <h3 className="text-lg font-medium">
                                About the Activity
                            </h3>
                            <p>
                                Join us in this mega plantation drive where we
                                plant 10,000 trees! Help improve air quality,
                                conserve biodiversity, and create habitats for
                                local wildlife.
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Goal: Plant 10,000 trees</li>
                                <li>Open to all ages</li>
                                <li>Free participation</li>
                                <li>Certificates provided to volunteers</li>
                            </ul>
                            <p className="font-semibold">Past Events:</p>
                            <p>
                                Last year we planted 8000 trees with the help of
                                500 volunteers.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Schedule */}
                    <Card>
                        <CardContent className="px-6 space-y-4">
                            <h3 className="text-lg font-semibold">
                                Event Schedule
                            </h3>
                            <div className="grid grid-cols-2 gap-y-4 text-sm">
                                <div>
                                    <p className="text-muted-foreground">
                                        Start Date
                                    </p>
                                    <p className="font-medium">
                                        March 15, 2025
                                    </p>
                                </div>
                                <div>
                                    <p className="text-muted-foreground">
                                        End Date
                                    </p>
                                    <p className="font-medium">
                                        March 15, 2025
                                    </p>
                                </div>
                                <div>
                                    <p className="text-muted-foreground">
                                        Time
                                    </p>
                                    <p className="font-medium">
                                        9:00 AM – 5:00 PM
                                    </p>
                                </div>
                                <div>
                                    <p className="text-muted-foreground">
                                        Duration
                                    </p>
                                    <p className="font-medium">8 hours</p>
                                </div>
                            </div>
                            <div className="bg-muted text-sm text-muted-foreground p-3 rounded-md">
                                Timezone: IST (UTC+5:30)
                            </div>
                        </CardContent>
                    </Card>

                    {/* Location */}
                    <Card>
                        <CardContent className="px-4 space-y-2">
                            <h3 className="text-lg font-medium">
                                Venue & Location
                            </h3>
                            <p>
                                Sanjay Gandhi National Park, Mumbai, Maharashtra
                                400066
                            </p>
                            <div className="h-48 bg-muted flex items-center justify-center rounded">
                                <span className="text-muted-foreground">
                                    Google Maps Embed
                                </span>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="px-4">
                            <h3 className="text-lg font-medium mb-2">
                                Gallery
                            </h3>
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
                </div>

                <div className="space-y-4">
                    {/* Likes & Join Button Section */}
                    <Card>
                        <CardContent className="px-4 space-y-3">
                            <p className="text-sm text-gray-500">
                                ❤️ 245 likes
                            </p>

                            <Button className="w-full bg-[#0A1128] text-white">
                                Join Now
                            </Button>

                            <div className="flex justify-center gap-4 text-gray-500">
                                <LinkIcon className="w-5 h-5 cursor-pointer hover:text-[#0A1128]" />
                                <TwitterIcon className="w-5 h-5 cursor-pointer hover:text-[#0A1128]" />
                                <PinIcon className="w-5 h-5 cursor-pointer hover:text-[#0A1128]" />
                                <PaperclipIcon className="w-5 h-5 cursor-pointer hover:text-[#0A1128]" />
                            </div>
                        </CardContent>
                    </Card>
                    <div>
                        <Link to={"/ngo/activities/2/volunteer"}>
                            <Button size="lg" className="w-full cursor-pointer">
                                <Users className="w-4 h-4 mr-1" />
                                Volunteer List
                            </Button>
                        </Link>
                    </div>
                    {/* Volunteer Requirements Section */}
                    <Card>
                        <CardContent className="px-4 space-y-3">
                            <h4 className="font-semibold">
                                Volunteer Requirements
                            </h4>
                            <div className="text-sm space-y-1">
                                <div className="flex justify-between">
                                    <span>Total spots</span>
                                    <span className="font-medium">150</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Spots left</span>
                                    <span className="font-medium">26</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Age requirement</span>
                                    <span className="font-medium">18+</span>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-medium">
                                    Required Skills
                                </p>
                                <ul className="list-disc text-sm pl-5 space-y-1">
                                    <li>Basic gardening knowledge</li>
                                    <li>Physical fitness</li>
                                    <li>Team player</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Rules & Guidelines Section */}
                    <Card>
                        <CardContent className="px-4 space-y-4">
                            <h4 className="font-semibold">
                                Rules & Guidelines
                            </h4>

                            <div>
                                <p className="text-sm font-medium">
                                    What to Bring
                                </p>
                                <ul className="list-disc text-sm pl-5 space-y-1">
                                    <li>Water bottle</li>
                                    <li>ID proof</li>
                                    <li>Hat and sunscreen</li>
                                    <li>Comfortable clothes</li>
                                </ul>
                            </div>

                            <div>
                                <p className="text-sm font-medium">
                                    Safety Measures
                                </p>
                                <ul className="list-disc text-sm pl-5 space-y-1">
                                    <li>Follow coordinator instructions</li>
                                    <li>Use provided safety gear</li>
                                    <li>Stay hydrated</li>
                                </ul>
                            </div>

                            <div>
                                <p className="text-sm font-medium">
                                    Weather Advisory
                                </p>
                                <p className="text-sm">
                                    Event will proceed in light rain.
                                    Rescheduling in case of heavy rainfall.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
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
        </div>
    );
};

export default ActivityDetails;
