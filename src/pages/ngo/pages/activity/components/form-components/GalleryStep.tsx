import React from "react";
import { useFormikContext } from "formik";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const GalleryStep: React.FC = () => {
    const { values, setFieldValue } = useFormikContext<any>();

    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold">📸 Gallery</h2>

            <div>
                <Label htmlFor="image1" className="mb-2 block">
                    Image 1 URL
                </Label>
                <Input
                    id="image1"
                    name="image1"
                    placeholder="https://example.com/image1.jpg"
                    value={values.image1}
                    onChange={(e) => setFieldValue("image1", e.target.value)}
                />
                {values.image1 && (
                    <img
                        src={values.image1}
                        alt="Image 1 Preview"
                        className="mt-2 rounded-md max-h-60 object-contain border"
                    />
                )}
            </div>

            <div>
                <Label htmlFor="image2" className="mb-2 block">
                    Image 2 URL
                </Label>
                <Input
                    id="image2"
                    name="image2"
                    placeholder="https://example.com/image2.jpg"
                    value={values.image2}
                    onChange={(e) => setFieldValue("image2", e.target.value)}
                />
                {values.image2 && (
                    <img
                        src={values.image2}
                        alt="Image 2 Preview"
                        className="mt-2 rounded-md max-h-60 object-contain border"
                    />
                )}
            </div>

            <div>
                <Label htmlFor="image3" className="mb-2 block">
                    Image 3 URL
                </Label>
                <Input
                    id="image3"
                    name="image3"
                    placeholder="https://example.com/image3.jpg"
                    value={values.image3}
                    onChange={(e) => setFieldValue("image3", e.target.value)}
                />
                {values.image3 && (
                    <img
                        src={values.image3}
                        alt="Image 3 Preview"
                        className="mt-2 rounded-md max-h-60 object-contain border"
                    />
                )}
            </div>
        </div>
    );
};
