"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ApplyFormFields = ({ formData, handleChange }: any) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label>Full Name</Label>
          <Input name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label>Contact Number</Label>
          <Input name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div>
          <Label>Emergency Contact (Optional)</Label>
          <Input
            name="emergencyContact"
            value={formData.emergencyContact}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <Label>Why do you want to participate?</Label>
        <Textarea
          name="motivation"
          value={formData.motivation}
          onChange={handleChange}
          placeholder="Share your motivation..."
        />
      </div>

      <div>
        <Label>Do you have relevant experience?</Label>
        <RadioGroup
          defaultValue={formData.hasExperience}
          onValueChange={(val: any) =>
            handleChange({ target: { name: "hasExperience", value: val } })
          }
          className="flex gap-4 my-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="yes" />
            <Label htmlFor="yes">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="no" />
            <Label htmlFor="no">No</Label>
          </div>
        </RadioGroup>

        {formData.hasExperience === "yes" && (
          <Textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="If yes, please describe..."
          />
        )}
      </div>
    </div>
  );
};

export default ApplyFormFields;
