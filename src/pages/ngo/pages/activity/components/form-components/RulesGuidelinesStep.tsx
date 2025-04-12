import React from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

interface RulesGuidelinesStepProps {
    values: any;
    handleChange: (e: React.ChangeEvent<any>) => void;
}

export const RulesGuidelinesStep: React.FC<RulesGuidelinesStepProps> = ({
    values,
    handleChange,
}) => {
    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold">📜 Rules & Guidelines</h2>

            <div>
                <Label htmlFor="whatToBring" className="mb-2 block">
                    What to Bring
                </Label>
                <Textarea
                    id="whatToBring"
                    name="whatToBring"
                    placeholder={`E.g.\n- Water bottle\n- Hat or cap\n- Sunscreen`}
                    value={values.whatToBring}
                    onChange={handleChange}
                    rows={4}
                />
            </div>

            <div>
                <Label htmlFor="safetyMeasures" className="mb-2 block">
                    Safety Measures
                </Label>
                <Textarea
                    id="safetyMeasures"
                    name="safetyMeasures"
                    placeholder={`E.g.\n- First-aid kit available\n- Emergency contacts on-site\n- Hydration stations`}
                    value={values.safetyMeasures}
                    onChange={handleChange}
                    rows={4}
                />
            </div>

            <div>
                <Label htmlFor="weatherAdvisory" className="mb-2 block">
                    Weather Advisory
                </Label>
                <Input
                    id="weatherAdvisory"
                    name="weatherAdvisory"
                    placeholder="E.g. Event may be rescheduled in case of heavy rain."
                    value={values.weatherAdvisory}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};
