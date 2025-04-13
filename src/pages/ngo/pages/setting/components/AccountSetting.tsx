import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function AccountSetting() {
    return (
        <div className="p-6 max-w-4xl mx-auto space-y-8">
            <Card>
                <CardContent className="p-6 space-y-4">
                    <h2 className="text-xl font-semibold">Change Password</h2>
                    <div className="space-y-2">
                        <Label htmlFor="current-password">
                            Current Password
                        </Label>
                        <Input
                            id="current-password"
                            type="password"
                            placeholder="Enter current password"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input
                            id="new-password"
                            type="password"
                            placeholder="Enter new password"
                        />
                        <p className="text-sm text-muted-foreground">
                            Password must be at least 8 characters long with
                            numbers and special characters
                        </p>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="confirm-password">
                            Confirm New Password
                        </Label>
                        <Input
                            id="confirm-password"
                            type="password"
                            placeholder="Confirm new password"
                        />
                    </div>
                    <Button className="mt-4">Update Password</Button>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 space-y-6">
                    <h2 className="text-xl font-semibold">Account Security</h2>

                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="font-medium">Disable Account</h3>
                            <p className="text-sm text-muted-foreground">
                                Temporarily disable your account. You can
                                reactivate it anytime.
                            </p>
                        </div>
                        <Button variant="outline">Disable Account</Button>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="font-medium">Delete Account</h3>
                            <p className="text-sm text-muted-foreground">
                                Permanently delete your account and all
                                associated data. This action cannot be undone.
                            </p>
                        </div>
                        <Button variant="destructive">Delete Account</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
