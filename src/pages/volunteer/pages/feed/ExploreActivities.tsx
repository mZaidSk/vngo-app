import { useNavigate } from "react-router-dom";
import ActivityFilters from "../component/activity/ActivityFilters";
import { useState } from "react";
import { activityDataArray } from "../component/data/activityData";
import CommentPanel from "../activity/CommentPanel";
import ApplyModal from "../activity/ApplyModal";
import volunteerProfile from "../../setting/data/volunteerData";
import FeedActivityCard from "@/components/common/FeedCard";

export default function ExploreActivitiesPage() {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("All Tags");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [activities, setActivities] = useState(activityDataArray);
  const [selectedActivity, setSelectedActivity] = useState<any | null>(null);
  const [selectedActivityId, setSelectedActivityId] = useState<string | null>(
    null
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCommentPanelOpen, setIsCommentPanelOpen] = useState(false);

  const navigate = useNavigate();

  const filteredActivities = activities.filter((activity) => {
    const matchesSearch = activity.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesTag =
      selectedTag === "All Tags" || activity.tags.includes(selectedTag);
    const matchesStatus =
      selectedStatus === "All" || activity.status === selectedStatus;
    const matchesDate =
      !selectedDate ||
      new Date(activity.date).toDateString() === selectedDate.toDateString();
    return matchesSearch && matchesTag && matchesStatus && matchesDate;
  });

  const handleLike = (id: string) => {
    const updated = activities.map((activity) =>
      activity.id === id ? { ...activity, likes: activity.likes + 1 } : activity
    );
    setActivities(updated);
  };

  const handleShare = (id: string) => {
    // add
  };

  const handleAddComment = (activityId: string) => {
    setSelectedActivityId(activityId);
    setIsCommentPanelOpen(true);
  };

  const handleViewDetails = (id: string) => {
    navigate(`${id}`);
  };

  const openApplyModal = (activity: any) => {
    setSelectedActivity(activity);
    setIsModalOpen(true);
  };
  const handleBookmarkToggle = (id: string) => {
    const index = volunteerProfile.bookmarkedActivities.indexOf(id);
    if (index !== -1) {
      // Remove if already bookmarked
      volunteerProfile.bookmarkedActivities.splice(index, 1);
    } else {
      // Add if not bookmarked
      volunteerProfile.bookmarkedActivities.push(id);
    }

    // Force a re-render by updating a dummy state
    setActivities([...activities]);
  };

  return (
    <div className="bg-white">
      <h1 className="text-xl font-bold px-4 pt-2">Explore Activities</h1>
      <div className="sticky top-15 z-20 bg-[#E6F4EA] w-full ">
        <ActivityFilters
          search={search}
          setSearch={setSearch}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
          resetFilters={() => {
            setSearch("");
            setSelectedStatus("All");
            setSelectedDate(null);
            setSelectedTag("All Tags");
          }}
        />
      </div>
      <div className="p-6 bg-muted min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Activity Cards */}
          <div className="space-y-6 mt-6">
            {filteredActivities.map((activity: any) => (
              <FeedActivityCard
                key={activity.id}
                activity={activity}
                onLike={handleLike}
                onComment={handleAddComment}
                onShare={handleShare}
                onViewDetails={handleViewDetails}
                onApply={openApplyModal}
                onToggleBookmark={handleBookmarkToggle}
                isBookmarked={volunteerProfile.bookmarkedActivities.includes(
                  activity.id
                )}
              />
            ))}
          </div>
        </div>

        {/* Slide-in Comment Panel */}
        {isCommentPanelOpen && selectedActivityId && (
          <CommentPanel
            activityId={selectedActivityId}
            comments={
              activities.find((a) => a.id === selectedActivityId)?.comments ||
              []
            }
            onClose={() => setIsCommentPanelOpen(false)}
          />
        )}

        {/* Apply Modal */}
        {isModalOpen && selectedActivity && (
          <ApplyModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            activity={selectedActivity}
          />
        )}
      </div>
    </div>
  );
}
