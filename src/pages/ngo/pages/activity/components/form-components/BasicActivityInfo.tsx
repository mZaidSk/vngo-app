import React from "react";
import { useFormikContext } from "formik";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const statusOptions = ["Upcoming", "Ongoing", "Completed"];

export const BasicActivityInfo: React.FC = () => {
    const { values, handleChange, setFieldValue } = useFormikContext<any>();

    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold">📝 Basic Info</h2>

            <div>
                <Label htmlFor="title" className="mb-2 block">
                    Activity Title
                </Label>
                <Input
                    id="title"
                    name="title"
                    placeholder="Tree Plantation Drive 2025"
                    value={values.title}
                    onChange={handleChange}
                />
            </div>

            <div>
                <Label htmlFor="description" className="mb-2 block">
                    Short Description
                </Label>
                <Input
                    id="description"
                    name="description"
                    placeholder="Tagline or mission statement"
                    value={values.description}
                    onChange={handleChange}
                />
            </div>

            <div>
                <Label className="mb-2 block">Activity Status</Label>
                <div className="flex gap-2 mt-2">
                    {statusOptions.map((status) => (
                        <Badge
                            key={status}
                            variant={
                                values.status === status ? "default" : "outline"
                            }
                            onClick={() => setFieldValue("status", status)}
                            className={cn("cursor-pointer")}
                        >
                            {status}
                        </Badge>
                    ))}
                </div>
            </div>

            <div>
                <Label htmlFor="bannerImage" className="mb-2 block">
                    Banner Image URL
                </Label>
                <Input
                    id="bannerImage"
                    name="bannerImage"
                    placeholder="https://example.com/image.jpg"
                    value={values.bannerImage}
                    onChange={handleChange}
                />
                {values.bannerImage && (
                    <img
                        src={values.bannerImage}
                        alt="Banner Preview"
                        className="mt-2 rounded-md max-h-60 object-contain border"
                    />
                )}
            </div>
        </div>
    );
};
