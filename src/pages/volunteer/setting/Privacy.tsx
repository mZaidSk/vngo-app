import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const VolunteerPrivacySettings = () => {
  const [allowContact, setAllowContact] = useState(false);
  const [showAvailability, setShowAvailability] = useState(false);
  const [participationVisibility, setParticipationVisibility] = useState(false);
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [smsUpdates, setSmsUpdates] = useState(false);
  const [appMessages, setAppMessages] = useState(true);
  const [dataConsent, setDataConsent] = useState(false);

  const handleSave = () => {
    alert("Privacy settings saved!");
  };

  return (
    <Card className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-md">
      <CardHeader>
        <h2 className="text-2xl font-bold text-gray-800">Privacy Settings</h2>
        <p className="text-sm text-gray-500">
          Control your volunteer privacy preferences.
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Section 1 */}
        <div className="py-6 border-b">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[18px] font-semibold text-gray-800">
                Allow NGOs to Contact Me
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Allow registered NGOs to contact me about relevant volunteering
                opportunities.
              </p>
            </div>
            <Switch
              checked={allowContact}
              onCheckedChange={(checked) => setAllowContact(!!checked)}
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="py-6 border-b">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[18px] font-semibold text-gray-800">
                Show Availability to NGOs
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Display my availability to NGOs during opportunity matching.
              </p>
            </div>
            <Switch
              checked={showAvailability}
              onCheckedChange={(checked) => setShowAvailability(!!checked)}
            />
          </div>
        </div>

        {/* Section 3 */}
        <div className="py-6 border-b">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[18px] font-semibold text-gray-800">
                Participation Visibility (Activity Log)
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Allow NGOs to see my previous volunteering activity.
              </p>
            </div>
            <Switch
              checked={participationVisibility}
              onCheckedChange={(checked) =>
                setParticipationVisibility(!!checked)
              }
            />
          </div>
        </div>

        {/* Section 4: Communication Preferences */}
        <div className="py-6 border-b">
          <h3 className="text-[18px] font-semibold text-gray-800 mb-4">
            Communication Preferences
          </h3>
          <div className="space-y-3 pl-1">
            <div className="flex items-center space-x-2">
              <Checkbox
                checked={emailUpdates}
                onCheckedChange={(checked) => setEmailUpdates(!!checked)}
              />
              <Label className="text-sm text-gray-700">Email Updates</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                checked={smsUpdates}
                onCheckedChange={(checked) => setSmsUpdates(!!checked)}
              />
              <Label className="text-sm text-gray-700">SMS Updates</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                checked={appMessages}
                onCheckedChange={(checked) => setAppMessages(!!checked)}
              />
              <Label className="text-sm text-gray-700">In-app Messages</Label>
            </div>
          </div>
        </div>

        {/* Section 5: Consent */}
        <div className="py-6">
          <div className="flex items-start space-x-2">
            <Checkbox
              checked={dataConsent}
              onCheckedChange={(checked) => setDataConsent(!!checked)}
            />
            <Label className="text-sm text-gray-700 max-w-md">
              I agree to share my volunteering data (hours, skills) with NGOs I
              join.
            </Label>
          </div>
        </div>
      </CardContent>

      <div className="flex justify-end px-8 pb-6">
        <Button
          onClick={handleSave}
          className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow transition-all duration-200"
        >
          Save Changes
        </Button>
      </div>
    </Card>
  );
};

export default VolunteerPrivacySettings;
