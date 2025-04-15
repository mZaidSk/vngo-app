"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { UserIcon } from "lucide-react";
import volunteerProfile from "./data/VolunteerData";
import { Link } from "react-router-dom";

export default function VolunteerProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [newInterest, setNewInterest] = useState(""); // State to handle adding new interests
  const [profileData, setProfileData] = useState({ ...volunteerProfile });
  const [originalData, setOriginalData] = useState({ ...volunteerProfile });

  const handleChange = (field: string, value: string) => {
    setProfileData({ ...profileData, [field]: value });
  };

  const handleEdit = () => {
    setOriginalData({ ...profileData });
    setIsEditing(true);
  };

  const handleSave = () => {
    // Here you can POST/PUT to API if needed
    setIsEditing(false);
  };

  const handleCancel = () => {
    setProfileData({ ...originalData });
    setIsEditing(false);
  };

  const handleAddInterest = () => {
    if (
      newInterest.trim() !== "" &&
      !profileData.interests.includes(newInterest)
    ) {
      setProfileData({
        ...profileData,
        interests: [...profileData.interests, newInterest],
      });
      setNewInterest(""); // Clear the input after adding
    }
  };

  const handleRemoveInterest = (interest: string) => {
    setProfileData({
      ...profileData,
      interests: profileData.interests.filter((item) => item !== interest),
    });
  };
  if (!profileData) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Card className="w-full max-w-md text-center shadow-lg border border-destructive/20">
          <CardContent className="p-8 space-y-5">
            <h2 className="text-2xl font-bold text-destructive">
              Profile Not Found
            </h2>
            <p className="text-sm text-muted-foreground">
              Your volunteer profile is missing. Please create one to get
              started.
            </p>
            <Link to={"/volunteer/profile/create"}>
              <Button size="lg" className="w-full cursor-pointer">
                Create Profile
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }
  return (
    <div className="flex h-screen">
      <div className="flex-1 p-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            {/* Profile Header */}
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
                <UserIcon className="w-10 h-10 text-gray-500" />
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Full Name</label>
                  <Input
                    value={profileData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    readOnly={!isEditing}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Location</label>
                  <Input
                    value={profileData.location}
                    onChange={(e) => handleChange("location", e.target.value)}
                    readOnly={!isEditing}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    value={profileData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    readOnly={!isEditing}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <Input
                    value={profileData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    readOnly={!isEditing}
                  />
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Bio */}
            <div className="mb-4">
              <label className="text-sm font-medium">Bio</label>
              <Textarea
                value={profileData.bio}
                onChange={(e) => handleChange("bio", e.target.value)}
                readOnly={!isEditing}
                className="mt-1"
              />
            </div>

            {/* Interests */}
            <div className="mb-6">
              <label className="text-sm font-medium mb-2 block">
                Skills & Interests
              </label>
              <div className="flex gap-2 flex-wrap">
                {profileData.interests.map((tag, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Badge>{tag}</Badge>
                    {isEditing && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleRemoveInterest(tag)}
                      >
                        Remove
                      </Button>
                    )}
                  </div>
                ))}
              </div>
              {isEditing && (
                <div className="flex items-center gap-2 mt-4">
                  <Input
                    value={newInterest}
                    onChange={(e) => setNewInterest(e.target.value)}
                    placeholder="Add new interest"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleAddInterest}
                  >
                    Add
                  </Button>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            {isEditing ? (
              <div className="flex gap-2">
                <Button onClick={handleSave}>Save</Button>
                <Button variant="secondary" onClick={handleCancel}>
                  Cancel
                </Button>
              </div>
            ) : (
              <Button onClick={handleEdit}>Edit Profile</Button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
