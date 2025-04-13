import React, { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Comment {
  name: string;
  timestamp: string;
  message: string;
}

interface CommentPanelProps {
  activityId: string;
  comments: Comment[];
  onClose: () => void;
}

const CommentPanel: React.FC<CommentPanelProps> = ({
  activityId,
  comments: initialComments,
  onClose,
}) => {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState<Comment[]>(initialComments);

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const newEntry: Comment = {
      name: "You", // Replace with actual logged-in user if available
      timestamp: new Date().toLocaleString(),
      message: newComment.trim(),
    };

    setComments((prev) => [...prev, newEntry]);
    setNewComment("");
  };

  return (
    <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 p-5 border-l flex flex-col animate-slide-in">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800">Comments</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
          <X size={20} />
        </button>
      </div>

      {/* Comments List */}
      <div className="flex-1 overflow-y-auto space-y-3 text-sm text-gray-700 pr-1">
        {comments.length > 0 ? (
          comments.map((c, i) => (
            <div key={i} className="border border-gray-200 p-3 rounded-lg">
              <div className="font-semibold">{c.name}</div>
              <div className="text-gray-500 text-xs">{c.timestamp}</div>
              <div className="text-gray-700 mt-1">{c.message}</div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">No comments yet.</p>
        )}
      </div>

      {/* New Comment Input */}
      <div className="mt-4 flex items-center gap-2">
        <input
          type="text"
          placeholder="Write a comment..."
          className="flex-1 border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddComment()}
        />
        <Button
          className="py-2 px-4 text-sm whitespace-nowrap"
          onClick={handleAddComment}
          disabled={!newComment.trim()}
        >
          Post
        </Button>
      </div>
    </div>
  );
};

export default CommentPanel;
