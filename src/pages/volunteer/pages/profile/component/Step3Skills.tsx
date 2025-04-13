import React, { useState } from "react";
import { Field, FormikProps } from "formik";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Command, CommandItem } from "@/components/ui/command";
import { Checkbox } from "@/components/ui/checkbox";

interface Step3Props {
  formik: FormikProps<any>;
  onNext: () => void;
  onBack: () => void;
}

const interestOptions = [
  "Environment",
  "Education",
  "Health",
  "Animal Welfare",
  "Disability Support",
  "Senior Support",
];

const Step3: React.FC<Step3Props> = ({ formik, onNext, onBack }) => {
  const [customSkill, setCustomSkill] = useState("");
  const [open, setOpen] = useState(false);

  const selectedInterests = formik.values.interests || [];

  const addCustomSkill = () => {
    if (customSkill.trim() && !formik.values.skills.includes(customSkill)) {
      formik.setFieldValue("skills", [...formik.values.skills, customSkill]);
      setCustomSkill("");
    }
  };

  const toggleInterest = (interest: string) => {
    const updated = selectedInterests.includes(interest)
      ? selectedInterests.filter((item: string) => item !== interest)
      : [...selectedInterests, interest];

    formik.setFieldValue("interests", updated);
  };
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-black">Skills</h2>

      {/* Technical Skills */}
      <div className="mb-6">
        <label className="block text-lg font-semibold text-black mb-2">
          Technical Skills
        </label>
        <div className="flex flex-wrap gap-4">
          {["JavaScript", "Python", "React", "Node.js", "SQL"].map((skill) => (
            <label key={skill} className="flex items-center space-x-2">
              <Field type="checkbox" name="skills" value={skill} />
              <span className="text-sm text-black">{skill}</span>
            </label>
          ))}

          {/* Custom Skills */}
          {formik.values.skills
            ?.filter(
              (s: string) =>
                !["JavaScript", "Python", "React", "Node.js", "SQL"].includes(s)
            )
            .map((custom: string) => (
              <span
                key={custom}
                className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
              >
                {custom}
              </span>
            ))}
        </div>

        {/* Add custom skill input */}
        <div className="mt-4 flex gap-2">
          <input
            type="text"
            value={customSkill}
            onChange={(e) => setCustomSkill(e.target.value)}
            placeholder="Add custom skill"
            className="input flex-1 border text-black rounded-md px-3 py-2 text-sm"
          />
          <button
            type="button"
            onClick={addCustomSkill}
            className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-black text-sm"
          >
            Add
          </button>
        </div>
      </div>

      {/* Area of Interest - Multi-select using shadcn */}
      <div className="grid gap-4">
        <div>
          <label className="block font-medium text-black mb-1">
            Area of Interest
          </label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                className={cn(
                  "w-full justify-between",
                  !selectedInterests.length && "text-muted-foreground"
                )}
              >
                {selectedInterests.length > 0
                  ? selectedInterests.join(", ")
                  : "Select interests"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                {interestOptions.map((option) => (
                  <CommandItem
                    key={option}
                    onSelect={() => toggleInterest(option)}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <Checkbox
                      checked={selectedInterests.includes(option)}
                      onCheckedChange={() => toggleInterest(option)}
                    />
                    <span>{option}</span>
                  </CommandItem>
                ))}
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Navigation Buttons */}
      {/* <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={onBack}
          className="px-5 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="px-6 py-2 rounded bg-black text-white hover:bg-gray-900"
        >
          Next Step
        </button>
      </div> */}
    </div>
  );
};

export default Step3;
