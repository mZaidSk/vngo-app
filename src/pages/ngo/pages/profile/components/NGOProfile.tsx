import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import {
    getNgoProfileById,
    getNgoProfileByUserId,
} from "@/store/slice/NgoProfileSlice";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NGOProfileHeader } from "./profile-component/NGOProfileHeader";
import { NGOStats } from "./profile-component/NGOStats";
import { NGOActivities } from "./profile-component/NGOActivities";
import { NGOImpactGallery } from "./profile-component/NGOImpactGallery";
import { NGOCTA } from "./profile-component/NGOCTA";
import { NGOFooter } from "./profile-component/NGOFooter";

export default function NGOProfile() {
    const { id } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const ngoProfileSelector = useSelector(
        (state: RootState) => state.ngoProfile.profile
    );
    const user = JSON.parse(localStorage.getItem("user") || "");
    const isOwner = user?.user_id === ngoProfileSelector?.data?.user_id;

    const getUserProfile = () => {
        if (id) dispatch(getNgoProfileById(id));
        else dispatch(getNgoProfileByUserId());
    };

    useEffect(() => {
        getUserProfile();
    }, [id]);

    if (!ngoProfileSelector?.data && isOwner) {
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
                        <Link to={"/ngo/profile/create"}>
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
        <div className="p-4 space-y-6 max-w-6xl mx-auto">
            <NGOProfileHeader
                profile={ngoProfileSelector?.data}
                isOwner={isOwner}
            />
            <NGOStats />
            <NGOActivities
                activities={ngoProfileSelector?.data?.activities}
                isOwner={isOwner}
            />
            <NGOImpactGallery
                galleryUrls={ngoProfileSelector?.data?.gallery_urls}
            />
            <NGOCTA />
            <NGOFooter profile={ngoProfileSelector?.data} />
        </div>
    );
}
