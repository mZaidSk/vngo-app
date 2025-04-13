import { useNavigate } from "react-router-dom";
import ActivityCard from "../component/activity/ActivityCard";
import ActivityFilters from "../component/activity/ActivityFilters";
import { useState } from "react";
import { activityDataArray } from "../component/data/activityData";
import CommentPanel from "../activity/CommentPanel";
import ApplyModal from "../activity/ApplyModal";
import volunteerProfile from "../../setting/data/volunteerData";

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
    <div className="p-6 bg-[#E6F4EA] min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Explore Activities</h1>

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
      {/* Activity Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredActivities.map((activity: any) => (
          <ActivityCard
            key={activity.id}
            activity={activity}
            onLike={handleLike} // Define your handleLike function as needed
            onComment={handleAddComment} // Define your handleAddComment function as needed
            onShare={handleShare} // Define your handleShare function as needed
            onViewDetails={handleViewDetails} // Define your handleViewDetails function as needed
            onApply={openApplyModal} // Define your openApplyModal function as needed
            onToggleBookmark={handleBookmarkToggle}
            isBookmarked={volunteerProfile.bookmarkedActivities.includes(
              activity.id
            )}
          />
        ))}
      </div>

      {/* Slide-in Comment Panel */}
      {isCommentPanelOpen && selectedActivityId && (
        <CommentPanel
          activityId={selectedActivityId}
          comments={
            activities.find((a) => a.id === selectedActivityId)?.comments || []
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
  );
}
