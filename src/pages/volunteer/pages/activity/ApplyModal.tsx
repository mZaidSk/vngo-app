"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Info } from "lucide-react";
import ApplyFormFields from "./ApplyFormFields";

const ApplyModal = ({ isOpen, onClose, activity }: any) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    emergencyContact: "",
    motivation: "",
    experience: "",
    hasExperience: "no",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Submitted Application:", formData);
    onClose();
  };
  if (!activity) return null;
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Apply for {activity?.title}</DialogTitle>
          <DialogDescription>
            {activity?.about || "Join us in making an impact!"}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted p-4 rounded-lg text-sm">
          <div className="flex items-center gap-2">
            <Calendar size={16} /> {activity?.date}
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} /> {activity?.location}
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} /> {activity?.time}
          </div>
          <div className="flex items-center gap-2">
            <Info size={16} /> Comfortable working outdoors
          </div>
        </div>

        <ApplyFormFields formData={formData} handleChange={handleChange} />

        <div className="flex justify-end gap-2 pt-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Submit Application</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ApplyModal;
