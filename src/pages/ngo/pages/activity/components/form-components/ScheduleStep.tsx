import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";

interface ScheduleStepProps {
    values: any;
    handleChange: (e: React.ChangeEvent<any>) => void;
    setFieldValue: (field: string, value: any) => void;
}

const timezones = ["UTC", "GMT", "IST", "EST", "PST", "CST", "MST"];

export const ScheduleStep: React.FC<ScheduleStepProps> = ({
    values,
    handleChange,
    setFieldValue,
}) => {
    // Auto-calculate duration
    useEffect(() => {
        const { startDate, endDate, startTime, endTime } = values;
        if (startDate && endDate && startTime && endTime) {
            const start = new Date(`${startDate}T${startTime}`);
            const end = new Date(`${endDate}T${endTime}`);
            const diffMs = end.getTime() - start.getTime();
            const hours = Math.floor(diffMs / (1000 * 60 * 60));
            const minutes = Math.floor(
                (diffMs % (1000 * 60 * 60)) / (1000 * 60)
            );
            const duration = `${hours}h ${minutes}m`;
            if (diffMs >= 0) {
                setFieldValue("duration", duration);
            }
        }
    }, [
        values.startDate,
        values.endDate,
        values.startTime,
        values.endTime,
        setFieldValue,
    ]);

    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold">🕒 Schedule</h2>

            <div>
                <Label htmlFor="startDate" className="mb-2 block">
                    Start Date
                </Label>
                <Input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={values.startDate}
                    onChange={handleChange}
                />
            </div>

            <div>
                <Label htmlFor="endDate" className="mb-2 block">
                    End Date
                </Label>
                <Input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={values.endDate}
                    onChange={handleChange}
                />
            </div>

            <div>
                <Label htmlFor="startTime" className="mb-2 block">
                    Start Time
                </Label>
                <Input
                    type="time"
                    id="startTime"
                    name="startTime"
                    value={values.startTime}
                    onChange={handleChange}
                />
            </div>

            <div>
                <Label htmlFor="endTime" className="mb-2 block">
                    End Time
                </Label>
                <Input
                    type="time"
                    id="endTime"
                    name="endTime"
                    value={values.endTime}
                    onChange={handleChange}
                />
            </div>

            <div>
                <Label htmlFor="timezone" className="mb-2 block">
                    Timezone
                </Label>
                <Select
                    value={values.timezone}
                    onValueChange={(val) => setFieldValue("timezone", val)}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Timezone" />
                    </SelectTrigger>
                    <SelectContent>
                        {timezones.map((zone) => (
                            <SelectItem key={zone} value={zone}>
                                {zone}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div>
                <Label htmlFor="duration" className="mb-2 block">
                    Duration (auto-calculated)
                </Label>
                <Input
                    id="duration"
                    name="duration"
                    value={values.duration}
                    onChange={handleChange}
                    placeholder="Auto-calculated"
                    disabled
                />
            </div>
        </div>
    );
};
