import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Edit } from "lucide-react";

const VolunteerProfile = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <Card>
        <CardContent className="flex items-center space-x-4 p-6">
          <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold">Sarah Wilson</h2>
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="w-4 h-4 mr-1" /> San Francisco, CA | 28 years
              old
            </div>
          </div>
          <Button variant="outline" size="sm">
            <Edit className="w-4 h-4 mr-2" /> Edit Profile
          </Button>
        </CardContent>
      </Card>

      {/* Skills & Interests */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-2">Skills & Interests</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Teaching",
              "Environmental Conservation",
              "Event Planning",
              "First Aid",
              "Social Media",
            ].map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Availability */}
      <Card>
        <CardContent className="p-6 space-y-2">
          <h3 className="text-lg font-medium">Availability</h3>
          <div className="flex justify-between">
            <div>
              <p className="font-medium">Preferred Days</p>
              <p className="text-sm text-gray-500">
                Monday, Wednesday, Saturday
              </p>
            </div>
            <div>
              <p className="font-medium">Time Slots</p>
              <p className="text-sm text-gray-500">Morning, Evening</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Volunteer History */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h3 className="text-lg font-medium">Volunteer History</h3>
          <div className="space-y-2">
            <div>
              <p className="font-semibold">Beach Cleanup Drive</p>
              <p className="text-sm text-gray-500">
                Save Our Shores NGO - March 16, 2025 (4 hours)
              </p>
            </div>
            <div>
              <p className="font-semibold">Food Bank Distribution</p>
              <p className="text-sm text-gray-500">
                Community Food Bank - February 20, 2025 (6 hours)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Impact */}
      <Card>
        <CardContent className="p-6 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold">48</p>
            <p className="text-sm text-gray-500">Hours Volunteered</p>
          </div>
          <div>
            <p className="text-2xl font-bold">12</p>
            <p className="text-sm text-gray-500">Activities Completed</p>
          </div>
          <div>
            <p className="text-2xl font-bold">5</p>
            <p className="text-sm text-gray-500">Causes Supported</p>
          </div>
        </CardContent>
      </Card>

      {/* Privacy Preferences */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h3 className="text-lg font-medium">Privacy Preferences</h3>
          <div className="flex items-center justify-between">
            <span>Profile Visibility</span>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <span>Email Notifications</span>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <span>Data Sharing</span>
            <Switch />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VolunteerProfile;
