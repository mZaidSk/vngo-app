"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Heart, Calendar, Star } from "lucide-react";
import { ngoDataList } from "./data/NGOData";
import { NGO } from "./data/ngo";
import volunteerProfile from "../../setting/data/volunteerData";
import { Link, useNavigate } from "react-router-dom";

const getIcon = (name: string) => {
  if (name.includes("Green")) return "🌲";
  if (name.includes("Education")) return "🎓";
  if (name.includes("Healthcare")) return "❤️";
  return "🌐";
};

const ITEMS_PER_PAGE = 6;

const ExploreNGOsPage = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [sortOption, setSortOption] = useState("popular");
  const [showFollowedOnly, setShowFollowedOnly] = useState(false);
  // Track followed NGOs state
  const [followedNGOs, setFollowedNGOs] = useState(
    volunteerProfile.followedNGOs
  );

  const filteredNGOs = useMemo(() => {
    let filtered = [...ngoDataList];

    // Search term filter
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (ngo) =>
          ngo.name.toLowerCase().includes(term) ||
          ngo.tags.some((tag) => tag.toLowerCase().includes(term))
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((ngo) =>
        ngo.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    // Location filter
    if (selectedLocation !== "all") {
      filtered = filtered.filter((ngo) =>
        ngo.location.toLowerCase().includes(selectedLocation.toLowerCase())
      );
    }

    // Show only followed NGOs if the toggle is enabled
    if (showFollowedOnly) {
      filtered = filtered.filter((ngo) =>
        volunteerProfile.followedNGOs.includes(ngo.id)
      );
    }

    // Sorting logic
    if (sortOption === "rating") {
      filtered.sort((a, b) => b.stats.rating - a.stats.rating);
    } else if (sortOption === "popular") {
      filtered.sort(
        (a, b) =>
          parseInt(b.stats.totalVolunteers.replace(/,/g, "")) -
          parseInt(a.stats.totalVolunteers.replace(/,/g, ""))
      );
    }

    return filtered;
  }, [
    searchTerm,
    selectedCategory,
    selectedLocation,
    sortOption,
    showFollowedOnly,
  ]);

  const paginatedNGOs = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredNGOs.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredNGOs, currentPage]);

  const totalPages = Math.ceil(filteredNGOs.length / ITEMS_PER_PAGE);

  const handleFollowClick = (ngoId: string) => {
    const isFollowed = followedNGOs.includes(ngoId);

    if (isFollowed) {
      // Unfollow the NGO
      setFollowedNGOs(followedNGOs.filter((id) => id !== ngoId));
    } else {
      // Follow the NGO
      setFollowedNGOs([...followedNGOs, ngoId]);
    }

    // Optionally, you can update volunteerProfile here as well if needed
    volunteerProfile.followedNGOs = [...followedNGOs];
  };
  const handleViewProfileClick = (ngoId: string) => {
    console.log("Navigating to /explore/" + ngoId);
    navigate(`${ngoId}`);
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="sticky top-0 bg-white z-10 pb-3 px-4 border-b shadow-sm">
        <h1 className="text-2xl font-bold mb-2">Explore NGOs</h1>
        <p className="text-gray-600 mb-6">
          Discover organizations aligned with your values and make a real
          impact.
        </p>

        <div className="mb-4">
          <Input
            placeholder="Search NGOs by name or keyword..."
            className="max-w-xl"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-4 mb-3">
          <Select onValueChange={(value) => setSelectedCategory(value)}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="environment">Environment</SelectItem>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={(value) => setSelectedLocation(value)}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="All Locations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="sf">San Francisco</SelectItem>
              <SelectItem value="ny">New York</SelectItem>
              <SelectItem value="chicago">Chicago</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={(value) => setSortOption(value)}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Most Popular" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="recent">Recently Added</SelectItem>
            </SelectContent>
          </Select>
          {/* 🔍 Filter by Following */}
          <Select
            onValueChange={(value) =>
              setShowFollowedOnly(value === "following")
            }
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="All NGOs" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All NGOs</SelectItem>
              <SelectItem value="following">Followed NGOs</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 py-6  lg:grid-cols-3 gap-6">
        {paginatedNGOs.map((ngo: NGO) => (
          <Card
            key={ngo.id}
            className="rounded-2xl shadow-sm hover:shadow-lg transition  duration-300 border border-gray-200"
          >
            <CardHeader className="bg-muted h-32 rounded-t-2xl flex items-center justify-center text-5xl text-gray-600">
              {/*image  {getIcon(ngo.name)} */}
            </CardHeader>

            <CardContent className="space-y-2 px-4 ">
              <div className="font-semibold text-xl text-gray-800">
                {ngo.name}
              </div>
              <div className="text-sm text-gray-500">{ngo.category}</div>
              <div className="flex flex-wrap gap-2">
                {ngo.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="text-sm text-muted-foreground flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500" />
                {ngo.stats.rating} ({ngo.stats.reviews} reviews)
              </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-3 p-4  pt-0">
              <Button
                className="w-full font-medium"
                onClick={() => handleViewProfileClick(ngo.id)}
              >
                View Profile
              </Button>
              {/* <Link to={`/explore/${ngo.id}`}>
                <Button className="w-full font-medium">View Profile</Button>
              </Link> */}

              <div className="flex w-full gap-2">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 flex items-center justify-center gap-1 text-sm hover:bg-muted"
                  onClick={() => handleFollowClick(ngo.id)} // Pass the NGO id to handle the follow/unfollow action
                >
                  {volunteerProfile.followedNGOs.includes(ngo.id) ? (
                    <>
                      <Heart className="w-4 h-4 text-red-500" />
                      Unfollow
                    </>
                  ) : (
                    <>
                      <Heart className="w-4 h-4" />
                      Follow
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 flex items-center justify-center gap-1 text-sm hover:bg-muted"
                >
                  <Calendar className="w-4 h-4" />
                  Events
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8 gap-2">
        <Button
          variant="outline"
          size="sm"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Previous
        </Button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <Button
            key={index}
            variant={currentPage === index + 1 ? "default" : "outline"}
            size="sm"
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
        <Button
          variant="outline"
          size="sm"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ExploreNGOsPage;
