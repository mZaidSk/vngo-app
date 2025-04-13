import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Share2, Star } from "lucide-react";
import { ngoDataList } from "./data/NGOData";
import { useParams } from "react-router-dom";

const ViewNGOProfilePage = () => {
  const { ngoId } = useParams();
  const ngo = ngoDataList.find((n) => n.id === ngoId);

  if (!ngo) return <div>NGO not found</div>;

  return (
    <div className="py-2 px-5 w-full bg-white space-y-5">
      {/* Cover and Header */}
      <div className="relative w-full h-48 bg-gray-300">
        <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-sm">
          NGO Cover Image
        </p>

        {/* Overlapping NGO Info Card */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-3rem] w-[98%] max-w-7xl bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row items-center gap-4 z-10">
          {/* Profile Image */}
          <div className="w-20 h-20 bg-gray-200 rounded-full flex-shrink-0" />

          {/* NGO Info */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold">{ngo.name}</h2>
            <p className="text-sm text-gray-600">
              {ngo.location} ·{" "}
              <a
                href={`https://${ngo.website}`}
                className="text-blue-600 underline"
              >
                {ngo.website}
              </a>
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {ngo.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Follow Button */}
          <Button className="self-start md:self-center">+ Follow</Button>
        </div>
      </div>

      <div className="w-[98%] max-w-7xl mx-auto bg-white mt-16">
        {/* Stats */}

        <Card>
          <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4  text-center">
            <div>
              <p className="text-lg font-bold">{ngo.stats.totalVolunteers}</p>
              <p className="text-sm text-gray-500">Total Volunteers</p>
            </div>
            <div>
              <p className="text-lg font-bold">
                {ngo.stats.activitiesCompleted}
              </p>
              <p className="text-sm text-gray-500">Activities Completed</p>
            </div>
            <div>
              <p className="text-lg font-bold">{ngo.stats.peopleImpacted}</p>
              <p className="text-sm text-gray-500">People Impacted</p>
            </div>
            <div>
              <p className="text-lg font-bold flex items-center justify-center gap-1">
                {ngo.stats.rating}{" "}
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              </p>
              <p className="text-sm text-gray-500">
                ({ngo.stats.reviews} reviews)
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Current Activities */}

        <Card className="mt-3">
          <CardContent className="px-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">Current Activities</h3>
              <div className="space-x-2">
                <Button variant="outline">All Categories</Button>
                <Button variant="outline">All Locations</Button>
              </div>
            </div>
            {ngo.currentActivities.map((activity) => (
              <div
                key={activity.id}
                className="bg-gray-100 p-4 rounded-lg space-y-2 w-[40%] max-w-md"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-md font-semibold">{activity.title}</p>
                    <p className="text-sm text-gray-500">
                      {activity.status} · {activity.time} · {activity.spotsLeft}
                    </p>
                  </div>
                  <Button>Join Activity</Button>
                </div>
                <div className="flex gap-4 text-gray-500 text-sm">
                  <button className="flex items-center gap-1 hover:text-blue-600">
                    <Share2 className="w-4 h-4" /> Share
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-600">
                    <MessageCircle className="w-4 h-4" /> Comment
                  </button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Impact Gallery */}

        <Card className="mt-3">
          <CardContent className="px-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">Impact Gallery</h3>
              <Button variant="outline">All Years</Button>
            </div>
            <div className="h-40 bg-gray-100 flex items-center justify-center text-gray-400 rounded">
              Image Placeholder
            </div>
          </CardContent>
        </Card>

        {/* Testimonials */}

        <Card className="mt-3">
          <CardContent className="px-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold">What Volunteers Say</h3>
              <Button variant="outline">Post Review</Button>
            </div>
            {ngo.testimonials.map((t) => (
              <div key={t.id} className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">{t.name}</p>
                <div className="flex gap-1 text-yellow-400">
                  {Array.from({ length: t.rating }, (_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm mt-1">{t.feedback}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Team */}

        <Card className="mt-3">
          <CardContent className="px-4">
            <h3 className="text-lg font-semibold mb-4">Our Team & Partners</h3>
            <div className="grid gap-3">
              {ngo.team.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg"
                >
                  <div className="w-10 h-10 bg-gray-300 rounded-full" />
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}

        <Card className="bg-black mt-3 text-white">
          <CardContent className="p-6 text-center space-y-2">
            <h3 className="text-lg font-semibold">Make a Difference Today</h3>
            <p className="text-sm">
              Every small effort creates a ripple of change in our community
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Button variant="secondary">Join as Volunteer</Button>
              <Button variant="outline" className="text-white border-white">
                Support Us
              </Button>
              <Button variant="outline" className="text-white border-white">
                Contact Us
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ViewNGOProfilePage;
