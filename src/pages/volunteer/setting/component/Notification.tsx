import { useState } from "react";
import { Card, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Mail, Smartphone } from "lucide-react";

const NotificationPreferences = () => {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [smsReminders, setSmsReminders] = useState(false);
  const [saving, setSaving] = useState(false);

  const preferences = [
    {
      id: "email",
      label: "Email Alerts",
      icon: <Mail className="w-5 h-5 text-blue-500" />,
      description:
        "Get updates about new volunteer opportunities, application status, and upcoming events.",
      value: emailAlerts,
      onChange: setEmailAlerts,
    },
    {
      id: "sms",
      label: "SMS Reminders",
      icon: <Smartphone className="w-5 h-5 text-green-500" />,
      description:
        "Receive timely SMS reminders for activities you’ve joined or upcoming deadlines.",
      value: smsReminders,
      onChange: setSmsReminders,
    },
  ];

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      alert("Notification preferences saved!");
    }, 1000);
  };

  return (
    <Card className="max-w-3xl mx-auto p-6 bg-[#fefeff] rounded-xl shadow-lg space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">
        Notification Preferences
      </h2>

      <div className="space-y-4">
        {preferences.map((pref) => (
          <Card
            key={pref.id}
            className="bg-white border border-gray-200 rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="mt-1">{pref.icon}</div>
                <div>
                  <CardTitle className="text-base font-semibold text-gray-900 mb-1">
                    {pref.label}
                  </CardTitle>
                  <p className="text-sm text-gray-500">{pref.description}</p>
                </div>
              </div>
              <Switch
                checked={pref.value}
                onCheckedChange={pref.onChange}
                className="mt-1 data-[state=checked]:bg-emerald-500"
              />
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-end">
        <Button
          onClick={handleSave}
          disabled={saving}
          className="bg-black hover:bg-emerald-700 text-white px-5"
        >
          {saving ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </Card>
  );
};

export default NotificationPreferences;
