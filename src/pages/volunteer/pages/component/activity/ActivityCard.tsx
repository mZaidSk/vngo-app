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
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

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
  ngoName: string;
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
      <CardContent className="p-4 flex flex-col justify-between h-full space-y-4">
        {/* Header: NGO Info + Status + Bookmark */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>{activity.ngoName[0]}</AvatarFallback>
            </Avatar>
            <div>
              <Link to="/ngo/profile/:id">
                <p className="font-semibold hover:underline">
                  {activity.ngoName}
                </p>
              </Link>
              <p className="text-sm text-muted-foreground">
                {activity.location}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
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
            <button
              onClick={() => onToggleBookmark(activity.id)}
              className="text-gray-400 hover:text-blue-600"
            >
              <Bookmark className={`${isBookmarked ? "text-blue-600" : ""}`} />
            </button>
          </div>
        </div>

        {/* Image Placeholder */}
        {/* <div className="bg-muted h-32 mt-4 rounded-lg flex items-center justify-center text-muted-foreground"> */}
        <div className="rounded-xl bg-gray-200 h-44 w-full flex justify-center items-center text-gray-500 text-sm">
          Project Image
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="text-xl font-semibold">{activity.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-3 mt-1">
            {activity.about}
          </p>
        </div>

        {/* Date & Location */}
        <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <CalendarIcon className="w-4 h-4" />
            {format(new Date(activity.date), "PPP • p")}
          </div>
          <div className="flex items-center gap-1">
            <MapPinIcon className="w-4 h-4" />
            {activity.location}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-1">
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
        <div className="mt-4">
          {activity.status === "Upcoming" ? (
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                className="sm:flex-1 shadow-md rounded-xl hover:brightness-105 transition-all"
                onClick={() => onApply(activity)}
              >
                Apply Now
              </Button>
              <Button
                variant="outline"
                className="sm:flex-1 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all"
                onClick={() => onViewDetails(activity.id)}
              >
                View Details
              </Button>
            </div>
          ) : (
            <Button
              variant="outline"
              className="w-full rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all"
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
