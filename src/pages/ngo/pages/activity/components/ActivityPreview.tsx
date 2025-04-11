import React from "react";
import {
    CalendarClock,
    MapPin,
    Users,
    Repeat,
    Eye,
    BadgeCheck,
    Layers,
    Image as ImageIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ActivityPreviewProps {
    values: {
        title: string;
        description: string;
        type: string;
        location: string;
        startDateTime: string;
        endDateTime: string;
        maxParticipants: string;
        registrationDeadline: string;
        skills: string[];
        coverImage: File | null;
        isRecurring: boolean;
        visibility: string;
    };
}

const ActivityPreview: React.FC<ActivityPreviewProps> = ({ values }) => {
    return (
        <Card className="shadow-xl rounded-2xl">
            <CardContent className="p-4 space-y-4">
                {/* Cover Image */}
                <div className="h-40 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                    {values.coverImage ? (
                        <img
                            src={URL.createObjectURL(values.coverImage)}
                            alt="Cover Preview"
                            className="h-full w-full object-cover rounded"
                        />
                    ) : (
                        <div className="text-muted-foreground text-sm text-center px-2 flex flex-col items-center gap-1">
                            <ImageIcon className="w-6 h-6" />
                            No cover image
                        </div>
                    )}
                </div>

                {/* Title + Status */}
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-foreground">
                        {values.title || "Untitled Activity"}
                    </h2>
                    <div className="text-xs px-2 py-1 rounded-full bg-green-500 text-white flex items-center gap-1">
                        <BadgeCheck className="w-3 h-3" />
                        Upcoming
                    </div>
                </div>

                {/* Description */}
                {values.description && (
                    <p className="text-sm text-muted-foreground">
                        {values.description}
                    </p>
                )}

                {/* Info Section */}
                <div className="text-sm text-muted-foreground grid grid-cols-1 gap-2">
                    {/* Location */}
                    {values.location && (
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-foreground" />
                            {values.location}
                        </div>
                    )}

                    {/* Type + Visibility + Recurring */}
                    <div className="flex items-center gap-4 flex-wrap">
                        {values.type && (
                            <div className="flex items-center gap-2">
                                <Layers className="w-4 h-4 text-foreground" />
                                {values.type}
                            </div>
                        )}
                        {values.visibility && (
                            <div className="flex items-center gap-2">
                                <Eye className="w-4 h-4 text-foreground" />
                                {values.visibility}
                            </div>
                        )}
                        {values.isRecurring && (
                            <div className="flex items-center gap-2">
                                <Repeat className="w-4 h-4 text-foreground" />
                                Recurring
                            </div>
                        )}
                    </div>

                    {/* Date Range */}
                    <div className="flex items-center gap-4 flex-wrap">
                        {values.startDateTime && (
                            <div className="flex items-center gap-2">
                                <CalendarClock className="w-4 h-4 text-foreground" />
                                {new Date(
                                    values.startDateTime
                                ).toLocaleString()}
                            </div>
                        )}
                        {values.endDateTime && (
                            <div className="flex items-center gap-2">
                                <CalendarClock className="w-4 h-4 text-foreground" />
                                {new Date(values.endDateTime).toLocaleString()}
                            </div>
                        )}
                    </div>

                    {/* Registration Deadline & Max Participants */}
                    <div className="flex items-center gap-4 flex-wrap">
                        {values.registrationDeadline && (
                            <div className="flex items-center gap-2">
                                <CalendarClock className="w-4 h-4 text-foreground" />
                                Register by{" "}
                                {new Date(
                                    values.registrationDeadline
                                ).toLocaleDateString()}
                            </div>
                        )}
                        {values.maxParticipants && (
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-foreground" />
                                {values.maxParticipants} spots
                            </div>
                        )}
                    </div>
                </div>

                {/* Skills */}
                {values.skills.length > 0 && (
                    <div>
                        <div className="font-medium text-foreground mb-1">
                            Skills Required:
                        </div>
                        <div className="flex flex-wrap gap-1">
                            {values.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="text-xs bg-muted px-2 py-1 rounded-full border text-foreground"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Footer */}
                <hr className="my-2" />
                <div className="text-xs text-muted-foreground">
                    <Users className="inline w-3 h-3 mr-1" />0 Volunteers
                    Registered
                </div>
            </CardContent>
        </Card>
    );
};

export default ActivityPreview;
