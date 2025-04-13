import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface BasicActivityInfoProps {
    values: any;
    handleChange: (e: React.ChangeEvent<any>) => void;
    setFieldValue: (field: string, value: any) => void;
}

const statusOptions = ["Upcoming", "Ongoing", "Completed"];

export const BasicActivityInfo: React.FC<BasicActivityInfoProps> = ({
    values,
    handleChange,
    setFieldValue,
}) => {
    const [preview, setPreview] = useState<string | null>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFieldValue("bannerImage", file);
            const reader = new FileReader();
            reader.onloadend = () => setPreview(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

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
                <Label htmlFor="shortDescription" className="mb-2 block">
                    Short Description
                </Label>
                <Input
                    id="shortDescription"
                    name="shortDescription"
                    placeholder="Tagline or mission statement"
                    value={values.shortDescription}
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
                    Activity Banner Image
                </Label>
                <Input
                    id="bannerImage"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                />
                {preview && (
                    <img
                        src={preview}
                        alt="Preview"
                        className="mt-2 rounded-md max-h-60 object-contain border"
                    />
                )}
            </div>
        </div>
    );
};
