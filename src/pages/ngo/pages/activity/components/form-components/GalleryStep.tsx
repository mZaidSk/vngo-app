import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface GalleryStepProps {
    values: any;
    setFieldValue: (field: string, value: any) => void;
}

export const GalleryStep: React.FC<GalleryStepProps> = ({
    values,
    setFieldValue,
}) => {
    const [previews, setPreviews] = useState<{
        image1?: string;
        image2?: string;
        image3?: string;
    }>({});

    const handleImageChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        key: "image1" | "image2" | "image3"
    ) => {
        const file = e.target.files?.[0];
        if (file) {
            setFieldValue(key, file);
            const reader = new FileReader();
            reader.onloadend = () =>
                setPreviews((prev) => ({
                    ...prev,
                    [key]: reader.result as string,
                }));
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold">📸 Gallery</h2>

            <div>
                <Label htmlFor="image1" className="mb-2 block">
                    Image 1
                </Label>
                <Input
                    id="image1"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, "image1")}
                />
                {previews.image1 && (
                    <img
                        src={previews.image1}
                        alt="Image 1 Preview"
                        className="mt-2 rounded-md max-h-60 object-contain border"
                    />
                )}
            </div>

            <div>
                <Label htmlFor="image2" className="mb-2 block">
                    Image 2
                </Label>
                <Input
                    id="image2"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, "image2")}
                />
                {previews.image2 && (
                    <img
                        src={previews.image2}
                        alt="Image 2 Preview"
                        className="mt-2 rounded-md max-h-60 object-contain border"
                    />
                )}
            </div>

            <div>
                <Label htmlFor="image3" className="mb-2 block">
                    Image 3
                </Label>
                <Input
                    id="image3"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, "image3")}
                />
                {previews.image3 && (
                    <img
                        src={previews.image3}
                        alt="Image 3 Preview"
                        className="mt-2 rounded-md max-h-60 object-contain border"
                    />
                )}
            </div>
        </div>
    );
};
