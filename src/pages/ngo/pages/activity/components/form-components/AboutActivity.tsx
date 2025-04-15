import React from "react";
import { useFormikContext } from "formik";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AboutActivity: React.FC = () => {
    const { values, handleChange } = useFormikContext<any>();

    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold">📖 About The Activity</h2>

            <div className="space-y-2">
                <Label
                    htmlFor="detailedDescription"
                    className="text-base font-medium"
                >
                    Detailed Description
                </Label>
                <Textarea
                    id="detailedDescription"
                    name="detailedDescription"
                    placeholder="Write a detailed description of the activity..."
                    value={values.detailedDescription}
                    onChange={handleChange}
                    rows={6}
                />
            </div>

            <div className="space-y-2">
                <Label
                    htmlFor="goalsHighlights"
                    className="text-base font-medium"
                >
                    Goals / Highlights
                </Label>
                <Input
                    id="goalsHighlights"
                    name="goalsHighlights"
                    placeholder='e.g., "Plant 10,000 trees, Host 5 workshops"'
                    value={values.goalsHighlights}
                    onChange={handleChange}
                />
                <p className="text-sm text-muted-foreground">
                    Use commas to separate multiple goals.
                </p>
            </div>

            <div className="space-y-2">
                <Label htmlFor="pastEvents" className="text-base font-medium">
                    Past Events Summary
                </Label>
                <Textarea
                    id="pastEvents"
                    name="pastEvents"
                    placeholder="Summarize any past similar events or learnings..."
                    value={values.pastEvents}
                    onChange={handleChange}
                    rows={5}
                />
            </div>
        </div>
    );
};

export default AboutActivity;
