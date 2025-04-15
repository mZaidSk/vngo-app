import { useState } from "react";
import { IconLogout, IconTrash } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const AccountSettings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmationText, setConfirmationText] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleLogout = () => {
    console.log("User logged out");
  };

  const handleDeleteAccount = () => {
    console.log("Account deleted");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setConfirmationText(value);
    setIsButtonDisabled(value !== "DELETE");
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md space-y-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold">Account Actions</h2>

      <TooltipProvider>
        <div className="flex flex-col gap-4">
          {/* Logout Button */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="secondary"
                className="flex items-center gap-2 w-fit"
                onClick={handleLogout}
              >
                <IconLogout className="w-5 h-5" />
                Logout
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Log out of your current session.</p>
            </TooltipContent>
          </Tooltip>

          {/* Delete Button with Confirmation */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="destructive"
                className="flex items-center gap-2 w-fit"
                onClick={() => setIsModalOpen(true)}
              >
                <IconTrash className="w-5 h-5" />
                Delete My Account
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Deleting your account is permanent and cannot be undone.</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger asChild>
          <div />
        </DialogTrigger>
        <DialogContent className="sm:max-w-md rounded-2xl">
          <DialogHeader>
            <DialogTitle>Confirm Account Deletion</DialogTitle>
            <DialogDescription>
              This will permanently delete your account and data. Type{" "}
              <strong>DELETE</strong> to confirm.
            </DialogDescription>
          </DialogHeader>

          <Input
            type="text"
            placeholder="Type DELETE to confirm"
            value={confirmationText}
            onChange={handleInputChange}
            className="mt-4"
          />

          <DialogFooter className="mt-4">
            <Button
              variant="destructive"
              onClick={handleDeleteAccount}
              disabled={isButtonDisabled}
            >
              Confirm Delete
            </Button>
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AccountSettings;
