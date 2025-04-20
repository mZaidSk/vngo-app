import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Edit, User } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { getVolunteerProfileByUserId } from "@/store/slice/VolunteerProfileSlice";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const VolunteerProfile = () => {
    const { vId } = useParams();
    const authSelector = useSelector((state: RootState) => state.auth.user);
    const volunteerSelector = useSelector(
        (state: RootState) => state.volunteerProfile.profile
    );
    const dispatch = useDispatch<AppDispatch>();

    console.log(volunteerSelector);

    const getProfile = async () => {
        if (vId) {
            await dispatch(getVolunteerProfileByUserId(vId));
        } else {
            await dispatch(
                getVolunteerProfileByUserId(authSelector?.data?.user_id)
            );
        }
    };

    useEffect(() => {
        getProfile();
    }, []);

    function calculateAge(dob: string | Date): number {
        const today = new Date();
        const birthDate = new Date(dob);

        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth();
        const day = today.getDate();

        // Adjust age if the birthday hasn't occurred yet this year
        if (
            month < birthDate.getMonth() ||
            (month === birthDate.getMonth() && day < birthDate.getDate())
        ) {
            age--;
        }

        return age;
    }

    if (!volunteerSelector?.data || !authSelector?.data?.profile) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <Card className="w-full max-w-md text-center shadow-lg border border-destructive/20">
                    <CardContent className="p-8 space-y-5">
                        <h2 className="text-2xl font-bold text-destructive">
                            Profile Not Created
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Your NGO profile is incomplete or missing. Please
                            create one to get started.
                        </p>
                        <Link to={"/volunteer/profile/form"}>
                            <Button size="lg" className="w-full cursor-pointer">
                                Create Profile
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="flex flex-col p-6 px-20">
            <div className="space-y-6">
                {/* Header */}
                <Card>
                    <CardContent className="flex items-center space-x-4 p-6">
                        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                            <User className="w-8 h-8 text-gray-500" />
                        </div>

                        <div className="flex-1">
                            <h2 className="text-xl font-semibold">
                                {volunteerSelector?.data?.fullName}
                            </h2>
                            <div className="flex items-center text-sm text-gray-500">
                                <MapPin className="w-4 h-4 mr-1" />
                                {volunteerSelector?.data?.address} |{" "}
                                {calculateAge(volunteerSelector?.data?.dob)}{" "}
                                years old
                            </div>
                        </div>
                        {!vId && (
                            <Link
                                to={
                                    "/volunteer/profile/form/" +
                                    authSelector?.data?.profile?.profile_id
                                }
                            >
                                <Button variant="outline" size="sm">
                                    <Edit className="w-4 h-4 mr-2" /> Edit
                                    Profile
                                </Button>
                            </Link>
                        )}
                    </CardContent>
                </Card>

                {/* Skills & Interests */}
                <Card>
                    <CardContent className="p-6">
                        <h3 className="text-lg font-medium mb-2">
                            Skills & Interests
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {volunteerSelector?.data?.skills
                                .split(",")
                                .map((skill: string) => (
                                    <Badge key={skill} variant="secondary">
                                        {skill}
                                    </Badge>
                                ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Volunteer History */}
                <Card>
                    <CardContent className="p-6 space-y-4">
                        <h3 className="text-lg font-medium">
                            Volunteer History
                        </h3>
                        {volunteerSelector?.data?.applications?.length > 0 ? (
                            <div className="space-y-4">
                                {volunteerSelector.data.applications.map(
                                    (app: any, index: number) => (
                                        <div
                                            key={index}
                                            className="border rounded-lg p-4 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-4"
                                        >
                                            <div>
                                                <p className="font-semibold text-sm text-gray-800">
                                                    Activity
                                                </p>
                                                <p className="text-sm text-gray-600 break-words">
                                                    {app.activity?.title}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-sm text-gray-800">
                                                    Status
                                                </p>
                                                <p className="text-sm text-blue-600">
                                                    {app.status}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-sm text-gray-800">
                                                    Applied On
                                                </p>
                                                <p className="text-sm text-gray-600">
                                                    {new Date(
                                                        app.created_at
                                                    ).toLocaleString()}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        ) : (
                            <p className="text-sm text-gray-500">
                                No volunteering history available.
                            </p>
                        )}
                    </CardContent>
                </Card>

                {/* Social Impact */}
                <Card>
                    <CardContent className="p-6 grid grid-cols-3 gap-4 text-center">
                        <div>
                            <p className="text-2xl font-bold">
                                {volunteerSelector?.data?.applications.length}
                            </p>
                            <p className="text-sm text-gray-500">
                                Total Activities
                            </p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold">
                                {volunteerSelector?.data?.applications?.filter(
                                    (app: any) => app.status === "COMPLETED"
                                ).length || 0}
                            </p>
                            <p className="text-sm text-gray-500">
                                Activities Completed
                            </p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold">5</p>
                            <p className="text-sm text-gray-500">
                                Causes Supported
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Privacy Preferences */}
                {!vId && (
                    <Card>
                        <CardContent className="p-6 space-y-4">
                            <h3 className="text-lg font-medium">
                                Privacy Preferences
                            </h3>
                            <div className="flex items-center justify-between">
                                <span>Profile Visibility</span>
                                <Switch />
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Email Notifications</span>
                                <Switch />
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Data Sharing</span>
                                <Switch />
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
};

export default VolunteerProfile;
