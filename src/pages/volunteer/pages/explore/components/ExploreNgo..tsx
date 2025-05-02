import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { getAllNgoProfiles } from "@/store/slice/NgoProfileSlice";

const ExploreNgo = () => {
    const dispatch = useDispatch<AppDispatch>();
    const ngoSelector = useSelector(
        (state: RootState) => state.ngoProfile.profiles
    );
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        dispatch(getAllNgoProfiles());
    }, [dispatch]);

    const ngoList = Array.isArray(ngoSelector?.data) ? ngoSelector.data : [];

    const filteredNgoList = ngoList.filter((ngo: any) => {
        const search = searchTerm.toLowerCase();
        return (
            ngo?.organization_name?.toLowerCase().includes(search) ||
            ngo?.city?.toLowerCase().includes(search) ||
            ngo?.focus_areas?.toLowerCase().includes(search)
        );
    });

    return (
        <div className="p-6 space-y-4 max-w-6xl mx-auto">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Explore NGOs</h1>
                <input
                    type="text"
                    placeholder="Search NGO..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border rounded-md p-2 text-sm w-72"
                />
            </div>

            {filteredNgoList.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredNgoList.map((ngo: any) => (
                        <Card
                            key={ngo.id}
                            className="rounded-xl shadow-md h-full flex flex-col justify-between"
                        >
                            <CardContent className="p-4 flex flex-col h-full">
                                <div className="flex items-start gap-4">
                                    <Avatar>
                                        <AvatarImage
                                            src={ngo.logo_url}
                                            alt={ngo.organization_name}
                                        />
                                        <AvatarFallback>
                                            {ngo.organization_name?.[0]}
                                        </AvatarFallback>
                                    </Avatar>

                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <Link
                                                    to={`/ngo/profile/${ngo.id}`}
                                                >
                                                    <p className="font-semibold">
                                                        {ngo.organization_name}
                                                    </p>
                                                </Link>
                                                <p className="text-sm text-muted-foreground">
                                                    {ngo.city}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="h-36 mt-4 rounded-lg">
                                    <img
                                        src={ngo.banner_url}
                                        alt="NGO Banner"
                                        className="w-full h-full object-cover rounded-sm"
                                    />
                                </div>

                                <p className="mt-4 text-sm text-muted-foreground">
                                    {ngo.mission}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-2">
                                    {ngo.focus_areas &&
                                        ngo.focus_areas
                                            .split(",")
                                            .map(
                                                (
                                                    area: string,
                                                    index: number
                                                ) => (
                                                    <Badge
                                                        key={index}
                                                        variant="secondary"
                                                    >
                                                        #{area.trim()}
                                                    </Badge>
                                                )
                                            )}
                                </div>

                                <div className="mt-auto pt-4 flex justify-end">
                                    <Link
                                        to={`/volunteer/explore/${ngo.ngo_id}`}
                                    >
                                        <Button size="sm">View Profile</Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            ) : (
                <div className="text-center text-muted-foreground mt-10">
                    No NGOs available.
                </div>
            )}
        </div>
    );
};

export default ExploreNgo;
