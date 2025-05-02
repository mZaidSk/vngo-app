import React, { useEffect } from "react";
import { NGOProfileHeader } from "./profile-component/NGOProfileHeader";
import { NGOStats } from "./profile-component/NGOStats";
import { NGOActivities } from "./profile-component/NGOActivities";
import { NGOImpactGallery } from "./profile-component/NGOImpactGallery";
import { NGOCTA } from "./profile-component/NGOCTA";
import { NGOFooter } from "./profile-component/NGOFooter";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { getNgoProfileById } from "@/store/slice/NgoProfileSlice";
import { useParams } from "react-router-dom";

const Profile = () => {
    const { ngoId } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const ngoProfileSelector = useSelector(
        (state: RootState) => state.ngoProfile.profile
    );

    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const isOwner =
        user?.user_id === ngoProfileSelector?.data?.user_id ||
        user?.user_id === ngoId;

    useEffect(() => {
        if (ngoId) {
            dispatch(getNgoProfileById(ngoId));
        }
    }, [ngoId]);

    const noProfileFound = !ngoProfileSelector?.data;

    return (
        <div className="p-4 space-y-6 max-w-6xl mx-auto">
            {noProfileFound ? (
                <div className="text-center py-20">
                    <h2 className="text-2xl font-semibold text-gray-600">
                        NGO Profile Not Found
                    </h2>
                    <p className="text-gray-500 mt-2">
                        We couldn't find the requested profile. Please check the
                        URL or try again later.
                    </p>
                </div>
            ) : (
                <>
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
                </>
            )}
        </div>
    );
};

export default Profile;
