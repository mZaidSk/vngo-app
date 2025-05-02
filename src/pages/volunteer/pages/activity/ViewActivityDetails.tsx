import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bookmark, BookmarkCheck, Calendar, Clock, MapPin } from "lucide-react";
import { useParams } from "react-router-dom";
import ApplyModal from "./ApplyModal";
import { activityDataArray } from "../component/data/activityData";
import volunteerProfile from "../../setting/data/volunteerData";

const ViewActivityDetails = () => {
  const { id } = useParams();
  const [isApplyModalOpen, setApplyModalOpen] = useState(false);

  const activityData = activityDataArray.find((activity) => activity.id === id);

  console.log(activityData);
  console.log(id);

  if (!activityData) return <p className="text-center">Activity not found.</p>;
  const [bookmarkedActivities, setBookmarkedActivities] = useState<string[]>(
    volunteerProfile.bookmarkedActivities
  );
  const isBookmarked = bookmarkedActivities.includes(activityData.id);

  const handleBookmarkToggle = () => {
    let updatedBookmarks: string[];

    if (isBookmarked) {
      updatedBookmarks = bookmarkedActivities.filter(
        (activityId) => activityId !== activityData.id
      );
    } else {
      updatedBookmarks = [...bookmarkedActivities, activityData.id];
    }

    setBookmarkedActivities(updatedBookmarks);
    volunteerProfile.bookmarkedActivities = updatedBookmarks; // optional sync
  };
  return (
    <div className="max-w-5xl mx-auto p-4 bg-[#E6F4EA] space-y-6">
      <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-white font-bold text-xl rounded-xl">
        {activityData.banner}
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-2xl font-semibold">{activityData.title}</h1>
          <p className="text-gray-600">{activityData.organizer}</p>
        </div>
        <Button
          variant="ghost"
          onClick={handleBookmarkToggle}
          className="text-lg flex items-center gap-2"
        >
          {isBookmarked ? (
            <BookmarkCheck className="w-10 h-10 text-green-600" />
          ) : (
            <Bookmark className="w-10 h-10 text-gray-600" />
          )}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 space-y-4">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold mb-2">About This Project</h2>
              <p>{activityData.about}</p>

              <h3 className="font-semibold mt-4">Project Goals</h3>
              <ul className="list-disc list-inside">
                {activityData.goals.map((goal, index) => (
                  <li key={index}>{goal}</li>
                ))}
              </ul>

              <h3 className="font-semibold mt-4">Required Skills</h3>
              <div className="flex flex-wrap gap-2">
                {activityData.requiredSkills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 space-y-2">
              <h3 className="font-semibold">Expected Impact</h3>
              <p>{activityData.expectedImpact}</p>

              <h3 className="font-semibold">Past Events</h3>
              <p>{activityData.pastEvents}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold">Venue & Location</h3>
              <p>{activityData.venue.name}</p>
              <p>Landmark: {activityData.venue.landmark}</p>
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center mt-2 rounded-md">
                {activityData.locationMap}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Comments</h3>
              <textarea
                className="w-full border rounded-md p-2 mb-2"
                placeholder="Write a comment..."
              />
              <Button>Post Comment</Button>
              <div className="mt-4 text-sm space-y-2">
                {activityData.comments.map((comment, index) => (
                  <p key={index}>
                    <b>{comment.name}</b> ({comment.timestamp}):{" "}
                    {comment.message}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardContent className="p-4 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Calendar size={16} /> {activityData.date}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock size={16} /> {activityData.time}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={16} /> {activityData.location}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 space-y-2">
              <h3 className="font-semibold">Volunteer Spots</h3>
              <div className="flex items-center justify-between text-sm">
                <span>Available Spots</span>
                <span>
                  {activityData.spots.available}/{activityData.spots.total}
                </span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{
                    width: `${
                      (activityData.spots.available /
                        activityData.spots.total) *
                      100
                    }%`,
                  }}
                />
              </div>
              <Button
                className="w-full mt-2"
                onClick={() => setApplyModalOpen(true)}
              >
                Apply Now
              </Button>
              <ApplyModal
                isOpen={isApplyModalOpen}
                onClose={() => setApplyModalOpen(false)}
                activity={activityData}
              />
              <Button variant="outline" className="w-full">
                Contact NGO
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 space-y-2">
              <h3 className="font-semibold">Rules & Guidelines</h3>
              <ul className="list-disc list-inside text-sm">
                {activityData.guidelines.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ViewActivityDetails;
