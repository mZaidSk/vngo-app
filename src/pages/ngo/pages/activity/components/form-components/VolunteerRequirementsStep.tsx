import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface VolunteerRequirementsStepProps {
    values: any;
    handleChange: (e: React.ChangeEvent<any>) => void;
    setFieldValue: (field: string, value: any) => void;
}

export const VolunteerRequirementsStep: React.FC<
    VolunteerRequirementsStepProps
> = ({ values, handleChange, setFieldValue }) => {
    const [skillInput, setSkillInput] = React.useState("");

    const addSkill = () => {
        if (skillInput.trim()) {
            setFieldValue("requiredSkills", [
                ...(values.requiredSkills || []),
                skillInput.trim(),
            ]);
            setSkillInput("");
        }
    };

    const removeSkill = (skillToRemove: string) => {
        setFieldValue(
            "requiredSkills",
            values.requiredSkills.filter(
                (skill: string) => skill !== skillToRemove
            )
        );
    };

    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold">🙋‍♂️ Volunteer Requirements</h2>

            <div>
                <Label htmlFor="totalSpots" className="mb-2 block">
                    Total Volunteer Spots
                </Label>
                <Input
                    type="number"
                    id="totalSpots"
                    name="totalSpots"
                    value={values.totalSpots}
                    onChange={handleChange}
                />
            </div>

            <div>
                <Label htmlFor="spotsLeft" className="mb-2 block">
                    Spots Left
                </Label>
                <Input
                    type="number"
                    id="spotsLeft"
                    name="spotsLeft"
                    value={values.spotsLeft}
                    onChange={handleChange}
                />
            </div>

            <div>
                <Label htmlFor="minAge" className="mb-2 block">
                    Minimum Age Requirement
                </Label>
                <Input
                    type="number"
                    id="minAge"
                    name="minAge"
                    value={values.minAge}
                    onChange={handleChange}
                />
            </div>

            <div>
                <Label className="mb-2 block">Required Skills</Label>
                <div className="flex gap-2 mb-2">
                    <Input
                        type="text"
                        placeholder="e.g. First Aid, Event Management"
                        value={skillInput}
                        onChange={(e) => setSkillInput(e.target.value)}
                        onKeyDown={(e) =>
                            e.key === "Enter" &&
                            (e.preventDefault(), addSkill())
                        }
                    />
                    <Button type="button" onClick={addSkill}>
                        Add
                    </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                    {(values.requiredSkills || []).map(
                        (skill: string, idx: number) => (
                            <Badge
                                key={idx}
                                className="cursor-pointer"
                                onClick={() => removeSkill(skill)}
                            >
                                {skill} ✕
                            </Badge>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};
