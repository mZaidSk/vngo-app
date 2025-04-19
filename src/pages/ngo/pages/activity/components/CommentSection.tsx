import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { AppDispatch, RootState } from "@/store/store";
import {
    createComment,
    deleteComment,
    updateComment,
} from "@/store/slice/CommentSlice";
import { getActivityById } from "@/store/slice/ActivitySlice";
import { Pencil, Trash2 } from "lucide-react";

type Comment = {
    id: string;
    content: string;
    createdAt: string;
    user: {
        user_id: string;
        name: string;
        email: string;
    };
};

const CommentSection = ({
    id,
    comments = [],
}: {
    id: any;
    comments: Comment[];
}) => {
    const [comment, setComment] = useState("");
    const [editingCommentId, setEditingCommentId] = useState<string | null>(
        null
    );
    const [editedContent, setEditedContent] = useState("");
    const dispatch = useDispatch<AppDispatch>();
    const authSelector = useSelector((state: RootState) => state.auth.user);

    const getActivity = async () => {
        if (id) {
            await dispatch(getActivityById(id));
        }
    };

    const callCreateComment = async () => {
        if (!comment.trim()) {
            toast.error("Comment cannot be empty");
            return;
        }

        const payload = {
            content: comment,
            activityId: id,
            userId: authSelector?.data?.user_id,
        };

        const data = await dispatch(createComment(payload));

        if (data?.payload?.success) {
            toast.success("Comment Created Successfully");
            setComment("");
            getActivity();
        } else {
            toast.error(
                data?.payload?.error?.message || "Something went wrong"
            );
        }
    };

    const handleDeleteComment = async (commentId: string) => {
        const data = await dispatch(deleteComment(commentId));
        if (data?.payload) {
            toast.success("Comment deleted");
            getActivity();
        } else {
            toast.error("Failed to delete");
        }
    };

    const handleEditComment = async (commentId: string) => {
        if (!editedContent.trim()) {
            toast.error("Edited comment cannot be empty");
            return;
        }

        const data = await dispatch(
            updateComment({
                id: commentId,
                payload: { content: editedContent },
            })
        );
        if (data?.payload?.success) {
            toast.success("Comment updated");
            setEditingCommentId(null);
            setEditedContent("");
            getActivity();
        } else {
            toast.error(data?.payload?.error?.message || "Failed to update");
        }
    };

    return (
        <Card>
            <CardContent className="p-4">
                <h3 className="text-lg font-medium mb-3">Comments</h3>

                <div className="space-y-2 mb-6">
                    <Textarea
                        placeholder="Write a comment..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="min-h-[80px]"
                    />
                    <Button onClick={callCreateComment}>Post Comment</Button>
                </div>

                <div className="space-y-4">
                    {comments.length > 0 ? (
                        comments.map((c) => (
                            <div
                                key={c.id}
                                className="rounded-xl border p-4 bg-gray-50 shadow-sm"
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-medium text-gray-900">
                                            {c.user.name}
                                        </p>
                                        <span className="text-xs text-gray-400">
                                            {new Date(
                                                c.createdAt
                                            ).toLocaleString()}
                                        </span>
                                    </div>
                                    {c.user.user_id ===
                                        authSelector?.data?.user_id && (
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => {
                                                    setEditingCommentId(c.id);
                                                    setEditedContent(c.content);
                                                }}
                                                className="text-gray-500 hover:text-blue-600"
                                                title="Edit"
                                            >
                                                <Pencil size={16} />
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleDeleteComment(c.id)
                                                }
                                                className="text-gray-500 hover:text-red-600"
                                                title="Delete"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {editingCommentId === c.id ? (
                                    <div className="mt-2 space-y-2">
                                        <Textarea
                                            value={editedContent}
                                            onChange={(e) =>
                                                setEditedContent(e.target.value)
                                            }
                                            className="min-h-[60px]"
                                        />
                                        <div className="flex gap-2">
                                            <Button
                                                size="sm"
                                                onClick={() =>
                                                    handleEditComment(c.id)
                                                }
                                            >
                                                Save
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => {
                                                    setEditingCommentId(null);
                                                    setEditedContent("");
                                                }}
                                            >
                                                Cancel
                                            </Button>
                                        </div>
                                    </div>
                                ) : (
                                    <p className="text-sm text-gray-700 mt-2 whitespace-pre-line">
                                        {c.content}
                                    </p>
                                )}
                            </div>
                        ))
                    ) : (
                        <p className="text-sm text-muted-foreground">
                            No comments yet.
                        </p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default CommentSection;
