import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

// Simulated imported user data (replace later with backend data)
import volunteerProfile from "./data/volunteerData";

type FieldKey = "current" | "newPassword" | "confirm";

const SecurityPage = () => {
  const [form, setForm] = useState<Record<FieldKey, string>>({
    current: "",
    newPassword: "",
    confirm: "",
  });

  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [show, setShow] = useState<Record<FieldKey, boolean>>({
    current: false,
    newPassword: false,
    confirm: false,
  });
  const [saving, setSaving] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const getPasswordStrength = (password: string) => {
    if (
      password.length > 10 &&
      /[A-Z]/.test(password) &&
      /\d/.test(password) &&
      /[^a-zA-Z0-9]/.test(password)
    ) {
      return 100;
    } else if (password.length >= 6) {
      return 60;
    }
    return 30;
  };

  const handleChange =
    (field: FieldKey) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: "" })); // Clear error on change
    };

  const toggleVisibility = (field: FieldKey) => () => {
    setShow((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const resetForm = () => {
    setForm({ current: "", newPassword: "", confirm: "" });
    setErrors({});
  };

  const validateForm = () => {
    const { current, newPassword, confirm } = form;
    const newErrors: Partial<Record<FieldKey, string>> = {};

    if (!current) newErrors.current = "Current password is required";
    if (!newPassword) newErrors.newPassword = "New password is required";
    if (!confirm) newErrors.confirm = "Please confirm the new password";

    if (current && current !== volunteerProfile.password) {
      newErrors.current = "Current password is incorrect";
    }

    if (newPassword && confirm && newPassword !== confirm) {
      newErrors.confirm = "Passwords do not match";
    }

    if (newPassword && newPassword === current) {
      newErrors.newPassword = "New password must be different";
    }

    const strength = getPasswordStrength(newPassword);
    if (newPassword && strength < 60) {
      newErrors.newPassword =
        "Password too weak. Use uppercase, numbers, and symbols.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validateForm()) return;

    setSaving(true);

    try {
      const payload = {
        oldPassword: form.current,
        newPassword: form.newPassword,
      };

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Update local data (mock)
      volunteerProfile.password = payload.newPassword;

      setSuccessOpen(true);
      resetForm();
    } catch (error) {
      setErrors({ confirm: "Something went wrong while updating password" });
    } finally {
      setSaving(false);
    }
  };

  const fields: FieldKey[] = ["current", "newPassword", "confirm"];

  return (
    <>
      <Card className="max-w-xl mx-auto p-6 space-y-6 rounded-2xl">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <Lock className="w-5 h-5 text-muted-foreground" />
          <span>Change Password</span>
        </div>

        {fields.map((field) => (
          <div key={field} className="space-y-1">
            <Label>
              {field === "current"
                ? "Current Password"
                : field === "newPassword"
                ? "New Password"
                : "Confirm Password"}
            </Label>
            <div className="relative">
              <Input
                type={show[field] ? "text" : "password"}
                value={form[field]}
                onChange={handleChange(field)}
                placeholder={`Enter ${field.replace(/([A-Z])/g, " $1")}`}
                className="pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-2.5 text-muted-foreground"
                onClick={toggleVisibility(field)}
              >
                {show[field] ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {field === "newPassword" && form.newPassword && (
              <Progress
                value={getPasswordStrength(form.newPassword)}
                className="h-2 mt-1"
              />
            )}

            {errors[field] && (
              <p className="text-sm text-red-500 mt-1">{errors[field]}</p>
            )}
          </div>
        ))}

        <div className="flex justify-end gap-3 pt-4">
          <Button variant="outline" onClick={resetForm}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={saving}>
            {saving ? "Saving..." : "Save"}
          </Button>
        </div>
      </Card>

      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Password Updated</DialogTitle>
            <DialogDescription>
              Your password has been updated successfully.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setSuccessOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SecurityPage;
