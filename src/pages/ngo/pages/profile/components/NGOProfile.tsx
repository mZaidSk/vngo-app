import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { Globe, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import {
    getNgoProfileById,
    getNgoProfileByUserId,
} from "@/store/slice/NgoProfileSlice";

export default function NGOProfile() {
    const { id } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const ngoProfileSelector = useSelector(
        (state: RootState) => state.ngoProfile.profile
    );

    console.log(ngoProfileSelector);

    const [statusFilter, setStatusFilter] = useState("All Status");
    const [sortBy, setSortBy] = useState("Newest");

    const user = JSON.parse(localStorage.getItem("user") || "");

    const getUserProfile = () => {
        if (id) dispatch(getNgoProfileById(id)).then((res) => console.log(res));
        else dispatch(getNgoProfileByUserId()).then((res) => console.log(res));
    };

    useEffect(() => {
        getUserProfile();
    }, [id]);

    return (
        <div className="p-4 space-y-6 max-w-6xl mx-auto">
            {!ngoProfileSelector?.data ? (
                <div className="flex items-center justify-center min-h-[60vh]">
                    <Card className="w-full max-w-md text-center shadow-lg border border-destructive/20">
                        <CardContent className="p-8 space-y-5">
                            <h2 className="text-2xl font-bold text-destructive">
                                Profile Not Created
                            </h2>
                            <p className="text-sm text-muted-foreground">
                                Your NGO profile is incomplete or missing.
                                Please create one to get started.
                            </p>
                            <Link to={"/ngo/profile/create"}>
                                <Button
                                    size="lg"
                                    className="w-full cursor-pointer"
                                >
                                    Create Profile
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            ) : (
                <>
                    {/* Cover Banner Placeholder */}
                    <div className="h-48 md:h-64 rounded-xl overflow-hidden">
                        <img
                            src={ngoProfileSelector?.data?.banner_url}
                            alt="NGO Cover Banner"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* NGO Info Card */}
                    <Card className="shadow-md">
                        <CardContent className="flex items-center gap-4 p-6">
                            <Avatar className="w-16 h-16">
                                <AvatarImage
                                    src={ngoProfileSelector?.data?.logo_url}
                                    alt={
                                        ngoProfileSelector?.data
                                            ?.organization_name
                                    }
                                />
                                <AvatarFallback>
                                    {ngoProfileSelector?.data?.organization_name?.slice(
                                        0,
                                        2
                                    )}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <div className="flex items-center gap-2">
                                    <h2 className="text-lg font-semibold">
                                        {
                                            ngoProfileSelector?.data
                                                ?.organization_name
                                        }
                                    </h2>
                                    <Badge variant="outline">Verified</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    {ngoProfileSelector?.data?.city},{" "}
                                    {ngoProfileSelector?.data?.country}
                                </p>
                                <p className="text-sm text-muted-foreground ">
                                    {ngoProfileSelector?.data?.mission}
                                </p>
                                {user?.user_id ===
                                    ngoProfileSelector?.data?.user_id && (
                                    <Link
                                        to="/ngo/profile/edit"
                                        state={{
                                            isEditMode: true,
                                            profileId:
                                                ngoProfileSelector?.data
                                                    ?.ngo_id, // Replace with the actual ID dynamically
                                        }}
                                    >
                                        <Button
                                            size="sm"
                                            className="mt-2 cursor-pointer"
                                        >
                                            Edit Profile
                                        </Button>
                                    </Link>
                                )}
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
                            <p className="text-sm text-muted-foreground">
                                Focus Areas
                            </p>
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
                                    onChange={(e) =>
                                        setStatusFilter(e.target.value)
                                    }
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
                                            👥 {activity.volunteers} volunteers
                                            &nbsp; ⏰{" "}
                                            {activity.time || activity.date}
                                        </div>
                                        <Button
                                            variant="outline"
                                            className="w-full"
                                        >
                                            {activity.cta}
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Impact Gallery */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">
                            Impact Gallery
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {ngoProfileSelector?.data.gallery_urls.map(
                                (url: string, idx: number) => (
                                    <img
                                        key={idx}
                                        src={url}
                                        alt={`gallery-${idx}`}
                                        className="h-36 object-cover w-full rounded-md"
                                    />
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
                                Join our community of volunteers and help us
                                create positive change in this world.
                            </p>
                            <div className="flex justify-center gap-4">
                                <Button variant="secondary">
                                    Become a Volunteer
                                </Button>
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
                                    {
                                        ngoProfileSelector?.data
                                            ?.organization_name
                                    }
                                </h4>
                                <p>{ngoProfileSelector?.data?.mission}</p>
                                <div className="space-y-1">
                                    <p>
                                        Email:{" "}
                                        <a
                                            href={`mailto:${ngoProfileSelector?.data?.email}`}
                                            className="hover:underline"
                                        >
                                            {ngoProfileSelector?.data?.email}
                                        </a>
                                    </p>
                                    <p>
                                        Phone: {ngoProfileSelector?.data?.phone}
                                    </p>
                                </div>
                            </div>

                            {/* Follow & Subscribe */}
                            <div className="flex-1 space-y-3">
                                <div>
                                    <h4 className="text-foreground font-medium">
                                        Stay Connected
                                    </h4>
                                    <div className="flex items-center gap-3 mt-1">
                                        {ngoProfileSelector?.data.website && (
                                            <a
                                                href={
                                                    ngoProfileSelector?.data
                                                        .website
                                                }
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <Globe size={20} />
                                            </a>
                                        )}
                                        {ngoProfileSelector?.data.twitter && (
                                            <a
                                                href={
                                                    ngoProfileSelector?.data
                                                        .twitter
                                                }
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <Twitter size={20} />
                                            </a>
                                        )}
                                        {ngoProfileSelector?.data.instagram && (
                                            <a
                                                href={
                                                    ngoProfileSelector?.data
                                                        .instagram
                                                }
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <Instagram size={20} />
                                            </a>
                                        )}
                                        {ngoProfileSelector?.data.linkedin && (
                                            <a
                                                href={
                                                    ngoProfileSelector?.data
                                                        .linkedin
                                                }
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <Linkedin size={20} />
                                            </a>
                                        )}
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
                </>
            )}
        </div>
    );
}
