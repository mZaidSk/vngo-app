import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function NGOProfileHeader({
    profile,
    isOwner,
}: {
    profile: any;
    isOwner: boolean;
}) {
    return (
        <>
            {/* Cover Banner */}
            <div className="h-48 md:h-64 rounded-xl overflow-hidden">
                <img
                    src={profile?.banner_url}
                    alt="NGO Cover Banner"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* NGO Info Card */}
            <Card className="shadow-md">
                <CardContent className="flex items-center gap-4 p-6">
                    <Avatar className="w-16 h-16">
                        <AvatarImage
                            src={profile?.logo_url}
                            alt={profile?.organization_name}
                        />
                        <AvatarFallback>
                            {profile?.organization_name?.slice(0, 2)}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <div className="flex items-center gap-2">
                            <h2 className="text-lg font-semibold">
                                {profile?.organization_name}
                            </h2>
                            <Badge variant="outline">Verified</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            {profile?.city}, {profile?.country}
                        </p>
                        <p className="text-sm text-muted-foreground ">
                            {profile?.mission}
                        </p>
                        {isOwner && (
                            <Link
                                to="/ngo/profile/edit"
                                state={{
                                    isEditMode: true,
                                    profileId: profile?.ngo_id,
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
        </>
    );
}
