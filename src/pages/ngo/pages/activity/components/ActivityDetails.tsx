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
    Globe,
    Twitter,
    Instagram,
    Linkedin,
    Edit,
    Delete,
    Trash,
} from "lucide-react";

import { AvatarFallback } from "@radix-ui/react-avatar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { getActivityById, deleteActivity } from "@/store/slice/ActivitySlice";
import { useEffect } from "react";
import { toast } from "sonner";
import { createApplication } from "@/store/slice/ApplicationSlice";
import { createComment } from "@/store/slice/CommentSlice";
import CommentSection from "./CommentSection";

const ActivityDetails = () => {
    const { id } = useParams();
    const authSelector = useSelector((state: RootState) => state.auth.user);
    const activitySelector = useSelector(
        (state: RootState) => state.activity.activity
    );

    const activity = activitySelector?.data;
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const getActivity = async () => {
        if (id) {
            const data = await dispatch(getActivityById(id));
            console.log(data);
        }
    };

    const user = JSON.parse(localStorage.getItem("user") || "");

    const isOwner =
        user?.user_id === activitySelector?.data?.ngoProfile?.user_id;

    useEffect(() => {
        if (id) {
            getActivity();
        }
    }, []);

    const handleDeleteActivity = (id: any) => {
        dispatch(deleteActivity(id))
            .then((res: any) => {
                console.log(res);
                toast(res?.payload?.message || "Activity Deleted Successfully");
                navigate("/ngo/activities");
            })
            .catch((err: any) => {
                console.log(err);
                toast(err?.payload?.message || "Error Deleted Activity");
                navigate("/ngo/activities");
            });
    };

    const handleJoinNowButton = async () => {
        const payload = {
            volunteer_profile_id: authSelector?.data?.profile?.profile_id,
            activity_id: id,
        };

        // Dispatch the action to create the application
        const data = await dispatch(createApplication(payload));

        if (data?.payload?.success) {
            toast.success("Registration Successful");
        } else {
            toast.error(data?.payload?.error?.message);
        }
    };

    return (
        <div className="p-4 space-y-6 max-w-6xl mx-auto">
            {/* Banner */}
            <Card className="h-48 bg-muted flex items-center justify-center relative">
                {activity?.bannerImage ? (
                    <img
                        src={activity.bannerImage}
                        alt="Banner"
                        className="absolute inset-0 w-full h-full object-cover rounded-md"
                    />
                ) : (
                    <span className="text-muted-foreground z-10">
                        Activity Banner Image
                    </span>
                )}
            </Card>

            {/* Title and NGO */}
            <div className="my-6">
                <h1 className="text-2xl font-semibold flex">
                    {activity?.title}{" "}
                    <Badge className="ms-auto">{activity?.status}</Badge>
                </h1>
                <p className="text-muted-foreground mt-1">
                    {activity?.description}
                </p>

                <Card className="mt-4">
                    <CardContent className="px-4 space-y-2">
                        <div className="flex items-start gap-4">
                            {/* Avatar */}
                            <Avatar className="w-12 h-12">
                                <AvatarImage
                                    src={activity?.ngoProfile?.logo_url}
                                />
                                <AvatarFallback>CN</AvatarFallback>
                                {/* Replace with actual image or emoji */}
                            </Avatar>

                            {/* Organization Info */}
                            <div>
                                <h2 className="text-base font-semibold">
                                    {activity?.ngoProfile?.organization_name}
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                    {activity?.ngoProfile?.address_line_1},{" "}
                                    {activity?.ngoProfile?.city},{" "}
                                    {activity?.ngoProfile?.state},
                                </p>
                                {/* Social Icons */}
                                <div className="flex gap-3 mt-2 text-muted-foreground">
                                    {activity?.ngoProfile?.website && (
                                        <a
                                            href={activity?.ngoProfile?.website}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <Globe
                                                size={20}
                                                className="w-4 h-4 cursor-pointer"
                                            />
                                        </a>
                                    )}
                                    {activity?.ngoProfile?.twitter && (
                                        <a
                                            href={activity?.ngoProfile?.twitter}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <Twitter
                                                size={20}
                                                className="w-4 h-4 cursor-pointer"
                                            />
                                        </a>
                                    )}
                                    {activity?.ngoProfile?.instagram && (
                                        <a
                                            href={
                                                activity?.ngoProfile?.instagram
                                            }
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <Instagram
                                                size={20}
                                                className="w-4 h-4 cursor-pointer"
                                            />
                                        </a>
                                    )}
                                    {activity?.ngoProfile?.linkedin && (
                                        <a
                                            href={
                                                activity?.ngoProfile?.linkedin
                                            }
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <Linkedin
                                                size={20}
                                                className="w-4 h-4 cursor-pointer"
                                            />
                                        </a>
                                    )}
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
                                    {activity?.ngoProfile?.email}
                                </p>
                            </div>
                            <div>
                                <p className="text-muted-foreground">Phone</p>
                                <p className="font-medium">
                                    {" "}
                                    {activity?.ngoProfile?.phone}
                                </p>
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
                            <p>{activity?.detailedDescription}</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>{activity?.goalsHighlights}</li>
                                {/* Add more based on your API shape */}
                            </ul>
                            <p className="font-semibold">Past Events:</p>
                            <p>{activity?.pastEvents}</p>
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
                                        {activity?.startDate}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-muted-foreground">
                                        End Date
                                    </p>
                                    <p className="font-medium">
                                        {activity?.endDate}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-muted-foreground">
                                        Time
                                    </p>
                                    <p className="font-medium">
                                        {activity?.startTime} –{" "}
                                        {activity?.endTime}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-muted-foreground">
                                        Duration
                                    </p>
                                    <p className="font-medium">
                                        {activity?.duration}
                                    </p>
                                </div>
                            </div>
                            <div className="bg-muted text-sm text-muted-foreground p-3 rounded-md">
                                Timezone: {activity?.timezone}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Location */}
                    <Card>
                        <CardContent className="px-4 space-y-2">
                            <h3 className="text-lg font-medium">
                                Venue & Location
                            </h3>
                            <p className="font-medium">{activity?.venueName}</p>
                            <p>{activity?.fullAddress}</p>
                            <div className="h-48 bg-muted flex items-center justify-center rounded">
                                {activity?.googleMapsUrl ? (
                                    <iframe
                                        src={activity?.googleMapsUrl}
                                        className="w-full h-full rounded"
                                        title="Google Maps"
                                    />
                                ) : (
                                    // <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    <span className="text-muted-foreground">
                                        Google Maps Embed
                                    </span>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="px-4">
                            <h3 className="text-lg font-medium mb-2">
                                Gallery
                            </h3>
                            <div className="flex gap-2">
                                {[
                                    activity?.image1,
                                    activity?.image2,
                                    activity?.image3,
                                ].map(
                                    (img, idx) =>
                                        img && (
                                            <div
                                                key={idx}
                                                className="flex-1 h-36 rounded overflow-hidden"
                                            >
                                                <img
                                                    src={img}
                                                    alt={`Gallery ${idx + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        )
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-4">
                    {/* Likes & Join Button Section */}
                    {user.role === "VOLUNTEER" && (
                        <Card>
                            <CardContent className="px-4 space-y-3">
                                <p className="text-sm text-gray-500">
                                    ❤️ 245 likes
                                </p>

                                <Button
                                    className="w-full bg-[#0A1128] text-white"
                                    onClick={handleJoinNowButton}
                                >
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
                    )}
                    {isOwner && (
                        <div className="flex flex-col gap-3">
                            <Link
                                to={`/ngo/activities/${id}/volunteer`}
                                state={{ activityId: id }}
                            >
                                <Button
                                    size="lg"
                                    className="w-full cursor-pointer"
                                >
                                    <Users className="w-4 h-4 mr-1" />
                                    Volunteer List
                                </Button>
                            </Link>
                            <Link to={`/ngo/activities/form/${id}`}>
                                <Button
                                    size="lg"
                                    className="w-full cursor-pointer"
                                >
                                    <Edit className="w-4 h-4 mr-1" />
                                    Edit Activity
                                </Button>
                            </Link>
                            <Button
                                size="lg"
                                variant="destructive"
                                className="w-full cursor-pointer"
                                onClick={() => handleDeleteActivity(id)}
                            >
                                <Trash className="w-4 h-4 mr-1" />
                                Delete Activity
                            </Button>
                        </div>
                    )}
                    {/* Volunteer Requirements Section */}
                    <Card>
                        <CardContent className="px-4 space-y-3">
                            <h4 className="font-semibold">
                                Volunteer Requirements
                            </h4>
                            <div className="text-sm space-y-1">
                                <div className="flex justify-between">
                                    <span>Total spots</span>
                                    <span className="font-medium">
                                        {activity?.totalSpots}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Spots left</span>
                                    <span className="font-medium">
                                        {activity?.spotsLeft}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Age requirement</span>
                                    <span className="font-medium">
                                        {activity?.minAge}+
                                    </span>
                                </div>
                            </div>

                            <div>
                                <p className="text-sm font-medium">
                                    Required Skills
                                </p>
                                <ul className="list-disc text-sm pl-5 space-y-1">
                                    {activity?.skills.map((skill: string) => (
                                        <li key={skill}>{skill}</li>
                                    ))}
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
            {/* <Card>
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
            </Card> */}
            <CommentSection
                id={id}
                comments={activitySelector?.data?.comments || []}
            />
        </div>
    );
};

export default ActivityDetails;
