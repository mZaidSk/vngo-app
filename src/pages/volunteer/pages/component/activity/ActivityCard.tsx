import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CalendarIcon,
  MapPinIcon,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
} from "lucide-react";
import { format } from "date-fns";

interface Activity {
  id: string;
  title: string;
  about: string;
  date: string;
  location: string;
  tags: string[];
  status: string;
  likes: number;
  comments: any[];
}

interface ActivityCardProps {
  activity: Activity;
  onLike: (id: string) => void;
  onComment: (id: string) => void;
  onShare: (id: string) => void;
  onViewDetails: (id: string) => void;
  onApply: (activity: Activity) => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  activity,
  onLike,
  onComment,
  onShare,
  onViewDetails,
  onApply,
  isBookmarked,
  onToggleBookmark,
}) => {
  return (
    <Card className="relative rounded-2xl shadow-lg bg-white transition-transform hover:scale-[1.01] duration-300 p-3">
      <CardContent className="p-4 flex flex-col justify-between h-full space-y-3">
        {/* Status Badge + Bookmark */}
        <div className="absolute top-2 left-2 z-10">
          <Badge
            className={`px-2 py-1 text-xs font-medium rounded-full shadow ${
              activity.status === "Upcoming"
                ? "bg-green-100 text-green-700"
                : activity.status === "Ongoing"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {activity.status}
          </Badge>
        </div>

        <button
          onClick={() => onToggleBookmark(activity.id)}
          className="absolute top-2 right-2 text-gray-400 hover:text-blue-600"
        >
          <Bookmark className={`${isBookmarked ? "text-blue-600" : ""}`} />
        </button>
        <div className="mt-2" />
        {/* Image Placeholder */}

        <div className="rounded-xl bg-gray-200 h-32 w-full flex justify-center items-center text-gray-500 text-sm">
          Project Image
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-semibold">{activity.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {activity.about}
        </p>

        {/* Date & Location */}
        <div className="flex items-center text-sm gap-2 text-gray-600">
          <CalendarIcon className="w-4 h-4" />
          {format(new Date(activity.date), "PPP • p")}
        </div>

        <div className="flex items-center text-sm gap-2 text-gray-600">
          <MapPinIcon className="w-4 h-4" />
          {activity.location}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {activity.tags.map((tag) => (
            <Badge
              key={tag}
              className="bg-blue-100 text-blue-800 text-xs font-medium rounded-full px-2 py-1"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Social Interactions */}
        <div className="flex gap-4 text-sm text-muted-foreground mt-2">
          <button
            onClick={() => onLike(activity.id)}
            className="flex items-center gap-1 hover:text-pink-600"
          >
            <Heart size={16} /> {activity.likes}
          </button>
          <button
            onClick={() => onComment(activity.id)}
            className="flex items-center gap-1 hover:text-indigo-600"
          >
            <MessageCircle size={16} /> {activity.comments.length}
          </button>
          <button
            onClick={() => onShare(activity.id)}
            className="flex items-center gap-1 hover:text-green-600"
          >
            <Share2 size={16} /> Share
          </button>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-2 mt-4">
          {activity.status === "Upcoming" ? (
            <>
              <Button
                className="flex-1 shadow"
                onClick={() => onApply(activity)}
              >
                Apply Now
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => onViewDetails(activity.id)}
              >
                View Details
              </Button>
            </>
          ) : (
            <Button
              variant="outline"
              className="w-full"
              onClick={() => onViewDetails(activity.id)}
            >
              View Details
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
