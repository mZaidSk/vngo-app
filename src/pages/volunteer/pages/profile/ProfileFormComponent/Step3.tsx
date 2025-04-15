import React, { useState } from "react";
import { Field, useFormikContext } from "formik";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import { Checkbox } from "@/components/ui/checkbox";
import { FormValues } from "../data/FormValues"; // import your types

const interestOptions = [
  "Environment",
  "Education",
  "Health",
  "Animal Welfare",
  "Disability Support",
  "Senior Support",
];

const Step3: React.FC = () => {
  const [customSkill, setCustomSkill] = useState("");
  const [open, setOpen] = useState(false);

  const { values, errors, touched, setFieldValue } =
    useFormikContext<FormValues>();
  const selectedInterests = values.interests || [];

  const addCustomSkill = () => {
    if (customSkill.trim() && !values.skills.includes(customSkill)) {
      setFieldValue("skills", [...values.skills, customSkill]);
      setCustomSkill("");
    }
  };

  const toggleInterest = (interest: string) => {
    const updated = selectedInterests.includes(interest)
      ? selectedInterests.filter((item) => item !== interest)
      : [...selectedInterests, interest];

    setFieldValue("interests", updated);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-black">Skills</h2>

      {/* Technical Skills */}
      <div>
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

          {/* Custom Skill Tags */}
          {values.skills
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

        {/* Add Custom Skill */}
        <div className="mt-4 flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={customSkill}
            onChange={(e) => setCustomSkill(e.target.value)}
            placeholder="Add custom skill"
            className="border text-black rounded-md px-3 py-2 text-sm w-full sm:w-auto flex-1"
          />
          <button
            type="button"
            onClick={addCustomSkill}
            className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-black text-sm"
          >
            Add
          </button>
        </div>

        {/* Skills Error */}
        {touched.skills && errors.skills && (
          <div className="text-red-500 text-sm mt-1">
            {errors.skills as string}
          </div>
        )}
      </div>

      {/* Area of Interest */}
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
              <CommandGroup>
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
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>

        {/* Interests Error */}
        {touched.interests && errors.interests && (
          <div className="text-red-500 text-sm mt-1">
            {errors.interests as string}
          </div>
        )}
      </div>
    </div>
  );
};

export default Step3;
